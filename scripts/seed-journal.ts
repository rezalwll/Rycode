import nextEnv from "@next/env";
import { database } from "../src/server/db";
import type { Prisma } from "../src/generated/prisma/client";
import { journalSamples } from "../src/content/journal-samples";
import { documentText } from "../src/lib/content-rules";
nextEnv.loadEnvConfig(process.cwd());
const db = database();
let created = 0;
try {
  for (const [position, sample] of journalSamples.entries()) {
    const existing = await db.content.findUnique({
      where: { kind_slug: { kind: "ARTICLE", slug: sample.slug } },
    });
    if (existing) continue; // Never overwrite an editor's changes on a repeated seed.
    await db.content.create({
      data: {
        kind: "ARTICLE",
        slug: sample.slug,
        sourceKey: "journal-sample:" + sample.slug,
        status: "PUBLISHED",
        sample: true,
        featured: position < 3,
        noIndex: true,
        position,
        category: sample.category,
        tags: sample.tags,
        author: "RYCODE",
        publishedAt: new Date(),
        featuredImage: "/brand/journal/" + sample.cover + ".svg",
        translations: {
          create: {
            locale: "fa",
            approved: true,
            title: sample.title,
            summary: sample.summary,
            body: sample.body as Prisma.InputJsonValue,
            bodyText: documentText(sample.body),
            imageAlt: "تصویر مفهومی " + sample.category + " — محتوای نمونه",
            seoDescription: sample.summary,
          },
        },
      },
    });
    created++;
  }
  console.log(
    `Created ${created} clearly labelled, non-indexable sample articles. Existing content was preserved.`,
  );
} finally {
  await db.$disconnect();
}
