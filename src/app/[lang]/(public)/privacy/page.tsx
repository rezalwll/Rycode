import { PolicyPage } from "@/components/content/PolicyPage";
import { getTranslations } from "@/lib/i18n-server";
import { contentMetadata } from "@/server/page-metadata";
export async function generateMetadata() {
  const { locale } = await getTranslations();
  return contentMetadata(
    "PAGE",
    "privacy",
    locale === "fa" ? "حریم خصوصی" : "Privacy",
    locale === "fa"
      ? "نحوهٔ ذخیرهٔ درخواست‌ها و انتخاب آمار بازدید در وب‌سایت رایکد"
      : "How RYCODE handles website inquiries and optional visit analytics.",
  );
}
export default function Privacy() {
  return <PolicyPage kind="privacy" />;
}
