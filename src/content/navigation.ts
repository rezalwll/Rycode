import type { Locale } from "@/lib/i18n";

type NavigationItem = {
  id: string;
  label: Record<Locale, string>;
  href: string;
};

// Top-level content from the previous RYCODE site. Destinations use this site's
// existing pages and home sections; service detail pages and submenus are omitted.
export const primaryNavigation: NavigationItem[] = [
  {
    id: "services",
    label: { fa: "خدمات", en: "Services" },
    href: "/services",
  },
  {
    id: "work",
    label: { fa: "نمونه‌کارها", en: "Work" },
    href: "/work",
  },
  {
    id: "about",
    label: { fa: "درباره ما", en: "About us" },
    href: "/#About%20Section",
  },
  {
    id: "blog",
    label: { fa: "بلاگ", en: "Blog" },
    href: "/blog",
  },
  {
    id: "contact",
    label: { fa: "تماس با ما", en: "Contact" },
    href: "/contact",
  },
];

export const navigationAction: NavigationItem = {
  id: "get-started",
  label: { fa: "شروع همکاری", en: "Get started" },
  href: "/contact",
};
