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
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return { title: t("Work") };
}
export default async function Page() {
  const { t } = await getTranslations();
  return (
    <main
      data-framer-root=""
      className={`framer-wQzdj framer-3tl24i w-full! ${styles.page}`}
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">{t("Work")}</h1>
      <WorkBlock0 />
      <WorkHeroSection />
      <WorkWorkSection />
      <PublishedListing kind="PROJECT" />
      <ManagedFaq scope="work">
        <WorkFAQSection />
      </ManagedFaq>
    </main>
  );
}
