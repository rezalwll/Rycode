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
  return pageMetadata({
    path,
    locale,
    title: content?.seoTitle || t(fallbackTitle),
    description:
      content?.seoDescription ||
      item?.summary[locale] ||
      fallbackDescription ||
      t(fallbackTitle),
    image: content?.image || item?.image,
    locales: content?.locales,
    noIndex: content?.noIndex,
  });
}
