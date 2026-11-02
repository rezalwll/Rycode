import type { PrismaClient, Prisma } from "../../src/generated/prisma/client";
import { businessGuides } from "../../src/content/business-guides";
import { journalSamples } from "../../src/content/journal-samples";
import { legacyArticleDates } from "../../src/content/legacy-article-dates";
import { documentText } from "../../src/lib/content-rules";
import { services } from "../../src/content/services";

export async function seedBusinessJournal(db: PrismaClient) {
  return db.$transaction(
    async (tx) => {
      let created = 0;
      for (const [position, guide] of businessGuides.entries()) {
        const existing = await tx.content.findUnique({
          where: { kind_slug: { kind: "ARTICLE", slug: guide.slug } },
          select: { id: true },
        });
        if (existing) continue; // Preserve edits, moderation and the publication decision.
        const service = services.find((item) => item.id === guide.serviceId)!;
        await tx.content.create({
          data: {
            kind: "ARTICLE",
            slug: guide.slug,
            sourceKey: "business-guide:" + guide.slug,
            status: "PUBLISHED",
            sample: false,
            noIndex: false,
            featured: position < 3,
            position,
            serviceId: guide.serviceId,
            author: "RYCODE",
            category: "",
            tags: [service.title.fa, service.title.en],
            publishedAt: new Date(),
            featuredImage: "/brand/journal/business/" + guide.cover + ".png",
            translations: {
              create: (["fa", "en"] as const).map((locale) => {
                const translation = guide.translations[locale];
                const body = { type: "doc", content: translation.content };
                return {
                  locale,
                  approved: true,
                  title: translation.title,
                  summary: translation.summary,
                  body: body as Prisma.InputJsonValue,
                  bodyText: documentText(body),
                  imageAlt: translation.title,
                  seoDescription: translation.summary,
                };
              }),
            },
          },
        });
        created++;
      }
      // Retain the old records, URLs and comments in the CMS. Only untouched seed
      // content is archived; edited articles and arbitrary sample records are safe.
      const archived = await tx.content.updateMany({
        where: {
          kind: "ARTICLE",
          status: { in: ["PUBLISHED", "SCHEDULED"] },
          revisions: { none: {} },
          OR: [
            {
              sample: true,
              sourceKey: {
                in: journalSamples.map((item) => "journal-sample:" + item.slug),
              },
            },
            { legacy: true, slug: { in: Object.keys(legacyArticleDates) } },
          ],
        },
        data: { status: "ARCHIVED", featured: false },
      });
      return { created, archived: archived.count };
    },
    { timeout: 30000 },
  );
}
