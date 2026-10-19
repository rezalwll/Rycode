import { PolicyPage } from "@/components/content/PolicyPage";
import { getTranslations } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/seo";
export async function generateMetadata() {
  const { locale } = await getTranslations();
  return pageMetadata({
    path: "/privacy",
    locale,
    title: locale === "fa" ? "حریم خصوصی" : "Privacy",
    description:
      locale === "fa"
        ? "نحوهٔ ذخیرهٔ درخواست‌ها و انتخاب آمار بازدید در وب‌سایت رایکد"
        : "How RYCODE handles website inquiries and optional visit analytics.",
  });
}
export default function Privacy() {
  return <PolicyPage kind="privacy" />;
}
