import { notFound } from "next/navigation";
import { lookupContent } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { ContentDetail } from "@/components/content/ContentDetail";

export async function VerifiedProjectRoute({ slug }: { slug: string }) {
  const { locale } = await getTranslations();
  const result = await lookupContent("PROJECT", slug, locale);
  if (!result.content || result.content.legacy) notFound();
  return <ContentDetail content={result.content} locale={locale} />;
}
