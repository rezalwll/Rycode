import type { Locale } from "@/lib/i18n";
import { serviceHighlights } from "./services";
export type PrimaryNavItem = {
  id?: string;
  label: string;
  href: string;
  emphasis?: boolean;
  menu?: {
    id?: string;
    title: string;
    items: { id?: string; label: string; href: string }[];
  }[];
};
function getServiceGroups(locale: Locale) {
  return serviceHighlights.map((service) => ({
    title: service.title[locale],
    items: [
      { label: service.title[locale], href: `/services/${service.slug}` },
    ],
  }));
}
export function getPrimaryNav(locale: Locale): PrimaryNavItem[] {
  const fa = locale === "fa";
  return [
    {
      label: fa ? "خدمات" : "Services",
      href: "/services",
      menu: [
        ...getServiceGroups(locale),
        {
          title: fa ? "خدمات در عمل" : "Services in context",
          id: "service-resources",
          items: [
            {
              label: fa ? "نمونه‌ها و مطالعات" : "Project studies",
              href: "/projects",
            },
            {
              label: fa ? "چه سیستم‌هایی می‌سازیم؟" : "Systems we build",
              href: "/services#solutions",
            },
            {
              label: fa ? "برای کسب‌وکار شما" : "For your business",
              href: "/services#industries",
            },
            {
              label: fa ? "شرایط پرداخت مرحله‌ای" : "Installment terms",
              href: "/installment-purchase",
            },
          ],
        },
      ],
    },
    { label: fa ? "نمونه‌کارها" : "Work", href: "/projects" },
    { label: fa ? "درباره ما" : "About us", href: "/about" },
    { label: fa ? "بلاگ" : "Blog", href: "/blog" },
    { label: fa ? "تماس با ما" : "Contact", href: "/contact" },
    {
      label: fa ? "شروع همکاری" : "Get started",
      href: "/start-project",
      emphasis: true,
    },
  ];
}
