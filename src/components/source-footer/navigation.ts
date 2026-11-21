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
          {
            label: fa ? "رفع باگ و تکمیل پروژه" : "Bug fixes & project rescue",
            href: "/services/rescue",
          },
          {
            label: fa ? "ربات‌ها و خودکارسازی" : "Bots & automation",
            href: "/services/connect",
          },
          {
            label: fa ? "پشتیبانی و توسعه" : "Ongoing support",
            href: "/services/continue",
          },
        ],
      },
      {
        title: fa ? "رایکد" : "RYCODE",
        items: [
          { label: fa ? "نمونه‌کارها" : "Our work", href: "/work" },
          { label: fa ? "درباره ما" : "About us", href: "/about" },
          { label: fa ? "وبلاگ" : "Blog", href: "/blog" },
          { label: fa ? "تماس با ما" : "Contact us", href: "/contact" },
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
