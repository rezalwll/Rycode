import { notFound } from "next/navigation";
import { ManagedFaq } from "@/components/content/ManagedFaq";
import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { HomeSourceHero } from "@/components/pages/HomeSourceHero";
import { HomeCapabilitiesSection } from "@/components/pages/HomeCapabilitiesSection";
import { HomeWorkSection } from "@/components/pages/HomeWorkSection";
import { HomeProcessSection } from "@/components/pages/HomeProcessSection";
import { HomeBlogPreview } from "@/components/pages/HomeBlogPreview";
import { HomeFAQSection } from "@/components/pages/HomeFAQSection";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: { absolute: t("RYCODE") },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "fa" && lang !== "en") notFound();
  return (
    <main
      data-framer-root=""
      className="home-colorful framer-HujZo framer-i30eY framer-5BqlT framer-9qjuV framer-CV1V2 framer-pSPxj framer-OQzud framer-mreMD framer-72rtr7 contents!"
      style={referenceStyles.s430a37b031}
    >
      <div className="home-intro">
        <HomeSourceHero />
        <HomeCapabilitiesSection />
      </div>
      <HomeWorkSection />
      <HomeProcessSection />
      <HomeBlogPreview />
      <div id="home-faq" className="relative z-[2] w-full" style={{ scrollMarginTop: 100 }}>
        <ManagedFaq scope="home">
          <HomeFAQSection />
        </ManagedFaq>
      </div>
    </main>
  );
}
