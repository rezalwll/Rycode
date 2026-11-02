import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { randomUUID } from "node:crypto";
import { database } from "../../src/server/db";
import { textDocument } from "../../src/lib/content-rules";
import { commentSchema } from "../../src/lib/comments";
import {
  publicComments,
  moderateComment,
  submitComment,
} from "../../src/server/comments";
import { HttpError, fingerprint } from "../../src/server/security";
import { GET, POST } from "../../src/app/api/comments/route";
import {
  GET as adminGET,
  POST as adminPOST,
} from "../../src/app/api/admin/[resource]/route";

vi.mock("../../src/server/auth", () => ({ requireStaff: vi.fn() }));
vi.mock("../../src/server/security", async (original) => ({
  ...(await original<typeof import("../../src/server/security")>()),
  requestKey: async (prefix: string) => prefix + ":integration-comments",
}));
import { requireStaff } from "../../src/server/auth";

const enabled = process.env.RUN_INTEGRATION === "1";
if (
  enabled &&
  !/^rycode_(test|ci)/.test(
    new URL(process.env.DATABASE_URL || "").pathname.slice(1),
  )
)
  throw new Error("A dedicated test database is required");
const ids: string[] = [];
const actor = {
  id: "comment-test-admin-" + randomUUID(),
  role: "ADMIN",
  name: "Test admin",
  email: "test@example.test",
};
let articleId = "",
  draftId = "";
const origin = new URL(
  process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://127.0.0.1:3014",
).origin;
const payload = (overrides = {}) => ({
  articleId,
  locale: "fa",
  name: "کاربر آزمایشی",
  email: "private@example.test",
  body: "یک پرسش آزمایشی دربارهٔ مقاله",
  requestKey: randomUUID(),
  startedAt: Date.now() - 2000,
  ...overrides,
});
const request = (body: unknown, requestOrigin = origin) =>
  new Request(origin + "/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json", origin: requestOrigin },
    body: JSON.stringify(body),
  });
const context = { params: Promise.resolve({ resource: "comments" }) };

describe.skipIf(!enabled)("Moderated article comments", () => {
  beforeAll(async () => {
    for (const status of ["PUBLISHED", "DRAFT"] as const) {
      const record = await database().content.create({
        data: {
          kind: "ARTICLE",
          slug: "comments-test-" + randomUUID(),
          status,
          translations: {
            create: {
              locale: "fa",
              approved: true,
              title: "آزمون دیدگاه",
              summary: "خلاصه",
              body: textDocument("محتوای آزمون دیدگاه"),
            },
          },
        },
      });
      ids.push(record.id);
    }
    [articleId, draftId] = ids;
    await database().rateLimit.deleteMany({
      where: { key: fingerprint("comments:integration-comments") },
    });
  });
  afterAll(async () => {
    await database().content.deleteMany({ where: { id: { in: ids } } });
    await database().auditLog.deleteMany({ where: { actorId: actor.id } });
    await database().rateLimit.deleteMany({
      where: {
        key: {
          in: [
            fingerprint("comments:integration-comments"),
            fingerprint("admin:" + actor.id),
          ],
        },
      },
    });
    await database().$disconnect();
    vi.restoreAllMocks();
  });
  it("accepts anonymous comments as pending and deduplicates retries and identical resubmissions", async () => {
    const input = payload({ status: "APPROVED" });
    expect((await POST(request(input))).status).toBe(201);
    expect((await POST(request(input))).status).toBe(201);
    expect(
      (await POST(request({ ...input, requestKey: randomUUID() }))).status,
    ).toBe(201);
    const records = await database().comment.findMany({ where: { articleId } });
    expect(records).toHaveLength(1);
    expect(records[0].status).toBe("PENDING");
    expect((await publicComments(articleId, "fa")).total).toBe(0);
    const response = await GET(
      new Request(origin + "/api/comments?articleId=" + articleId),
    );
    expect(await response.json()).toMatchObject({ total: 0, items: [] });
  });
  it("requires an administrator, publishes only approved text and reply, and can withdraw approval", async () => {
    const comment = await database().comment.findFirstOrThrow({
      where: { articleId },
    });
    const input = {
      id: comment.id,
      status: "APPROVED",
      reply: "پاسخ مدیر به پرسش",
      updatedAt: comment.updatedAt.toISOString(),
    };
    await expect(
      moderateComment({ ...actor, role: "EDITOR" }, input),
    ).rejects.toMatchObject({ status: 403 });
    await moderateComment(actor, input);
    const visible = await publicComments(articleId, "fa");
    expect(visible.total).toBe(1);
    expect(visible.items[0].reply).toBe(input.reply);
    expect(Object.keys(visible.items[0]).sort()).toEqual([
      "body",
      "createdAt",
      "id",
      "name",
      "reply",
    ]);
    expect(JSON.stringify(visible)).not.toContain("private@example.test");
    await expect(moderateComment(actor, input)).rejects.toMatchObject({
      status: 409,
    });
    const approved = await database().comment.findUniqueOrThrow({
      where: { id: comment.id },
    });
    await moderateComment(actor, {
      ...input,
      status: "REJECTED",
      updatedAt: approved.updatedAt.toISOString(),
    });
    expect((await publicComments(articleId, "fa")).total).toBe(0);
    expect(
      await database().auditLog.count({ where: { actorId: actor.id } }),
    ).toBe(2);
  });
  it("does not accept comments for drafts, unknown articles or unavailable translations", async () => {
    await expect(
      submitComment(payload({ articleId: draftId })),
    ).rejects.toMatchObject({ status: 404 });
    await expect(
      submitComment(payload({ articleId: randomUUID() })),
    ).rejects.toMatchObject({ status: 404 });
    await expect(
      submitComment(payload({ locale: "en" })),
    ).rejects.toMatchObject({ status: 404 });
    await expect(publicComments(draftId, "fa")).rejects.toMatchObject({
      status: 404,
    });
    await database().content.update({
      where: { id: articleId },
      data: { status: "ARCHIVED" },
    });
    await expect(publicComments(articleId, "fa")).rejects.toMatchObject({
      status: 404,
    });
    await database().content.update({
      where: { id: articleId },
      data: { status: "PUBLISHED" },
    });
  });
  it("enforces request origin, form limits, timing and honeypot without publishing anything", async () => {
    expect(
      (await POST(request(payload(), "https://untrusted.example"))).status,
    ).toBe(403);
    expect((await POST(request(payload({ body: "a" })))).status).toBe(422);
    expect(
      (await POST(request(payload({ startedAt: Date.now() + 10000 })))).status,
    ).toBe(422);
    expect(
      (await POST(request(payload({ body: "a".repeat(21000) })))).status,
    ).toBe(413);
    const before = await database().comment.count({ where: { articleId } });
    expect((await POST(request(payload({ website: "bot" })))).status).toBe(200);
    expect(await database().comment.count({ where: { articleId } })).toBe(
      before,
    );
    expect(commentSchema.safeParse(payload({ name: " " })).success).toBe(false);
  });
  it("denies anonymous moderation and allows authenticated moderation through the admin endpoint", async () => {
    vi.mocked(requireStaff).mockRejectedValueOnce(
      new HttpError(401, "Sign in required"),
    );
    expect(
      (await adminGET(new Request(origin + "/api/admin/comments"), context))
        .status,
    ).toBe(401);
    vi.mocked(requireStaff).mockRejectedValueOnce(
      new HttpError(403, "Administrator access required"),
    );
    expect((await adminPOST(request({}), context)).status).toBe(403);
    vi.mocked(requireStaff).mockResolvedValue(actor);
    const list = await adminGET(
      new Request(
        origin + "/api/admin/comments?q=" + encodeURIComponent("آزمون"),
      ),
      context,
    );
    const data = await list.json();
    expect(data.total).toBeGreaterThan(0);
    expect(vi.mocked(requireStaff)).toHaveBeenLastCalledWith(true);
    const row = data.items.find((item: { article: { slug: string } }) =>
      item.article.slug.startsWith("comments-test-"),
    );
    expect(
      (
        await adminPOST(
          request({
            id: row.id,
            updatedAt: row.updatedAt,
            status: "SPAM",
            reply: "",
          }),
          context,
        )
      ).status,
    ).toBe(200);
    expect((await publicComments(articleId, "fa")).total).toBe(0);
  });
  it("paginates approved comments without leaking other languages or moderation records", async () => {
    await database().comment.createMany({
      data: Array.from({ length: 12 }, (_, index) => ({
        articleId,
        locale: "fa",
        name: "کاربر " + index,
        body: "متن آزمون صفحه‌بندی",
        requestKey: randomUUID(),
        fingerprint: randomUUID(),
        status: "APPROVED" as const,
      })),
    });
    const first = await publicComments(articleId, "fa"),
      second = await publicComments(articleId, "fa", 2);
    expect(first.total).toBe(12);
    expect(first.items).toHaveLength(10);
    expect(second.items).toHaveLength(2);
    expect(
      new Set([...first.items, ...second.items].map((item) => item.id)).size,
    ).toBe(12);
  });
  it("limits repeated submissions", async () => {
    let status = 0;
    for (let index = 0; index < 9; index++) {
      status = (
        await POST(request(payload({ body: "تست محدودیت ارسال " + index })))
      ).status;
      if (status === 429) break;
    }
    expect(status).toBe(429);
  });
});
