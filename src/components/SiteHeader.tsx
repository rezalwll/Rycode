import { headers } from "next/headers";
import { getTranslations } from "@/lib/i18n-server";
import { contentRoute } from "@/lib/content-route";
import { canonicalServiceId } from "@/lib/service-routes";
import { lookupContent, serviceCatalog } from "@/server/content";
import { SiteHeader as SourceSiteHeader } from "./source-header/header";
import { HeaderServicesProvider } from "./source-header/services";
import { LocaleProvider } from "./LocaleProvider";
import "./source-header/header.css";
import "./source-header/source-rules.css";

/** Server wrapper for the interactive source-site navigation. */
export async function SiteHeader() {
  const { locale } = await getTranslations();
  const path = (await headers()).get("x-rycode-path") || "/";
  const entry = contentRoute(path);
  const [services, result] = await Promise.all([
    serviceCatalog(locale),
    entry &&
      lookupContent(
        entry.kind,
        entry.kind === "SERVICE" ? canonicalServiceId(entry.slug) : entry.slug,
        locale,
      ),
  ]);
  const targetLocale = locale === "fa" ? "en" : "fa";
  const unavailablePath =
    result?.content && !result.content.locales.includes(targetLocale)
      ? path
      : undefined;
  return (
    <div className="rycode-source-header">
      <LocaleProvider locale={locale}>
        <HeaderServicesProvider
          services={services.map((service) => ({
            id: service.id,
            title: service.title[locale],
          }))}
        >
          <SourceSiteHeader locale={locale} unavailablePath={unavailablePath} />
        </HeaderServicesProvider>
      </LocaleProvider>
    </div>
  );
}
