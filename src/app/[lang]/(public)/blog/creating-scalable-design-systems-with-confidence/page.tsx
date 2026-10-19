import { contentMetadata } from "@/server/page-metadata";
import { lookupContent } from "@/server/content";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/content/ContentDetail";
import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogCreatingScalableDesignSystemsWithConfidenceBlock0 } from "@/components/pages/BlogCreatingScalableDesignSystemsWithConfidenceBlock0";
import { BlogCreatingScalableDesignSystemsWithConfidenceHeroSection } from "@/components/pages/BlogCreatingScalableDesignSystemsWithConfidenceHeroSection";
import { BlogCreatingScalableDesignSystemsWithConfidenceBlogSection } from "@/components/pages/BlogCreatingScalableDesignSystemsWithConfidenceBlogSection";
export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata(
    "ARTICLE",
    "creating-scalable-design-systems-with-confidence",
    "Creating Scalable Design Systems With Confidence",
  );
}

export default async function Page() {
  const { t, locale } = await getTranslations();
  const managed = await lookupContent(
    "ARTICLE",
    "creating-scalable-design-systems-with-confidence",
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
        {t("Creating Scalable Design Systems With Confidence")}
      </h1>
      <BlogCreatingScalableDesignSystemsWithConfidenceBlock0 />
      <BlogCreatingScalableDesignSystemsWithConfidenceHeroSection />
      <BlogCreatingScalableDesignSystemsWithConfidenceBlogSection />
    </main>
  );
}
