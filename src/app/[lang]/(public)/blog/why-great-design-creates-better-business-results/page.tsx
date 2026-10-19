import { contentMetadata } from "@/server/page-metadata";
import { lookupContent } from "@/server/content";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/content/ContentDetail";
import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogWhyGreatDesignCreatesBetterBusinessResultsBlock0 } from "@/components/pages/BlogWhyGreatDesignCreatesBetterBusinessResultsBlock0";
import { BlogWhyGreatDesignCreatesBetterBusinessResultsHeroSection } from "@/components/pages/BlogWhyGreatDesignCreatesBetterBusinessResultsHeroSection";
import { BlogWhyGreatDesignCreatesBetterBusinessResultsBlogSection } from "@/components/pages/BlogWhyGreatDesignCreatesBetterBusinessResultsBlogSection";
export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata(
    "ARTICLE",
    "why-great-design-creates-better-business-results",
    "Why Great Design Creates Better Business Results",
  );
}

export default async function Page() {
  const { t, locale } = await getTranslations();
  const managed = await lookupContent(
    "ARTICLE",
    "why-great-design-creates-better-business-results",
    locale,
  );
  if (managed.owned && !managed.content) notFound();
  if (managed.content && !managed.content.legacy)
    return <ContentDetail content={managed.content} locale={locale} />;
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
