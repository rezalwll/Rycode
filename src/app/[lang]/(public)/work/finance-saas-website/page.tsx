import { contentMetadata } from "@/server/page-metadata";
import { lookupContent } from "@/server/content";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/content/ContentDetail";
import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { WorkFinanceSaasWebsiteBlock0 } from "@/components/pages/WorkFinanceSaasWebsiteBlock0";
import { WorkFinanceSaasWebsiteDetailsSection } from "@/components/pages/WorkFinanceSaasWebsiteDetailsSection";
export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata(
    "PROJECT",
    "finance-saas-website",
    "Finance Saas Website",
  );
}

export default async function Page() {
  const { t, locale } = await getTranslations();
  const managed = await lookupContent(
    "PROJECT",
    "finance-saas-website",
    locale,
  );
  if (managed.owned && !managed.content) notFound();
  if (managed.content && !managed.content.legacy)
    return <ContentDetail content={managed.content} locale={locale} />;
  return (
    <main
      data-framer-root=""
      className="framer-KWZQu framer-A8dYT framer-i30eY framer-OQzud framer-1jK3j framer-ge77Z framer-CkNQH framer-9qjuV framer-np2452 contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">{t("Finance Saas Website")}</h1>
      <WorkFinanceSaasWebsiteBlock0 />
      <WorkFinanceSaasWebsiteDetailsSection />
    </main>
  );
}
