import type { Metadata } from "next";
import { localizedHref, translate, type Locale } from "./i18n";
export function siteUrl() {
  const origin = new URL(
    process.env.SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://127.0.0.1:3014",
  );
  if (!/^https?:$/.test(origin.protocol)) throw new Error("Invalid site URL");
  return origin.origin;
}
export function absoluteUrl(path: string) {
  return new URL(path, siteUrl()).href;
}
export function cleanPath(path: string) {
  return (
    (path.split(/[?#]/)[0].replace(/^\/(?:fa|en)(?=\/|$)/, "") || "/").replace(
      /\/$/,
      "",
    ) || "/"
  );
}
const descriptions: Record<string, Record<Locale, string>> = {
  "/": {
    fa: "رایکد؛ طراحی سایت و فروشگاه، توسعه نرم‌افزار اختصاصی، رفع باگ، سئو و خودکارسازی برای کسب‌وکار شما",
    en: "RYCODE builds websites, online stores, custom software and workflow automation, with SEO, bug fixes and ongoing support.",
  },
  "/contact": {
    fa: "برای طراحی سایت، توسعه نرم‌افزار یا بررسی پروژهٔ فعلی با رایکد تماس بگیرید و درخواست خود را ثبت کنید",
    en: "Talk to RYCODE about your website, software or existing project. Submit an inquiry and discuss the next step.",
  },
  "/work": {
    fa: "نمونه‌کارهای رایکد در طراحی و توسعهٔ تجربه‌های دیجیتال؛ جزئیات پروژه‌ها، رویکرد طراحی و روند اجرا",
    en: "Explore RYCODE's digital projects, design approaches and delivery process.",
  },
  "/blog": {
    fa: "مطالب رایکد دربارهٔ طراحی سایت، نرم‌افزار، سئو و راهکارهای کاربردی برای رشد کسب‌وکار",
    en: "RYCODE articles about websites, software, SEO and practical business tools.",
  },
  "/services": {
    fa: "خدمات رایکد؛ طراحی سایت و فروشگاه، نرم‌افزار، رفع باگ، ربات، سئو، اکسل و پشتیبانی",
    en: "Explore RYCODE's website, software, SEO, automation, data and support services.",
  },
};
export function pageMetadata({
  path,
  locale,
  title,
  description,
  image = "/brand/og-card.png",
  locales = ["fa", "en"],
  noIndex = false,
}: {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  image?: string;
  locales?: Locale[];
  noIndex?: boolean;
}): Metadata {
  const canonical = absoluteUrl(localizedHref(cleanPath(path), locale));
  const languages = Object.fromEntries(
    locales.map((l) => [
      l === "fa" ? "fa-IR" : "en",
      absoluteUrl(localizedHref(cleanPath(path), l)),
    ]),
  );
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": absoluteUrl(
          localizedHref(cleanPath(path), locales.includes("fa") ? "fa" : "en"),
        ),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "RYCODE Studio",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
      images: [
        { url: absoluteUrl(image), width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    robots: {
      index: !noIndex && process.env.INDEXABLE === "true",
      follow: !noIndex,
    },
  };
}
export function metadataForPath(path: string, locale: Locale) {
  const normalized = cleanPath(path);
  const group = normalized.startsWith("/blog/")
    ? "/blog"
    : normalized.startsWith("/work/")
      ? "/work"
      : normalized;
  const title = translate(
    normalized === "/contact"
      ? "Contact"
      : normalized === "/work"
        ? "Work"
        : normalized === "/blog"
          ? "Blog"
          : "RYCODE Studio — Modern Creative Studio",
    locale,
  );
  return pageMetadata({
    path: normalized,
    locale,
    title,
    description: (descriptions[group] ?? descriptions["/"])[locale],
    noIndex: /^\/(admin|login|preview|search)(?:\/|$)/.test(normalized),
  });
}
export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
