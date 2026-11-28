import { ManagedFaq } from "@/components/content/ManagedFaq";
import { PublishedListing } from "@/components/content/PublishedListing";
import styles from "@/components/pages/Work.module.css";
import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { WorkBlock0 } from "@/components/pages/WorkBlock0";
import { WorkHeroSection } from "@/components/pages/WorkHeroSection";
import { WorkWorkSection } from "@/components/pages/WorkWorkSection";
import { WorkFAQSection } from "@/components/pages/WorkFAQSection";
import { listingParams, type ListingSearchParams } from "@/lib/listing-params";
import { siteSettings } from "@/server/content";
import { listingMetadata } from "@/server/listing-metadata";
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<ListingSearchParams>;
}): Promise<Metadata> {
  return listingMetadata("/work", await searchParams);
}
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<ListingSearchParams>;
}) {
  const { t } = await getTranslations();
  const [query, settings] = await Promise.all([searchParams, siteSettings()]);
  const filters = listingParams(query);
  return (
    <main
      data-framer-root=""
      className={`framer-wQzdj framer-3tl24i w-full! ${styles.page}`}
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">{t("Work")}</h1>
      <WorkBlock0 />
      <WorkHeroSection />
      <PublishedListing kind="PROJECT" searchParams={query} />
      {settings["portfolio.workExamples"] !== false &&
        filters.page === 1 &&
        !filters.q &&
        !filters.category && <WorkWorkSection />}
      <ManagedFaq scope="work">
        <WorkFAQSection />
      </ManagedFaq>
    </main>
  );
}
