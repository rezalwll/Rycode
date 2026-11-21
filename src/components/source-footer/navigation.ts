import type { Locale } from "@/lib/i18n";

export const inquiryHref = "/contact#project-inquiry";

export function getFooterNav(locale: Locale) {
  const fa = locale === "fa";
  return {
    quickLinks: [
      { label: fa ? "نمونه‌کارها" : "Our work", href: "/work" },
      { label: fa ? "درباره ما" : "About us", href: "/about" },
      { label: fa ? "وبلاگ" : "Blog", href: "/blog" },
    ] as const,
    secondary: [
      { label: fa ? "پرسش‌های متداول" : "FAQ", href: "/#home-faq" },
      { label: fa ? "حریم خصوصی" : "Privacy policy", href: "/privacy" },
      { label: fa ? "قوانین استفاده" : "Terms of use", href: "/terms" },
    ],
  };
}
