import { cache } from "react";
import { headers } from "next/headers";
import { localizedHref, translate, type Locale } from "./i18n";

export const getLocale = cache(async (): Promise<Locale> =>
  (await headers()).get("x-rycode-locale") === "fa" ? "fa" : "en",
);

export async function getTranslations() {
  const locale = await getLocale();
  return {
    locale,
    t: (source: string) => translate(source, locale),
    href: (path: string) => localizedHref(path, locale),
  };
}
