import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogMasteringFramerForFasterWebsiteLaunchesBlock0 } from "@/components/pages/BlogMasteringFramerForFasterWebsiteLaunchesBlock0";
import { BlogMasteringFramerForFasterWebsiteLaunchesHeroSection } from "@/components/pages/BlogMasteringFramerForFasterWebsiteLaunchesHeroSection";
import { BlogMasteringFramerForFasterWebsiteLaunchesBlogSection } from "@/components/pages/BlogMasteringFramerForFasterWebsiteLaunchesBlogSection";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Mastering Framer For Faster Website Launches"),
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
        {t("Mastering Framer For Faster Website Launches")}
      </h1>
      <BlogMasteringFramerForFasterWebsiteLaunchesBlock0 />
      <BlogMasteringFramerForFasterWebsiteLaunchesHeroSection />
      <BlogMasteringFramerForFasterWebsiteLaunchesBlogSection />
    </main>
  );
}
