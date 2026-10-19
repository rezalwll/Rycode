import { describe, it, expect, afterAll } from "vitest";
import { randomUUID } from "node:crypto";
import { database } from "../../src/server/db";
import { lookupContent } from "../../src/server/content";
import { consumeLimit, HttpError } from "../../src/server/security";
const enabled = process.env.RUN_INTEGRATION === "1";
if (
  enabled &&
  !/^rycode_(test|ci)/.test(
    new URL(process.env.DATABASE_URL || "").pathname.slice(1),
  )
)
  throw new Error(
    "Integration tests require a dedicated rycode_test or rycode_ci database",
  );
const ids: string[] = [];
describe.skipIf(!enabled)("Real PostgreSQL publication and persistence", () => {
  afterAll(async () => {
    await database().content.deleteMany({ where: { id: { in: ids } } });
    await database().$disconnect();
  });
  it("owns a withdrawn slug without exposing fallback or translation", async () => {
    const slug = "test-فارسی-" + randomUUID();
    const record = await database().content.create({
      data: {
        kind: "ARTICLE",
        slug,
        status: "DRAFT",
        translations: {
          create: {
            locale: "fa",
            approved: true,
            title: "آزمون فارسی",
            summary: "خلاصهٔ آزمون",
            body: { type: "doc", content: [] },
          },
        },
      },
    });
    ids.push(record.id);
    expect(await lookupContent("ARTICLE", slug, "fa")).toEqual({
      owned: true,
      content: null,
    });
    await database().content.update({
      where: { id: record.id },
      data: { status: "PUBLISHED", publishedAt: new Date() },
    });
    expect((await lookupContent("ARTICLE", slug, "fa")).content?.title).toBe(
      "آزمون فارسی",
    );
    expect(
      (await lookupContent("ARTICLE", encodeURIComponent(slug), "fa")).content
        ?.title,
    ).toBe("آزمون فارسی");
    expect((await lookupContent("ARTICLE", slug, "en")).content).toBeNull();
    await database().content.update({
      where: { id: record.id },
      data: { status: "ARCHIVED" },
    });
    expect((await lookupContent("ARTICLE", slug, "fa")).content).toBeNull();
  });
  it("makes scheduled content visible only when due", async () => {
    const slug = "scheduled-" + randomUUID();
    const record = await database().content.create({
      data: {
        kind: "ARTICLE",
        slug,
        status: "SCHEDULED",
        scheduledAt: new Date(Date.now() + 60000),
        translations: {
          create: {
            locale: "fa",
            approved: true,
            title: "انتشار زمان‌بندی‌شده",
            summary: "خلاصه",
            body: { type: "doc", content: [] },
          },
        },
      },
    });
    ids.push(record.id);
    expect((await lookupContent("ARTICLE", slug, "fa")).content).toBeNull();
    await database().content.update({
      where: { id: record.id },
      data: { scheduledAt: new Date(Date.now() - 1000) },
    });
    expect((await lookupContent("ARTICLE", slug, "fa")).content).not.toBeNull();
  });
  it("enforces rate limits atomically across concurrent requests", async () => {
    const results = await Promise.allSettled(
      Array.from({ length: 10 }, () =>
        consumeLimit("integration-" + ids[0], 3, 60),
      ),
    );
    expect(results.filter((r) => r.status === "fulfilled")).toHaveLength(3);
    for (const result of results.filter((r) => r.status === "rejected"))
      expect((result as PromiseRejectedResult).reason).toBeInstanceOf(
        HttpError,
      );
  });
  it("rolls back content and revision changes in one transaction", async () => {
    const id = randomUUID();
    await expect(
      database().$transaction(async (tx) => {
        await tx.content.create({
          data: { id, kind: "ARTICLE", slug: "rollback-" + id },
        });
        throw new Error("rollback");
      }),
    ).rejects.toThrow("rollback");
    expect(await database().content.findUnique({ where: { id } })).toBeNull();
  });
});
