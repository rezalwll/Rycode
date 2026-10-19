import { notFound } from "next/navigation";
import { lookupContent } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/seo";
import { ContentDetail } from "@/components/content/ContentDetail";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { locale } = await getTranslations();
  const { content } = await lookupContent("PAGE", slug, locale);
  return content
    ? pageMetadata({
        path: "/pages/" + slug,
        locale,
        title: content.seoTitle,
        description: content.seoDescription,
        image: content.image || undefined,
        locales: content.locales,
        noIndex: content.noIndex,
      })
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { locale } = await getTranslations();
  const { content } = await lookupContent("PAGE", slug, locale);
  if (!content) notFound();
  return <ContentDetail content={content} locale={locale} />;
}
