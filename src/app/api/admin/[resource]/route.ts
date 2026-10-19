import { z } from "zod";
import { database } from "@/server/db";
import { requireStaff } from "@/server/auth";
import { contentPath } from "@/server/content";
import {
  contentSchema,
  documentText,
  normalizeDigits,
  type RichNode,
} from "@/lib/content-rules";
import {
  assertSameOrigin,
  boundedJson,
  HttpError,
  safeInternalPath,
  consumeLimit,
} from "@/server/security";
import type { Prisma } from "@/generated/prisma/client";

type Context = { params: Promise<{ resource: string }> };
const adminOnly = new Set([
  "leads",
  "settings",
  "redirects",
  "analytics",
  "audit",
  "users",
]);
async function failure(error: unknown) {
  if (error instanceof z.ZodError)
    return Response.json(
      { error: error.issues.map((i) => i.message).join("؛ ") },
      { status: 422 },
    );
  if (error instanceof HttpError)
    return Response.json({ error: error.message }, { status: error.status });
  if (
    typeof error === "object" &&
    error &&
    "code" in error &&
    error.code === "P2002"
  )
    return Response.json(
      { error: "این نشانی یا رکورد قبلاً وجود دارد / Duplicate record" },
      { status: 409 },
    );
  console.error(
    "Admin operation failed",
    error instanceof Error ? error.name : "UnknownError",
  );
  return Response.json(
    { error: "عملیات انجام نشد؛ دوباره تلاش کنید / Operation failed" },
    { status: 503 },
  );
}
export async function GET(request: Request, context: Context) {
  try {
    const { resource } = await context.params;
    await requireStaff(adminOnly.has(resource));
    const url = new URL(request.url);
    const search = (url.searchParams.get("q") || "").slice(0, 100);
    const page = Math.max(
      1,
      Math.min(Number(url.searchParams.get("page")) || 1, 10000),
    );
    const take = 30,
      skip = (page - 1) * take;
    if (resource === "content") {
      if (url.searchParams.get("choices") === "1")
        return Response.json(
          await database().content.findMany({
            take: 250,
            orderBy: { updatedAt: "desc" },
            select: {
              id: true,
              kind: true,
              slug: true,
              serviceId: true,
              translations: { select: { locale: true, title: true } },
            },
          }),
        );
      const id = url.searchParams.get("id");
      if (id)
        return Response.json(
          await database().content.findUnique({
            where: { id: z.string().uuid().parse(id) },
            include: {
              translations: true,
              revisions: { orderBy: { createdAt: "desc" }, take: 15 },
            },
          }),
        );
      const kind = url.searchParams.get("kind");
      const where: Prisma.ContentWhereInput = {
        ...(kind
          ? {
              kind: z
                .enum(["ARTICLE", "SERVICE", "PROJECT", "PAGE"])
                .parse(kind),
            }
          : {}),
        ...(search
          ? {
              translations: {
                some: { title: { contains: search, mode: "insensitive" } },
              },
            }
          : {}),
      };
      const [items, total] = await Promise.all([
        database().content.findMany({
          where,
          include: { translations: true },
          take,
          skip,
          orderBy: { updatedAt: "desc" },
        }),
        database().content.count({ where }),
      ]);
      return Response.json({ items, total });
    }
    if (resource === "leads") {
      const id = url.searchParams.get("id");
      if (id)
        return Response.json(
          await database().lead.findUnique({
            where: { id: z.string().uuid().parse(id) },
            include: { notes: { orderBy: { createdAt: "desc" } } },
          }),
        );
      const status = url.searchParams.get("status");
      const where: Prisma.LeadWhereInput = {
        ...(status
          ? {
              status: z
                .enum([
                  "NEW",
                  "CONTACTED",
                  "QUALIFIED",
                  "WON",
                  "LOST",
                  "SPAM",
                  "ARCHIVED",
                ])
                .parse(status),
            }
          : {}),
        ...(search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
                { receipt: { contains: search, mode: "insensitive" } },
              ],
            }
          : {}),
      };
      const [items, total] = await Promise.all([
        database().lead.findMany({
          where,
          take,
          skip,
          orderBy: { createdAt: "desc" },
        }),
        database().lead.count({ where }),
      ]);
      return Response.json({ items, total });
    }
    if (resource === "settings")
      return Response.json(await database().siteSetting.findMany());
    if (resource === "redirects")
      return Response.json(
        await database().redirect.findMany({
          take,
          skip,
          orderBy: { createdAt: "desc" },
        }),
      );
    if (resource === "media")
      return Response.json(
        await database().media.findMany({
          take,
          skip,
          orderBy: { createdAt: "desc" },
        }),
      );
    if (resource === "faqs")
      return Response.json(
        await database().faq.findMany({
          take: 100,
          orderBy: { position: "asc" },
        }),
      );
    if (resource === "audit")
      return Response.json(
        await database().auditLog.findMany({
          take,
          skip,
          orderBy: { createdAt: "desc" },
        }),
      );
    if (resource === "users")
      return Response.json(
        await database().user.findMany({
          select: { id: true, name: true, email: true, role: true },
        }),
      );
    if (resource === "analytics") {
      const since = new Date(Date.now() - 30 * 86400000);
      const [events, paths, leads] = await Promise.all([
        database().analyticsEvent.groupBy({
          by: ["name"],
          where: { createdAt: { gte: since } },
          _count: true,
        }),
        database().analyticsEvent.groupBy({
          by: ["path"],
          where: { createdAt: { gte: since } },
          _count: true,
          orderBy: { _count: { path: "desc" } },
          take: 20,
        }),
        database().lead.groupBy({
          by: ["status"],
          where: { createdAt: { gte: since } },
          _count: true,
        }),
      ]);
      return Response.json({ events, paths, leads });
    }
    throw new HttpError(404, "Unknown section");
  } catch (error) {
    return failure(error);
  }
}
export async function POST(request: Request, context: Context) {
  try {
    await assertSameOrigin(request);
    const { resource } = await context.params;
    const actor = await requireStaff(adminOnly.has(resource));
    await consumeLimit("admin:" + actor.id, 300, 300);
    const raw = await boundedJson(request, 800000);
    let entityId = "";
    if (resource === "content") {
      const input = contentSchema.parse(raw);
      if (actor.role !== "ADMIN" && input.status !== "DRAFT")
        throw new HttpError(403, "Publishing requires an administrator");
      let existing = input.id
        ? await database().content.findUnique({
            where: { id: input.id },
            include: { translations: true },
          })
        : null;
      if (input.id && !existing) throw new HttpError(404, "Content not found");
      if (existing?.sourceKey && existing.kind !== input.kind)
        throw new HttpError(
          422,
          "The kind of a seeded service group cannot change",
        );
      if (actor.role !== "ADMIN" && existing && existing.status !== "DRAFT")
        throw new HttpError(403, "Published content requires an administrator");
      const result = await database().$transaction(async (tx) => {
        if (existing) {
          await tx.$queryRaw`SELECT id FROM "Content" WHERE id = ${existing.id} FOR UPDATE`;
          const current = await tx.content.findUnique({
            where: { id: existing.id },
            include: { translations: true },
          });
          if (!current) throw new HttpError(404, "Content not found");
          if (actor.role !== "ADMIN" && current.status !== "DRAFT")
            throw new HttpError(
              403,
              "Published content requires an administrator",
            );
          existing = current;
        }
        if (
          existing &&
          (existing.slug !== input.slug || existing.kind !== input.kind)
        ) {
          for (const prefix of ["", "/en"]) {
            const source = safeInternalPath(prefix + contentPath(existing));
            const destination = safeInternalPath(prefix + contentPath(input));
            await tx.redirect.deleteMany({
              where: {
                source: destination,
              },
            });
            await tx.redirect.upsert({
              where: {
                source,
              },
              create: {
                source,
                destination,
              },
              update: {
                destination,
              },
            });
          }
        }
        const fields = {
          legacy: false,
          kind: input.kind,
          slug: input.slug,
          status: input.status,
          featuredImage: input.featuredImage || null,
          author: input.author,
          category: input.category,
          tags: input.tags,
          relatedIds: input.relatedIds,
          serviceId: input.serviceId || null,
          noIndex: input.noIndex,
          position: input.position,
          scheduledAt:
            input.status === "SCHEDULED" ? new Date(input.scheduledAt!) : null,
          publishedAt:
            input.status === "PUBLISHED"
              ? existing?.publishedAt || new Date()
              : existing?.publishedAt || null,
        };
        const record = existing
          ? await tx.content.update({
              where: { id: existing.id },
              data: fields,
            })
          : await tx.content.create({ data: fields });
        for (const text of input.translations)
          await tx.contentTranslation.upsert({
            where: {
              contentId_locale: { contentId: record.id, locale: text.locale },
            },
            create: {
              contentId: record.id,
              ...text,
              body: text.body as Prisma.InputJsonValue,
              bodyText: documentText(text.body as RichNode),
            },
            update: {
              ...text,
              body: text.body as Prisma.InputJsonValue,
              bodyText: documentText(text.body as RichNode),
            },
          });
        await tx.contentTranslation.deleteMany({
          where: {
            contentId: record.id,
            locale: { notIn: input.translations.map((t) => t.locale) },
          },
        });
        await tx.contentRevision.create({
          data: {
            contentId: record.id,
            actorId: actor.id,
            snapshot: input as unknown as Prisma.InputJsonValue,
          },
        });
        await tx.auditLog.create({
          data: {
            actorId: actor.id,
            action: "content.saved",
            entityId: record.id,
            metadata: { status: input.status },
          },
        });
        return record;
      });
      return Response.json({ id: result.id });
    }
    if (resource === "leads") {
      const input = z
        .object({
          id: z.string().uuid(),
          status: z
            .enum([
              "NEW",
              "CONTACTED",
              "QUALIFIED",
              "WON",
              "LOST",
              "SPAM",
              "ARCHIVED",
            ])
            .optional(),
          note: z.string().trim().min(1).max(5000).optional(),
        })
        .parse(raw);
      await database().$transaction(async (tx) => {
        if (input.status)
          await tx.lead.update({
            where: { id: input.id },
            data: { status: input.status },
          });
        if (input.note)
          await tx.leadNote.create({
            data: { leadId: input.id, actorId: actor.id, body: input.note },
          });
        await tx.auditLog.create({
          data: {
            actorId: actor.id,
            action: "lead.updated",
            entityId: input.id,
          },
        });
      });
      return Response.json({ id: input.id });
    }
    if (resource === "settings") {
      const input = z
        .object({
          key: z.enum([
            "contact.phone",
            "contact.email",
            "contact.address.fa",
            "contact.address.en",
            "social.instagram",
            "social.telegram",
            "social.bale",
          ]),
          value: z.string().trim().max(500),
        })
        .parse(raw);
      if (input.key.startsWith("social.") && input.value) {
        const domains: Record<string, string[]> = {
          "social.instagram": ["instagram.com", "www.instagram.com"],
          "social.telegram": ["t.me"],
          "social.bale": ["ble.ir"],
        };
        const url = z.url().parse(input.value);
        const parsed = new URL(url);
        if (
          parsed.protocol !== "https:" ||
          !domains[input.key]?.includes(parsed.hostname) ||
          parsed.username ||
          parsed.password ||
          parsed.port ||
          !/^\/[a-zA-Z0-9_.@/-]+$/.test(parsed.pathname) ||
          parsed.search ||
          parsed.hash
        )
          throw new HttpError(422, "Enter this network's official profile URL");
      }
      if (input.key === "contact.phone" && input.value) {
        input.value = normalizeDigits(input.value).replace(/[\s()-]/g, "");
        z.string()
          .regex(/^\+?[0-9]{7,15}$/)
          .parse(input.value);
      }
      if (input.key === "contact.email" && input.value)
        z.email().parse(input.value);
      await database().siteSetting.upsert({
        where: { key: input.key },
        create: input,
        update: { value: input.value },
      });
      entityId = input.key;
    } else if (resource === "redirects") {
      if (
        typeof raw === "object" &&
        raw &&
        "action" in raw &&
        raw.action === "remove"
      ) {
        const input = z.object({ id: z.string().uuid() }).parse(raw);
        await database().$transaction([
          database().redirect.delete({ where: { id: input.id } }),
          database().auditLog.create({
            data: {
              actorId: actor.id,
              action: "redirect.removed",
              entityId: input.id,
            },
          }),
        ]);
        return Response.json({ ok: true });
      }
      const input = z
        .object({
          source: z.string().max(300),
          destination: z.string().max(300),
          permanent: z.boolean().default(true),
        })
        .parse(raw);
      const source = safeInternalPath(input.source),
        destination = safeInternalPath(input.destination);
      if (
        source === destination ||
        /[?#]/.test(source) ||
        /^\/(?:en\/|fa\/)?(api|admin|media|_next)(\/|$)/.test(source)
      )
        throw new HttpError(422, "Invalid redirect source");
      let target = destination;
      const visited = new Set([source]);
      for (let depth = 0; depth < 8; depth++) {
        if (visited.has(target)) throw new HttpError(422, "Redirect cycle");
        visited.add(target);
        const next = await database().redirect.findUnique({
          where: { source: target },
        });
        if (!next) break;
        target = next.destination;
        if (depth === 7) throw new HttpError(422, "Redirect chain too long");
      }
      const record = await database().redirect.upsert({
        where: { source },
        create: { source, destination, permanent: input.permanent },
        update: { destination, permanent: input.permanent },
      });
      entityId = record.id;
    } else if (resource === "faqs") {
      const input = z
        .object({
          id: z.string().uuid().optional(),
          scope: z
            .string()
            .regex(/^[\p{L}\p{N}/-]+$/u)
            .max(160),
          locale: z.enum(["fa", "en"]),
          question: z.string().trim().min(3).max(300),
          answer: z.string().trim().min(5).max(5000),
          published: z.boolean(),
          position: z.number().int().min(0).max(1000),
        })
        .parse(raw);
      if (actor.role !== "ADMIN" && input.published)
        throw new HttpError(403, "Publishing requires an administrator");
      if (
        actor.role !== "ADMIN" &&
        input.id &&
        (await database().faq.findUnique({ where: { id: input.id } }))
          ?.published
      )
        throw new HttpError(403, "Published content requires an administrator");
      const record = await database().$transaction(async (tx) => {
        if (input.id) {
          await tx.$queryRaw`SELECT id FROM "Faq" WHERE id = ${input.id} FOR UPDATE`;
          const current = await tx.faq.findUnique({ where: { id: input.id } });
          if (!current) throw new HttpError(404, "FAQ not found");
          if (actor.role !== "ADMIN" && current.published)
            throw new HttpError(
              403,
              "Published content requires an administrator",
            );
          return tx.faq.update({ where: { id: input.id }, data: input });
        }
        return tx.faq.create({ data: input });
      });
      entityId = record.id;
    } else if (resource === "users") {
      const input = z
        .object({ id: z.string(), role: z.enum(["ADMIN", "EDITOR"]) })
        .parse(raw);
      if (input.id === actor.id && input.role !== "ADMIN")
        throw new HttpError(
          422,
          "You cannot remove your own administrator access",
        );
      await database().$transaction(async (tx) => {
        await tx.$queryRaw`SELECT id FROM "User" WHERE role = 'ADMIN' ORDER BY id FOR UPDATE`;
        const liveActor = await tx.user.findUnique({ where: { id: actor.id } });
        if (liveActor?.role !== "ADMIN")
          throw new HttpError(403, "Administrator access required");
        const target = await tx.user.findUnique({ where: { id: input.id } });
        if (
          target?.role === "ADMIN" &&
          input.role !== "ADMIN" &&
          (await tx.user.count({ where: { role: "ADMIN" } })) <= 1
        )
          throw new HttpError(422, "At least one administrator must remain");
        await tx.user.update({
          where: { id: input.id },
          data: { role: input.role },
        });
      });
      entityId = input.id;
    } else throw new HttpError(404, "Unknown section");
    await database().auditLog.create({
      data: { actorId: actor.id, action: resource + ".saved", entityId },
    });
    return Response.json({ ok: true });
  } catch (error) {
    return failure(error);
  }
}
