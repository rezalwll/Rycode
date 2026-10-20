import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { PublishedListing } from "@/components/content/PublishedListing";
import { ManagedBlogHero } from "@/components/content/ManagedBlogHero";
import type { ListingSearchParams } from "@/lib/listing-params";
import { listingMetadata } from "@/server/listing-metadata";
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<ListingSearchParams>;
}): Promise<Metadata> {
  return listingMetadata("/blog", await searchParams);
}
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<ListingSearchParams>;
}) {
  const { t } = await getTranslations();
  return (
    <main
      data-framer-root=""
      className="framer-ZFEwM framer-l5lhc contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">{t("Blog")}</h1>
      <ManagedBlogHero />
      <PublishedListing kind="ARTICLE" searchParams={await searchParams} />
    </main>
  );
}
