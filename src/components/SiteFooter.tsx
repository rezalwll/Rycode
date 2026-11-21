import { getTranslations } from "@/lib/i18n-server";
import { siteSettings } from "@/server/content";
import { SiteFooter as SourceFooter } from "./source-footer/footer";
import ReferenceMoments from "./source-footer/reference-moments";
import { ReferenceLocale } from "./source-footer/reference-locale";
import "./source-footer/footer.css";

export async function SiteFooter() {
  const [{ locale }, settings] = await Promise.all([
    getTranslations(),
    siteSettings(),
  ]);
  const phone = String(settings["contact.phone"] || "0998 - 122 - 2022");
  return (
    <div className="rycode-footer-source" dir={locale === "fa" ? "rtl" : "ltr"}>
      <ReferenceLocale locale={locale}>
        <ReferenceMoments />
      </ReferenceLocale>
      <SourceFooter locale={locale} phone={phone} />
    </div>
  );
}
