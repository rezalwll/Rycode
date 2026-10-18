import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { HomeBlock0 } from "@/components/pages/HomeBlock0";
import { HomeHeroSection } from "@/components/pages/HomeHeroSection";
import { HomeAboutSection } from "@/components/pages/HomeAboutSection";
import { HomeWorkSection } from "@/components/pages/HomeWorkSection";
import { HomeServiceSection } from "@/components/pages/HomeServiceSection";
import { HomeProcessSection } from "@/components/pages/HomeProcessSection";
import { HomeChooseUsSection } from "@/components/pages/HomeChooseUsSection";
import { HomePricingSection } from "@/components/pages/HomePricingSection";
import { HomeTestimonialsSection } from "@/components/pages/HomeTestimonialsSection";
import { HomeFAQSection } from "@/components/pages/HomeFAQSection";
export const metadata: Metadata = {
  title: { absolute: "Rycode Studio — Modern Creative Studio" },
};
export default function Page() {
  return (
    <main
      data-framer-root=""
      className="framer-HujZo framer-i30eY framer-5BqlT framer-9qjuV framer-CV1V2 framer-pSPxj framer-OQzud framer-mreMD framer-72rtr7 contents!"
      style={referenceStyles.s430a37b031}
    >
      <HomeBlock0 />
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeWorkSection />
      <HomeServiceSection />
      <HomeProcessSection />
      <HomeChooseUsSection />
      <HomePricingSection />
      <HomeTestimonialsSection />
      <HomeFAQSection />
    </main>
  );
}
