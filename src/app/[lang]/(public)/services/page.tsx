import { serviceCatalog } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/seo";
import { ServicesOverview } from "@/components/services/ServicesOverview";
export async function generateMetadata() {
  const { locale } = await getTranslations();
  return pageMetadata({
    path: "/services",
    locale,
    title: locale === "fa" ? "خدمات رایکد" : "RYCODE services",
    description:
      locale === "fa"
        ? "از طراحی سایت و نرم‌افزار تا سئو، خودکارسازی و پشتیبانی؛ خدمت مناسب پروژه‌ات را پیدا کن"
        : "Find website, software, SEO, automation, data and ongoing support services for your business.",
  });
}
export default async function ServicesPage() {
  const { locale } = await getTranslations();
  const services = await serviceCatalog(locale);
  return <ServicesOverview services={services} locale={locale} />;
}
