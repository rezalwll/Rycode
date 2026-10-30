import { database, databaseConfigured } from "@/server/db";
import { getTranslations } from "@/lib/i18n-server";
import { FaqSection } from "./FaqSection";
export async function ManagedFaq({
  scope,
  children,
}: {
  scope: string;
  children: React.ReactNode;
}) {
  if (!databaseConfigured()) return children;
  const { locale } = await getTranslations();
  const rows = await database().faq.findMany({
    where: { scope, locale, published: true },
    orderBy: { position: "asc" },
    take: 30,
  });
  if (!rows.length) return children;
  return (
    <FaqSection
      entries={rows.map(({ question, answer }) => ({ question, answer }))}
    />
  );
}
