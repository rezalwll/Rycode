import { PolicyPage } from "@/components/content/PolicyPage";
import { policies } from "@/content/policies";
import { getTranslations } from "@/lib/i18n-server";
import { contentMetadata } from "@/server/page-metadata";
export async function generateMetadata() {
  const { locale } = await getTranslations();
  const { title, introduction } = policies.privacy[locale];
  return contentMetadata("PAGE", "privacy", title, introduction);
}
export default function Privacy() {
  return <PolicyPage kind="privacy" />;
}
