import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { NotFoundBlock0 } from "@/components/pages/NotFoundBlock0";
import { NotFoundHeroSection } from "@/components/pages/NotFoundHeroSection";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return { title: t("Page not found") };
}
export default async function Page() {
  const { t } = await getTranslations();
  return (
    <main
      data-framer-root=""
      className="framer-ETkyq framer-10cx92z contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">{t("Page not found")}</h1>
      <NotFoundBlock0 />
      <NotFoundHeroSection />
    </main>
  );
}
