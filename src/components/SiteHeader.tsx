import { getTranslations } from "@/lib/i18n-server";
import { serviceCatalog } from "@/server/content";
import { SiteHeader as SourceSiteHeader } from "./source-header/header";
import { HeaderServicesProvider } from "./source-header/services";
import { LocaleProvider } from "./LocaleProvider";
import "./source-header/header.css";
import "./source-header/source-rules.css";

/** Server wrapper for the interactive source-site navigation. */
export async function SiteHeader() {
  const { locale } = await getTranslations();
  const services = await serviceCatalog(locale);
  return (
    <div className="rycode-source-header">
      <LocaleProvider locale={locale}>
        <HeaderServicesProvider
          services={services.map((service) => ({
            id: service.id,
            title: service.title[locale],
          }))}
        >
          <SourceSiteHeader locale={locale} />
        </HeaderServicesProvider>
      </LocaleProvider>
    </div>
  );
}
