import { getTranslations } from "@/lib/i18n-server";
import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import "../globals.css";
import "../brand.css";
import "../hover.css";
import "../locale.css";
import { getLocale } from "@/lib/i18n-server";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VectorSymbols } from "@/components/VectorSymbols";
import { ScrollEffects } from "@/components/ScrollEffects";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: {
      default: t("RYCODE Studio — Modern Creative Studio"),
      template: t("%s | RYCODE Studio"),
    },
    applicationName: t("RYCODE Studio"),
    description: t(
      "RYCODE Studio — رایکد استودیو. Creative websites and brand experiences built with purpose.",
    ),
    openGraph: {
      siteName: t("RYCODE Studio"),
      title: t("RYCODE Studio — Modern Creative Studio"),
      description: t(
        "Creative websites and brand experiences built with purpose.",
      ),
    },
  };
}
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body>
        <LocaleProvider locale={locale}>
          <ScrollEffects />
          <div id="main">
            <div
              className="framer-ZUZaS framer-uxe76n"
              data-layout-template="true"
              style={referenceStyles.se06159d2f1}
            >
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </div>
          <VectorSymbols />
        </LocaleProvider>
      </body>
    </html>
  );
}
