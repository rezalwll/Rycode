import type { Locale } from "@/lib/i18n";

export const inquiryHref = "/contact#project-inquiry";

export function getFooterNav(locale: Locale) {
  const fa = locale === "fa";
  return {
    groups: [
      {
        title: fa ? "خدمات اصلی" : "Core services",
        items: [
          {
            label: fa ? "طراحی سایت و فروشگاه" : "Web design & ecommerce",
            href: "/services/build",
          },
          {
            label: fa ? "نرم‌افزار اختصاصی" : "Custom software",
            href: "/services/software",
          },
          {
            label: fa ? "سئو و رشد سایت" : "SEO & growth",
            href: "/services/grow",
          },
        ],
      },
      {
        title: fa ? "رایکد" : "RYCODE",
        items: [
          { label: fa ? "نمونه‌کارها" : "Our work", href: "/work" },
          { label: fa ? "درباره ما" : "About us", href: "/about" },
          { label: fa ? "وبلاگ" : "Blog", href: "/blog" },
        ],
      },
    ],
    secondary: [
      { label: fa ? "پرسش‌های متداول" : "FAQ", href: "/#home-faq" },
      { label: fa ? "حریم خصوصی" : "Privacy policy", href: "/privacy" },
      { label: fa ? "قوانین استفاده" : "Terms of use", href: "/terms" },
    ],
  };
}
