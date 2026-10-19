import type { Metadata } from "next";
import Layout from "./[lang]/(public)/layout";
import NotFound from "./[lang]/not-found";
import { getTranslations } from "@/lib/i18n-server";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";
import "./brand.css";
import "./hover.css";
import "./locale.css";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Page not found"),
    robots: { index: false, follow: false },
  };
}

export default async function GlobalNotFound() {
  const { locale } = await getTranslations();
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body>
        <LocaleProvider locale={locale}>
          <Layout>
            <NotFound />
          </Layout>
        </LocaleProvider>
      </body>
    </html>
  );
}
