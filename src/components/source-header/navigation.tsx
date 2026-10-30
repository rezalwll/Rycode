"use client";
import NextLink from "next/link";
import { usePathname as useNextPathname } from "next/navigation";
import type { ComponentProps } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { localizedHref, type Locale } from "@/lib/i18n";

export function sourceHref(path: string) {
  const routes: Record<string, string> = {
    "/projects": "/work",
    "/start-project": "/contact",
    "/about": "/#About%20Section",
    "/about#approach": "/#expertise",
    "/about#process": "/#Process%20Section",
    "/about#technology": "/services/software",
    "/faq": "/#home-faq",
    "/installment-purchase": "/contact?topic=installments",
    "/services#solutions": "/services#services-list",
    "/services#industries": "/services#services-list",
    "/services/web-development": "/services/build",
    "/services/seo-growth": "/services/grow",
    "/services/custom-software": "/services/software",
    "/services/project-rescue": "/services/rescue",
    "/services/api-integration": "/services/connect",
    "/services/data-analytics": "/services/data",
    "/services/ongoing-support": "/services/continue",
  };
  return routes[path] || path;
}
export function Link({
  locale,
  href,
  ...props
}: Omit<ComponentProps<typeof NextLink>, "href" | "locale"> & {
  href: string;
  locale?: Locale;
}) {
  const current = useLocale();
  return (
    <NextLink
      {...props}
      href={localizedHref(sourceHref(href), locale || current.locale)}
    />
  );
}
export function usePathname() {
  const pathname = useNextPathname().replace(/^\/(?:fa|en)(?=\/|$)/, "") || "/";
  const sourceRoutes: Record<string, string> = {
    "/work": "/projects",
    "/services/build": "/services/web-development",
    "/services/grow": "/services/seo-growth",
    "/services/software": "/services/custom-software",
    "/services/rescue": "/services/project-rescue",
    "/services/connect": "/services/api-integration",
    "/services/data": "/services/data-analytics",
    "/services/continue": "/services/ongoing-support",
  };
  return sourceRoutes[pathname] || pathname;
}
