import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { ContactBlock0 } from "@/components/pages/ContactBlock0";
import { ContactHeroSection } from "@/components/pages/ContactHeroSection";
export const metadata: Metadata = { title: "Contact" };
export default function Page() {
  return (
    <main
      data-framer-root=""
      className="framer-UUxDN framer-ge77Z framer-Bq5uF framer-P2lQE framer-A8dYT framer-PLVRZ framer-1krnw25 contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">Contact</h1>
      <ContactBlock0 />
      <ContactHeroSection />
    </main>
  );
}
