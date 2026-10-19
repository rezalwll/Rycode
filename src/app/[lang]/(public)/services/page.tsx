import Link from "next/link";
import { serviceCatalog } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/seo";
import styles from "@/components/content/Content.module.css";
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
  const { locale, href } = await getTranslations();
  const services = await serviceCatalog(locale);
  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>{locale === "fa" ? "خدمات" : "Services"}</p>
      <h1>
        {locale === "fa"
          ? "از ایده تا رشد، کنار کسب‌وکارت"
          : "From your first idea to your next stage of growth"}
      </h1>
      <p className={styles.summary}>
        {locale === "fa"
          ? "هر پروژه مسئلهٔ خودش را دارد؛ از اینجا مسیر مناسبش را پیدا کن"
          : "Every project has its own challenges. Find the right place to start."}
      </p>
      <div className={styles.services}>
        {services.map((service, index) => (
          <Link
            className={styles.service}
            key={service.id}
            href={href("/services/" + service.id)}
          >
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2>{service.title[locale]}</h2>
            <p>{service.summary[locale]}</p>
            <span>
              {locale === "fa"
                ? "جزئیات و شروع همکاری ↖"
                : "Explore this service ↗"}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
