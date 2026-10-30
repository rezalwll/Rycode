import { getTranslations } from "@/lib/i18n-server";
import { SiteFooter as SourceFooter } from "./source-footer/footer";
import ReferenceMoments from "./source-footer/reference-moments";
import { ReferenceLocale } from "./source-footer/reference-locale";
import "./source-footer/footer.css";

export async function SiteFooter() {
  const { locale } = await getTranslations();
  return (
    <div className="rycode-footer-source" dir={locale === "fa" ? "rtl" : "ltr"}>
      <ReferenceLocale locale={locale}>
        <ReferenceMoments />
      </ReferenceLocale>
      <SourceFooter locale={locale} />
    </div>
  );
}
