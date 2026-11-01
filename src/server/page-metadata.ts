import { headers } from "next/headers";
import legacy from "@/content/legacy-content.json";
import { getTranslations } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/seo";
import { lookupContent, contentPath } from "./content";
import type { ContentKind } from "@/generated/prisma/client";
export async function contentMetadata(
  kind: ContentKind,
  slug: string,
  fallbackTitle: string,
  fallbackDescription?: string,
) {
  const { locale, t } = await getTranslations();
  const { content } = await lookupContent(kind, slug, locale);
  const item = legacy.find((item) => item.kind === kind && item.slug === slug);
  const path =
    (await headers()).get("x-rycode-path") || contentPath({ kind, slug });
  const metadata = pageMetadata({
    path,
    locale,
    title: content?.seoTitle || t(fallbackTitle),
    description:
      content?.seoDescription ||
      item?.summary[locale] ||
      fallbackDescription ||
      t(fallbackTitle),
    image:
      kind === "ARTICLE" && content?.image?.endsWith(".svg")
        ? "/brand/og-card.png"
        : content?.image || item?.image,
    locales: content?.locales,
    noIndex: content?.noIndex,
  });
  return kind === "ARTICLE" && content
    ? {
        ...metadata,
        openGraph: {
          ...metadata.openGraph,
          type: "article" as const,
          publishedTime: content.publishedAt,
          modifiedTime: content.updatedAt,
          authors: [content.author],
          tags: content.tags,
        },
      }
    : metadata;
}
