import { afterAll, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";
import { database } from "../../src/server/db";
import { businessGuides } from "../../src/content/business-guides";
import { seedBusinessJournal } from "../../scripts/lib/seed-business-journal";
import { journalSamples } from "../../src/content/journal-samples";
import { textDocument } from "../../src/lib/content-rules";

const enabled = process.env.RUN_INTEGRATION === "1";
if (
  enabled &&
  !/^rycode_(test|ci)/.test(
    new URL(process.env.DATABASE_URL || "").pathname.slice(1),
  )
)
  throw new Error("A dedicated test database is required");
const createdIds: string[] = [];
describe.skipIf(!enabled)(
  "Business journal seed and editorial preservation",
  () => {
    afterAll(async () => {
      await database().content.deleteMany({
        where: { id: { in: createdIds } },
      });
      await database().$disconnect();
    });
    it("is repeatable without resetting articles, comments or editorial decisions", async () => {
      const db = database();
      const existing = await db.content.findMany({
        where: { sourceKey: { startsWith: "business-guide:" } },
        select: { id: true },
      });
      await seedBusinessJournal(db);
      const first = await db.content.findMany({
        where: { sourceKey: { startsWith: "business-guide:" } },
        include: { translations: true, comments: true },
        orderBy: { id: "asc" },
      });
      createdIds.push(
        ...first
          .filter((row) => !existing.some((item) => item.id === row.id))
          .map((row) => row.id),
      );
      expect(first).toHaveLength(businessGuides.length);
      expect(
        first.every(
          (row) =>
            !row.sample && row.serviceId && row.translations.length === 2,
        ),
      ).toBe(true);
      expect((await seedBusinessJournal(db)).created).toBe(0);
      const second = await db.content.findMany({
        where: { id: { in: first.map((row) => row.id) } },
        include: { translations: true, comments: true },
        orderBy: { id: "asc" },
      });
      expect(second).toEqual(first);
    });
    it("archives only known untouched samples and preserves edited or unrelated sample records", async () => {
      const db = database();
      const keys = journalSamples
        .slice(0, 2)
        .map((item) => "journal-sample:" + item.slug);
      const occupied = await db.content.findMany({
        where: { sourceKey: { in: keys } },
        select: { id: true, sourceKey: true },
      });
      const fixtureIds: string[] = [];
      try {
        for (const record of occupied)
          await db.content.update({
            where: { id: record.id },
            data: { sourceKey: "preserved-test-" + randomUUID() },
          });
        for (const [index, sourceKey] of [
          ...keys,
          "unrelated-sample-" + randomUUID(),
        ].entries()) {
          const record = await db.content.create({
            data: {
              kind: "ARTICLE",
              slug: "seed-preservation-" + randomUUID(),
              sourceKey,
              sample: true,
              status: "PUBLISHED",
              translations: {
                create: {
                  locale: "fa",
                  approved: true,
                  title: "محتوای تست",
                  summary: "خلاصهٔ تست",
                  body: textDocument("متن تست برای بررسی حفظ ویرایش‌ها"),
                },
              },
              ...(index === 1
                ? {
                    revisions: {
                      create: { actorId: "seed-test", snapshot: {} },
                    },
                  }
                : {}),
            },
          });
          fixtureIds.push(record.id);
        }
        await seedBusinessJournal(db);
        const records = await Promise.all(
          fixtureIds.map((id) =>
            db.content.findUniqueOrThrow({ where: { id } }),
          ),
        );
        expect(records.map((row) => row.status)).toEqual([
          "ARCHIVED",
          "PUBLISHED",
          "PUBLISHED",
        ]);
      } finally {
        await db.content.deleteMany({ where: { id: { in: fixtureIds } } });
        for (const record of occupied)
          await db.content.update({
            where: { id: record.id },
            data: { sourceKey: record.sourceKey },
          });
      }
    });
  },
);
