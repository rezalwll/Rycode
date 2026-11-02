import { database } from "./db";
import { fingerprint, HttpError } from "./security";
import { commentSchema, moderationSchema } from "@/lib/comments";
import type { CommentPage } from "@/lib/comments";
import type { Locale } from "@/lib/i18n";
import type { Prisma } from "@/generated/prisma/client";

function visibleArticle(locale: Locale): Prisma.ContentWhereInput {
  return {
    kind: "ARTICLE",
    OR: [
      { status: "PUBLISHED" },
      { status: "SCHEDULED", scheduledAt: { lte: new Date() } },
    ],
    translations: { some: { locale, approved: true } },
  };
}
export async function publicComments(
  articleId: string,
  locale: Locale,
  page = 1,
): Promise<CommentPage> {
  const article = await database().content.findFirst({
    where: { id: articleId, ...visibleArticle(locale) },
    select: { id: true },
  });
  if (!article) throw new HttpError(404, "Article not found");
  const where: Prisma.CommentWhereInput = {
    articleId,
    locale,
    status: "APPROVED",
    article: visibleArticle(locale),
  };
  const pageSize = 10;
  const [items, total] = await database().$transaction([
    database().comment.findMany({
      where,
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      select: {
        id: true,
        name: true,
        body: true,
        reply: true,
        createdAt: true,
      },
    }),
    database().comment.count({ where }),
  ]);
  return {
    items: items.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
    })),
    total,
    page,
    pageSize,
  };
}
export async function submitComment(raw: unknown) {
  const input = commentSchema.parse(raw);
  const article = await database().content.findFirst({
    where: { id: input.articleId, ...visibleArticle(input.locale) },
    select: { id: true },
  });
  if (!article) throw new HttpError(404, "Article not found");
  const hash = fingerprint(
    JSON.stringify([
      input.articleId,
      input.locale,
      input.name,
      input.email?.toLowerCase() || "",
      input.body,
      new Date().toISOString().slice(0, 10),
    ]),
  );
  try {
    await database().comment.upsert({
      where: { requestKey: input.requestKey },
      update: {},
      create: {
        articleId: input.articleId,
        locale: input.locale,
        name: input.name,
        email: input.email?.toLowerCase() || null,
        body: input.body,
        requestKey: input.requestKey,
        fingerprint: hash,
        status: "PENDING",
      },
    });
  } catch (error) {
    // A repeated identical submission must not create another moderation item.
    if (!(
      typeof error === "object" &&
      error &&
      "code" in error &&
      error.code === "P2002"
    ))
      throw error;
    if (
      !(await database().comment.findUnique({
        where: { fingerprint: hash },
        select: { id: true },
      }))
    )
      throw error;
  }
}
export async function moderateComment(
  actor: { id: string; role: string },
  raw: unknown,
) {
  if (actor.role !== "ADMIN")
    throw new HttpError(403, "Administrator access required");
  const input = moderationSchema.parse(raw);
  return database().$transaction(async (tx) => {
    const updated = await tx.comment.updateMany({
      where: { id: input.id, updatedAt: new Date(input.updatedAt) },
      data: {
        status: input.status,
        reply: input.reply || null,
        moderatedAt: new Date(),
        moderatedBy: actor.id,
      },
    });
    if (!updated.count)
      throw new HttpError(409, "این دیدگاه تغییر کرده است؛ فهرست را تازه کنید");
    await tx.auditLog.create({
      data: {
        actorId: actor.id,
        entityId: input.id,
        action: "comment.moderated",
        metadata: { status: input.status, hasReply: Boolean(input.reply) },
      },
    });
    return { ok: true };
  });
}
