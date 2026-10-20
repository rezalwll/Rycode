import { PolicyPage } from "@/components/content/PolicyPage";
import { getTranslations } from "@/lib/i18n-server";
import { contentMetadata } from "@/server/page-metadata";
export async function generateMetadata() {
  const { locale } = await getTranslations();
  return contentMetadata(
    "PAGE",
    "terms",
    locale === "fa" ? "استفاده از سایت" : "Using this website",
    locale === "fa"
      ? "اطلاعات استفاده از سایت و شروع گفت‌وگو دربارهٔ خدمات رایکد"
      : "Information about using the website and discussing RYCODE services.",
  );
}
export default function Terms() {
  return <PolicyPage kind="terms" />;
}
