import { getTranslations } from "@/lib/i18n-server";
import { listingParams, type ListingSearchParams } from "@/lib/listing-params";
import { absoluteUrl, metadataForPath } from "@/lib/seo";
import { localizedHref } from "@/lib/i18n";

export async function listingMetadata(
  path: "/blog" | "/work",
  raw: ListingSearchParams,
) {
  const { locale } = await getTranslations();
  const filters = listingParams(raw);
  const metadata = metadataForPath(path, locale);
  const query = filters.page > 1 ? `?page=${filters.page}` : "";
  const canonical = (language: "fa" | "en") =>
    absoluteUrl(localizedHref(path, language) + query);
  return {
    ...metadata,
    alternates: {
      canonical: canonical(locale),
      languages: {
        "fa-IR": canonical("fa"),
        en: canonical("en"),
        "x-default": canonical("fa"),
      },
    },
    openGraph: { ...metadata.openGraph, url: canonical(locale) },
    ...(filters.q || filters.category
      ? { robots: { index: false, follow: true } }
      : {}),
  };
}
