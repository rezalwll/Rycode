"use client";

import { createContext, useContext, type ReactNode } from "react";
import { localizedHref, type Locale } from "@/lib/i18n";

const Context = createContext<Locale>("fa");

export function ReferenceLocale({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <Context.Provider value={locale}>{children}</Context.Provider>;
}

export function useReferenceLocale() {
  const locale = useContext(Context);
  return {
    locale,
    fa: locale === "fa",
    href: (path: string) => localizedHref(path, locale),
    text: (fa: string, en: string) => (locale === "fa" ? fa : en),
  };
}
