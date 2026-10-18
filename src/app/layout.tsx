import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./hover.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VectorSymbols } from "@/components/VectorSymbols";
import { ScrollEffects } from "@/components/ScrollEffects";
export const metadata: Metadata = {
  title: {
    default: "Rycode Studio — Modern Creative Studio",
    template: "%s | Rycode Studio",
  },
  applicationName: "Rycode Studio",
  description:
    "Rycode Studio — رایکد استودیو. Creative websites and brand experiences built with purpose.",
  openGraph: {
    siteName: "Rycode Studio",
    title: "Rycode Studio — Modern Creative Studio",
    description: "Creative websites and brand experiences built with purpose.",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
