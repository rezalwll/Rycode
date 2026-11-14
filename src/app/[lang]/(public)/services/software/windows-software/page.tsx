import { WindowsSoftwarePage } from "@/components/services/WindowsSoftwarePage";
import { getTranslations } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const { locale } = await getTranslations();
  return pageMetadata({
    path: "/services/software/windows-software",
    locale,
    title:
      locale === "fa"
        ? "ساخت نرم‌افزار ویندوز اختصاصی؛ امکانات و مراحل تحویل | رایکد"
        : "Custom Windows software development | RYCODE",
    description:
      locale === "fa"
        ? "توسعهٔ نرم‌افزار ویندوز برای ثبت اطلاعات، محاسبات، گزارش‌گیری، پردازش فایل و اتصال به تجهیزات؛ از بررسی نیاز تا نصب و پشتیبانی با رایکد."
        : "Custom Windows software for business workflows, data entry, reporting, file processing and equipment integrations.",
  });
}

export default function WindowsSoftwareRoute() {
  return <WindowsSoftwarePage />;
}
