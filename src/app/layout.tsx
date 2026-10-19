import { getTranslations } from "@/lib/i18n-server";
import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./hover.css";
import "./line-trace.css";
import "./locale.css";
import "./services.css";
import { getLocale } from "@/lib/i18n-server";
import { headers } from "next/headers";
import { metadataForPath, siteUrl } from "@/lib/seo";
import { LocaleProvider } from "@/components/LocaleProvider";
export async function generateMetadata(): Promise<Metadata> {
  const { t, locale } = await getTranslations();
  return {
    metadataBase: new URL(siteUrl()),
    ...metadataForPath((await headers()).get("x-rycode-path") || "/", locale),
    title: {
      default: t("RYCODE Studio — Modern Creative Studio"),
      template: t("%s | RYCODE Studio"),
    },
    applicationName: "RYCODE Studio",
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
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
