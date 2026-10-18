"use client";

import { usePathname } from "next/navigation";
import { localizedHref } from "@/lib/i18n";
import { useLocale } from "./LocaleProvider";

export function LanguageSwitch() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const next = locale === "en" ? "fa" : "en";
  return (
    <a
      className="language-switch"
      href={localizedHref(pathname, next)}
      hrefLang={next}
      lang={next}
      aria-label={
        locale === "en" ? "Switch to Persian" : "تغییر زبان به انگلیسی"
      }
      onClick={(event) => {
        // A document navigation also refreshes the root layout's lang, dir and context.
        event.currentTarget.href =
          localizedHref(pathname, next) +
          window.location.search +
          window.location.hash;
      }}
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </svg>
      <span>{next === "fa" ? "فارسی" : "EN"}</span>
    </a>
  );
}
