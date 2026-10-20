import { serviceDocument } from "../src/content/service-document";
import { seedSpecialtyServices } from "./seed-specialty-services";
import { legacyArticleDates } from "../src/content/legacy-article-dates";
import nextEnv from "@next/env";
import { database } from "../src/server/db";
import { services } from "../src/content/services";
import legacy from "../src/content/legacy-content.json";
import { textDocument, documentText } from "../src/lib/content-rules";
import type { Prisma } from "../src/generated/prisma/client";
nextEnv.loadEnvConfig(process.cwd());
const db = database();
for (const service of services) {
  const existing = await db.content.findFirst({
    where: {
      OR: [
        { sourceKey: "service:" + service.id },
        { kind: "SERVICE", slug: service.id },
      ],
    },
    include: { _count: { select: { revisions: true } } },
  });
  if (existing) {
    // Only enrich the original seed before its first editorial save.
    if (
      existing._count.revisions === 0 &&
      existing.sourceKey === "service:" + service.id
    ) {
      for (const locale of ["fa", "en"] as const) {
        const body = serviceDocument(service.id, service.scope[locale], locale);
        await db.contentTranslation.updateMany({
          where: { contentId: existing.id, locale },
          data: {
            body: body as unknown as Prisma.InputJsonValue,
            bodyText: documentText(body),
          },
        });
      }
    }
    continue;
  }
  await db.content.create({
    data: {
      kind: "SERVICE",
      slug: service.id,
      sourceKey: "service:" + service.id,
      status: "PUBLISHED",
      featuredImage: service.image,
      serviceId: service.id,
      position: services.indexOf(service),
      publishedAt: new Date(),
      translations: {
        create: (["fa", "en"] as const).map((locale) => ({
          locale,
          approved: true,
          title: service.title[locale],
          summary: service.summary[locale],
          body: serviceDocument(
            service.id,
            service.scope[locale],
            locale,
          ) as unknown as Prisma.InputJsonValue,
          bodyText: documentText(
            serviceDocument(service.id, service.scope[locale], locale),
          ),
          imageAlt: service.title[locale],
        })),
      },
    },
  });
}
for (const item of legacy.filter((entry) => entry.kind === "ARTICLE")) {
  const existingArticle = await db.content.findUnique({
    where: { kind_slug: { kind: "ARTICLE", slug: item.slug } },
    include: { _count: { select: { revisions: true } } },
  });
  if (existingArticle) {
    const originalDate = legacyArticleDates[item.slug];
    if (
      originalDate &&
      existingArticle.legacy &&
      existingArticle._count.revisions === 0 &&
      existingArticle.publishedAt?.toISOString() !==
        new Date(originalDate).toISOString()
    )
      await db.content.update({
        where: { id: existingArticle.id },
        data: { publishedAt: new Date(originalDate) },
      });
    continue;
  }
  await db.content.create({
    data: {
      kind: "ARTICLE",
      slug: item.slug,
      status: "PUBLISHED",
      legacy: true,
      featuredImage: item.image,
      publishedAt: new Date(legacyArticleDates[item.slug] || Date.now()),
      translations: {
        create: (["fa", "en"] as const).map((locale) => ({
          locale,
          approved: true,
          title: item.title[locale],
          summary: item.summary[locale],
          body: textDocument(
            item.body[locale],
          ) as unknown as Prisma.InputJsonValue,
          bodyText: item.body[locale],
          imageAlt: item.title[locale],
        })),
      },
    },
  });
}
await seedSpecialtyServices(db);
console.log(
  "Seed complete. Existing content was preserved; articles, seven service groups and four Persian specialty pages are editable.",
);
await db.$disconnect();
