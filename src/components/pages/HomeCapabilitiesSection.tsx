import { getTranslations } from "@/lib/i18n-server";
import ReferenceFeatures from "./rycode-services/reference-features";
import { ReferenceLocale } from "./rycode-services/reference-locale";
import "./rycode-services/services.css";

export async function HomeCapabilitiesSection() {
  const { locale } = await getTranslations();
  return (
    <div
      id="About Section"
      className="rycode-services-source"
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
      <ReferenceLocale locale={locale}>
        <ReferenceFeatures />
      </ReferenceLocale>
    </div>
  );
}
