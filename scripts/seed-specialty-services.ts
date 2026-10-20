import { createHash } from "node:crypto";
import type { PrismaClient, Prisma } from "../src/generated/prisma/client";
import {
  specialtyServices,
  specialtyDocument,
  type SpecialtyService,
} from "../src/content/specialty-services";
import { documentText } from "../src/lib/content-rules";
import { services } from "../src/content/services";

function faqId(slug: string, index: number) {
  const hash = createHash("sha256")
    .update(`rycode:specialty-faq:${slug}:${index}`)
    .digest("hex");
  // A deterministic UUIDv8 keeps seed retries from duplicating edited questions.
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-8${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
}

export async function seedSpecialtyServices(
  db: PrismaClient,
  entries: readonly SpecialtyService[] = specialtyServices,
) {
  for (const [position, specialty] of entries.entries()) {
    const sourceKey = "specialty:" + specialty.slug;
    const existing = await db.content.findFirst({
      where: { OR: [{ sourceKey }, { kind: "SERVICE", slug: specialty.slug }] },
      select: { id: true },
    });
    // Do not overwrite editorial changes, archived pages, renamed slugs or FAQs.
    if (existing) continue;
    const parent = services.find((service) => service.id === specialty.parent);
    if (!parent)
      throw new Error("Unknown specialty parent: " + specialty.parent);
    const body = specialtyDocument(specialty);
    await db.$transaction(async (tx) => {
      await tx.content.create({
        data: {
          kind: "SERVICE",
          slug: specialty.slug,
          sourceKey,
          status: "PUBLISHED",
          serviceId: specialty.parent,
          position,
          featuredImage: parent.image,
          tags: specialty.tags,
          publishedAt: new Date(),
          translations: {
            create: {
              locale: "fa",
              approved: true,
              title: specialty.title,
              summary: specialty.summary,
              seoTitle: specialty.seoTitle,
              seoDescription: specialty.seoDescription,
              imageAlt: specialty.title,
              body: body as unknown as Prisma.InputJsonValue,
              bodyText: documentText(body),
            },
          },
        },
      });
      for (const [index, faq] of specialty.faqs.entries())
        await tx.faq.create({
          data: {
            id: faqId(specialty.slug, index),
            scope: "services/" + specialty.slug,
            locale: "fa",
            published: true,
            position: index,
            ...faq,
          },
        });
    });
  }
}
