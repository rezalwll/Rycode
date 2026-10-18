import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { NotFoundBlock0 } from "@/components/pages/NotFoundBlock0";
import { NotFoundHeroSection } from "@/components/pages/NotFoundHeroSection";
export const metadata: Metadata = { title: "Page not found" };
export default function Page() {
  return (
    <main
      data-framer-root=""
      className="framer-ETkyq framer-10cx92z contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">Page not found</h1>
      <NotFoundBlock0 />
      <NotFoundHeroSection />
    </main>
  );
}
