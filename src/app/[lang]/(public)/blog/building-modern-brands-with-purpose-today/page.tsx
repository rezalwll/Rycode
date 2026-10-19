import { contentMetadata } from "@/server/page-metadata";
import { lookupContent } from "@/server/content";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/content/ContentDetail";
import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogBuildingModernBrandsWithPurposeTodayBlock0 } from "@/components/pages/BlogBuildingModernBrandsWithPurposeTodayBlock0";
import { BlogBuildingModernBrandsWithPurposeTodayHeroSection } from "@/components/pages/BlogBuildingModernBrandsWithPurposeTodayHeroSection";
import { BlogBuildingModernBrandsWithPurposeTodayBlogSection } from "@/components/pages/BlogBuildingModernBrandsWithPurposeTodayBlogSection";
export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata(
    "ARTICLE",
    "building-modern-brands-with-purpose-today",
    "Building Modern Brands With Purpose Today",
  );
}

export default async function Page() {
  const { t, locale } = await getTranslations();
  const managed = await lookupContent(
    "ARTICLE",
    "building-modern-brands-with-purpose-today",
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
        {t("Building Modern Brands With Purpose Today")}
      </h1>
      <BlogBuildingModernBrandsWithPurposeTodayBlock0 />
      <BlogBuildingModernBrandsWithPurposeTodayHeroSection />
      <BlogBuildingModernBrandsWithPurposeTodayBlogSection />
    </main>
  );
}
