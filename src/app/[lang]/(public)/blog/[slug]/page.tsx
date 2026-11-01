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
  const { content } = await lookupContent("ARTICLE", slug, locale);
  if (!content) return {};
  const metadata = pageMetadata({
    path: "/blog/" + slug,
    locale,
    title: content.seoTitle,
    description: content.seoDescription,
    image: content.image?.endsWith(".svg")
      ? "/brand/og-card.png"
      : content.image || undefined,
    locales: content.locales,
    noIndex: content.noIndex,
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: content.publishedAt,
      modifiedTime: content.updatedAt,
      tags: content.tags,
      authors: [content.author],
    },
  };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { locale } = await getTranslations();
  const { content } = await lookupContent("ARTICLE", slug, locale);
  if (!content) notFound();
  return <ContentDetail content={content} locale={locale} />;
}
