import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { WorkLogisticsCompanyBlock0 } from "@/components/pages/WorkLogisticsCompanyBlock0";
import { WorkLogisticsCompanyDetailsSection } from "@/components/pages/WorkLogisticsCompanyDetailsSection";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return { title: t("Logistics Company") };
}
export default async function Page() {
  const { t } = await getTranslations();
  return (
    <main
      data-framer-root=""
      className="framer-KWZQu framer-A8dYT framer-i30eY framer-OQzud framer-1jK3j framer-ge77Z framer-CkNQH framer-9qjuV framer-np2452 contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">{t("Logistics Company")}</h1>
      <WorkLogisticsCompanyBlock0 />
      <WorkLogisticsCompanyDetailsSection />
    </main>
  );
}
