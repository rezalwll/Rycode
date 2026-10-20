import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogBlock0 } from "@/components/pages/BlogBlock0";
import { BlogBlock1 } from "@/components/pages/BlogBlock1";
import { BlogBlock2 } from "@/components/pages/BlogBlock2";
import { BlogBlock3 } from "@/components/pages/BlogBlock3";
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
      <ManagedBlogHero>
        <BlogBlock0 />
        <BlogBlock1 />
        <BlogBlock2 />
        <BlogBlock3 />
      </ManagedBlogHero>
      <PublishedListing kind="ARTICLE" searchParams={await searchParams} />
    </main>
  );
}
