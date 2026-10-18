import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { WorkBlock0 } from "@/components/pages/WorkBlock0";
import { WorkHeroSection } from "@/components/pages/WorkHeroSection";
import { WorkWorkSection } from "@/components/pages/WorkWorkSection";
import { WorkFAQSection } from "@/components/pages/WorkFAQSection";
export const metadata: Metadata = { title: "Work" };
export default function Page() {
  return (
    <main
      data-framer-root=""
      className="framer-wQzdj framer-3tl24i contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">Work</h1>
      <WorkBlock0 />
      <WorkHeroSection />
      <WorkWorkSection />
      <WorkFAQSection />
    </main>
  );
}
