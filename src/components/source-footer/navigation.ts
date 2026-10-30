import type { Locale } from "@/lib/i18n";
import { services } from "@/content/services";

// Keep the source footer's groups; link them to this site's public routes.
// The client workspace from the previous platform is intentionally omitted.
export function getFooterNav(locale: Locale) {
  const fa = locale === "fa";
  return [
    {
      title: fa ? "رایکد" : "Company",
      items: [
        { label: fa ? "درباره رایکد" : "About RYCODE", href: "/" },
        { label: fa ? "چرا رایکد" : "Why RYCODE", href: "/#expertise" },
        {
          label: fa ? "فرایند همکاری" : "Our process",
          href: "/#Process%20Section",
        },
        {
          label: fa ? "ابزار و تکنولوژی" : "Our technology",
          href: "/services/software",
        },
      ],
    },
    {
      title: fa ? "خدمات" : "Services",
      items: services.map((service) => ({
        label: service.title[locale],
        href: `/services/${service.id}`,
      })),
    },
    {
      title: fa ? "بیشتر ببین" : "Resources",
      items: [
        { label: fa ? "نمونه‌ها و مطالعات" : "Project studies", href: "/work" },
        { label: fa ? "بلاگ" : "Blog", href: "/blog" },
        { label: fa ? "پرسش‌های متداول" : "FAQ", href: "/#home-faq" },
        { label: fa ? "حریم خصوصی" : "Privacy policy", href: "/privacy" },
        { label: fa ? "قوانین استفاده" : "Terms of use", href: "/terms" },
      ],
    },
    {
      title: fa ? "شروع همکاری" : "Get started",
      items: [
        {
          label: fa ? "درباره پروژه حرف بزنیم" : "Start a conversation",
          href: "/contact",
        },
        {
          label: fa ? "بررسی پروژهٔ فعلی" : "Technical review",
          href: "/contact?service=rescue",
        },
        {
          label: fa ? "بررسی سئوی سایت" : "SEO audit",
          href: "/contact?service=grow",
        },
        { label: fa ? "تماس با ما" : "Contact", href: "/contact" },
        {
          label: fa ? "شرایط پرداخت مرحله‌ای" : "Installment terms",
          href: "/contact?topic=installments",
        },
      ],
    },
  ];
}
