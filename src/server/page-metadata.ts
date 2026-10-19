import { headers } from "next/headers";
import legacy from "@/content/legacy-content.json";
import { getTranslations } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/seo";
import { lookupContent } from "./content";
import type { ContentKind } from "@/generated/prisma/client";
export async function contentMetadata(
  kind: ContentKind,
  slug: string,
  fallbackTitle: string,
) {
  const { locale, t } = await getTranslations();
  const { content } = await lookupContent(kind, slug, locale);
  const item = legacy.find((item) => item.kind === kind && item.slug === slug);
  const path =
    (await headers()).get("x-rycode-path") ||
    `/${kind === "ARTICLE" ? "blog" : "work"}/${slug}`;
  return pageMetadata({
    path,
    locale,
    title: content?.seoTitle || t(fallbackTitle),
    description:
      content?.seoDescription || item?.summary[locale] || t(fallbackTitle),
    image: content?.image || item?.image,
    locales: content?.locales,
    noIndex: content?.noIndex,
  });
}
