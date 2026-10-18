import type { Metadata } from "next";
import Layout from "./[lang]/layout";
import NotFound from "./[lang]/not-found";
import { getTranslations } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Page not found"),
    robots: { index: false, follow: false },
  };
}

export default function GlobalNotFound() {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}
