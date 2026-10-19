import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollEffects } from "@/components/ScrollEffects";
import { VectorSymbols } from "@/components/VectorSymbols";
import { referenceStyles } from "@/styles/reference-styles";
import { StructuredData } from "@/components/StructuredData";
import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import { headers } from "next/headers";
import { permanentRedirect, redirect } from "next/navigation";
import { managedRedirect } from "@/server/redirects";
export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = (await headers()).get("x-rycode-path") || "/";
  const locale = (await headers()).get("x-rycode-locale");
  const target = await managedRedirect(
    (locale === "en" ? "/en" : "") +
      (path === "/" && locale === "en" ? "" : path),
  );
  if (target) {
    if (target.permanent) permanentRedirect(target.destination);
    redirect(target.destination);
  }
  return (
    <>
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
      <StructuredData />
      <AnalyticsConsent />
    </>
  );
}
