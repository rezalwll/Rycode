import type { Locale } from "@/lib/i18n";
import { services } from "@/content/services";

export const inquiryHref = "/contact#project-inquiry";

export function getFooterNav(locale: Locale) {
  const fa = locale === "fa";
  return [
    {
      id: "company",
      title: fa ? "رایکد" : "Company",
      items: [
        { label: fa ? "درباره ما" : "About us", href: "/about" },
        { label: fa ? "نمونه‌کارها" : "Work", href: "/work" },
        { label: fa ? "وبلاگ" : "Blog", href: "/blog" },
        { label: fa ? "تماس با ما" : "Contact", href: "/contact" },
      ],
    },
    {
      id: "services",
      title: fa ? "خدمات" : "Services",
      items: services.map((service) => ({
        label: service.title[locale],
        href: `/services/${service.id}`,
      })),
    },
    {
      id: "start",
      title: fa ? "شروع همکاری" : "Get started",
      items: [
        {
          label: fa
            ? "درباره پروژه‌ات حرف بزنیم"
            : "Tell us about your project",
          href: inquiryHref,
        },
        {
          label: fa ? "بررسی پروژهٔ فعلی" : "Technical review",
          href: "/contact?service=rescue#project-inquiry",
        },
        {
          label: fa ? "درخواست مشاوره" : "Request a consultation",
          href: "/contact?topic=consultation#project-inquiry",
        },
        {
          label: fa ? "بررسی سئوی سایت" : "SEO audit",
          href: "/contact?service=grow#project-inquiry",
        },
        {
          label: fa ? "شرایط پرداخت مرحله‌ای" : "Installment terms",
          href: "/contact?topic=installments#project-inquiry",
        },
      ],
    },
    {
      id: "resources",
      title: fa ? "بیشتر ببین" : "Resources",
      items: [
        { label: fa ? "پرسش‌های متداول" : "FAQ", href: "/#home-faq" },
        { label: fa ? "حریم خصوصی" : "Privacy policy", href: "/privacy" },
        { label: fa ? "قوانین استفاده" : "Terms of use", href: "/terms" },
        { label: fa ? "نقشه سایت" : "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ] as const;
}
