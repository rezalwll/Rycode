import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogCreatingScalableDesignSystemsWithConfidenceBlock0 } from "@/components/pages/BlogCreatingScalableDesignSystemsWithConfidenceBlock0";
import { BlogCreatingScalableDesignSystemsWithConfidenceHeroSection } from "@/components/pages/BlogCreatingScalableDesignSystemsWithConfidenceHeroSection";
import { BlogCreatingScalableDesignSystemsWithConfidenceBlogSection } from "@/components/pages/BlogCreatingScalableDesignSystemsWithConfidenceBlogSection";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Creating Scalable Design Systems With Confidence"),
  };
}
export default async function Page() {
  const { t } = await getTranslations();
  return (
    <main
      data-framer-root=""
      className="framer-aLubk framer-i30eY framer-A8dYT framer-OQzud framer-1jK3j framer-ge77Z framer-5BqlT framer-11oea5z contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">
        {t("Creating Scalable Design Systems With Confidence")}
      </h1>
      <BlogCreatingScalableDesignSystemsWithConfidenceBlock0 />
      <BlogCreatingScalableDesignSystemsWithConfidenceHeroSection />
      <BlogCreatingScalableDesignSystemsWithConfidenceBlogSection />
    </main>
  );
}
