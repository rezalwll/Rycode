import { getTranslations } from "@/lib/i18n-server";
import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/pages/ContactHeroSection";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return { title: t("Contact") };
}
export default async function Page() {
  return (
    <main>
      <ContactHeroSection />
    </main>
  );
}
