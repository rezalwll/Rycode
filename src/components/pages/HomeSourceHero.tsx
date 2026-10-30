import { getTranslations } from "@/lib/i18n-server";
import { ReferenceLocale } from "./rycode-services/reference-locale";
import ReferenceHero from "./source-hero/reference-hero";
import "./source-hero/hero.css";

export async function HomeSourceHero() {
  const { locale } = await getTranslations();
  return (
    <div className="rycode-hero-source" dir={locale === "fa" ? "rtl" : "ltr"}>
      <ReferenceLocale locale={locale}>
        <ReferenceHero />
      </ReferenceLocale>
    </div>
  );
}
