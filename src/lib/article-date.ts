import type { Locale } from "./i18n";
export function articleDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
    calendar: "gregory",
    timeZone: "UTC",
    year: "numeric",
    month: locale === "fa" ? "long" : "short",
    day: "2-digit",
  })
    .format(new Date(date))
    .toLocaleUpperCase(locale);
}
