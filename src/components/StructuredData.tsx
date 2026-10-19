import { getTranslations } from "@/lib/i18n-server";
import { absoluteUrl, jsonLd } from "@/lib/seo";
import { siteSettings } from "@/server/content";
export async function StructuredData() {
  const { locale } = await getTranslations();
  const settings = await siteSettings();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: "RYCODE Studio",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/icon.png"),
        telephone: String(settings["contact.phone"] || "09981222022"),
        sameAs: ["social.instagram", "social.telegram", "social.bale"]
          .map((key) => settings[key])
          .filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: "RYCODE Studio",
        url: absoluteUrl("/"),
        inLanguage: locale,
        publisher: { "@id": absoluteUrl("/#organization") },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
