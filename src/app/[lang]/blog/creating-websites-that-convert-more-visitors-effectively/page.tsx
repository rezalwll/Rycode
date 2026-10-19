import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyBlock0 } from "@/components/pages/BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyBlock0";
import { BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyHeroSection } from "@/components/pages/BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyHeroSection";
import { BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyBlogSection } from "@/components/pages/BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyBlogSection";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Creating Websites That Convert More Visitors Effectively"),
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
        {t("Creating Websites That Convert More Visitors Effectively")}
      </h1>
      <BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyBlock0 />
      <BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyHeroSection />
      <BlogCreatingWebsitesThatConvertMoreVisitorsEffectivelyBlogSection />
    </main>
  );
}
