import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { ContactBlock0 } from "@/components/pages/ContactBlock0";
import { ContactHeroSection } from "@/components/pages/ContactHeroSection";
import { supportModels } from "@/components/services/support-copy";
import { supportServiceId } from "@/lib/service-routes";
import "@/app/contact-theme.css";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return { title: t("Contact") };
}
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[]; model?: string | string[] }>;
}) {
  const { t } = await getTranslations();
  const { service, model } = await searchParams;
  const supportModel = service === supportServiceId
    ? supportModels.find(({ id }) => id === model)?.title
    : undefined;
  return (
    <main
      data-framer-root=""
      className="framer-UUxDN framer-ge77Z framer-Bq5uF framer-P2lQE framer-A8dYT framer-PLVRZ framer-1krnw25 w-full!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">{t("Contact")}</h1>
      <ContactBlock0 />
      <ContactHeroSection supportModel={supportModel} />
    </main>
  );
}
