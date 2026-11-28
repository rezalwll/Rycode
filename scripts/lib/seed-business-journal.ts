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
      let updated = 0;
      for (const [position, guide] of businessGuides.entries()) {
        const sourceKey = "business-guide:" + guide.slug;
        const coverPath = "/brand/journal/business/" + guide.cover;
        const featuredImage = coverPath + ".webp";
        const translations = (["fa", "en"] as const).map((locale) => {
          const translation = guide.translations[locale];
          const body = { type: "doc", content: translation.content };
          return {
            locale,
            title: translation.title,
            summary: translation.summary,
            body: body as Prisma.InputJsonValue,
            bodyText: documentText(body),
            imageAlt: translation.imageAlt,
            seoDescription: translation.summary,
          };
        });
        const existing = await tx.content.findUnique({
          where: { kind_slug: { kind: "ARTICLE", slug: guide.slug } },
          select: { id: true, sourceKey: true, featuredImage: true },
        });
        if (existing) {
          const previousCover = coverPath + ".png";
          if (
            existing.sourceKey !== sourceKey ||
            existing.featuredImage !== previousCover
          )
            continue;

          // Take the same lock as the CMS before checking for editorial changes.
          await tx.$queryRaw`SELECT id FROM "Content" WHERE id = ${existing.id} FOR UPDATE`;
          const untouched = await tx.content.findUnique({
            where: {
              id: existing.id,
              sourceKey,
              featuredImage: previousCover,
              revisions: { none: {} },
            },
            select: { id: true },
          });
          if (!untouched) continue;
          await tx.content.update({
            where: { id: untouched.id },
            data: {
              featuredImage,
              translations: {
                updateMany: translations.map(({ locale, ...data }) => ({
                  where: { locale },
                  data,
                })),
              },
            },
          });
          updated++;
          continue;
        }
        const service = services.find((item) => item.id === guide.serviceId)!;
        await tx.content.create({
          data: {
            kind: "ARTICLE",
            slug: guide.slug,
            sourceKey,
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
            featuredImage,
            translations: {
              create: translations.map((text) => ({ ...text, approved: true })),
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
      return { created, updated, archived: archived.count };
    },
    { timeout: 30000 },
  );
}
