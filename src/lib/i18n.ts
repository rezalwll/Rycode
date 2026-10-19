import persian from "@/locales/fa.json";

export type Locale = "en" | "fa";
const dictionary: Record<string, string> = persian;

export function translate(source: string, locale: Locale): string {
  if (locale === "en") return source;
  const translated =
    dictionary[source] ?? dictionary[source.replace(/\s+/g, " ").trim()];
  if (translated !== undefined) return translated;
  const date = source.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (date)
    return new Intl.DateTimeFormat("fa-IR-u-ca-gregory", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(+date[3], +date[1] - 1, +date[2])));
  if (/^[\d\s.,$%+\/[\]—-]+$/.test(source))
    return source.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[+digit]);
  return source;
}

export function localizedHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const unprefixed = href.replace(/^\/(?:fa|en)(?=\/|$|[?#])/, "");
  const plain = unprefixed.startsWith("/") ? unprefixed : `/${unprefixed}`;
  return locale === "en" ? `/en${plain === "/" ? "" : plain}` : plain;
}
