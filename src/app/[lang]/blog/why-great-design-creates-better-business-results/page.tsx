import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogWhyGreatDesignCreatesBetterBusinessResultsBlock0 } from "@/components/pages/BlogWhyGreatDesignCreatesBetterBusinessResultsBlock0";
import { BlogWhyGreatDesignCreatesBetterBusinessResultsHeroSection } from "@/components/pages/BlogWhyGreatDesignCreatesBetterBusinessResultsHeroSection";
import { BlogWhyGreatDesignCreatesBetterBusinessResultsBlogSection } from "@/components/pages/BlogWhyGreatDesignCreatesBetterBusinessResultsBlogSection";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Why Great Design Creates Better Business Results"),
  };
}
export default async function Page() {
  const { t } = await getTranslations();
  return (
    <main
      data-framer-root=""
      className="framer-aLubk framer-i30eY framer-A8dYT framer-OQzud framer-1jK3j framer-ge77Z framer-5BqlT framer-11oea5z w-full!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">
        {t("Why Great Design Creates Better Business Results")}
      </h1>
      <BlogWhyGreatDesignCreatesBetterBusinessResultsBlock0 />
      <BlogWhyGreatDesignCreatesBetterBusinessResultsHeroSection />
      <BlogWhyGreatDesignCreatesBetterBusinessResultsBlogSection />
    </main>
  );
}
