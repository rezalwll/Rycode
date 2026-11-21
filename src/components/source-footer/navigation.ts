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
      title: fa ? "راهنمای همکاری" : "Working with us",
      items: [
        {
          label: fa ? "فرایند همکاری" : "Our process",
          href: "/about#process",
        },
        { label: fa ? "پرسش‌های متداول" : "FAQ", href: "/#home-faq" },
      ],
    },
    {
      id: "resources",
      title: fa ? "قوانین" : "Legal",
      items: [
        { label: fa ? "حریم خصوصی" : "Privacy policy", href: "/privacy" },
        { label: fa ? "قوانین استفاده" : "Terms of use", href: "/terms" },
      ],
    },
  ] as const;
}
