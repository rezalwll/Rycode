import { contentMetadata } from "@/server/page-metadata";
import { lookupContent } from "@/server/content";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/content/ContentDetail";
import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { WorkAiAgencyWebsiteBlock0 } from "@/components/pages/WorkAiAgencyWebsiteBlock0";
import { WorkAiAgencyWebsiteDetailsSection } from "@/components/pages/WorkAiAgencyWebsiteDetailsSection";
export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata("PROJECT", "ai-agency-website", "Ai Agency Website");
}

export default async function Page() {
  const { t, locale } = await getTranslations();
  const managed = await lookupContent("PROJECT", "ai-agency-website", locale);
  if (managed.owned && !managed.content) notFound();
  if (managed.content && !managed.content.legacy)
    return <ContentDetail content={managed.content} locale={locale} />;
  return (
    <main
      data-framer-root=""
      className="framer-KWZQu framer-A8dYT framer-i30eY framer-OQzud framer-1jK3j framer-ge77Z framer-CkNQH framer-9qjuV framer-np2452 contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">{t("Ai Agency Website")}</h1>
      <WorkAiAgencyWebsiteBlock0 />
      <WorkAiAgencyWebsiteDetailsSection />
    </main>
  );
}
