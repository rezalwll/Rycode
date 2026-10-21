import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { getTranslations } from "@/lib/i18n-server";
import { lookupContent, type PublicContent } from "@/server/content";
import { serviceDocument } from "@/content/service-document";
import { pageMetadata } from "@/lib/seo";
import { ContentDetail } from "@/components/content/ContentDetail";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
async function resolve(slug: string) {
  const { locale } = await getTranslations();
  const result = await lookupContent("SERVICE", slug, locale);
  const service = services.find((s) => s.id === slug);
  // Keep the seven canonical service pages on the curated product copy. CMS
  // records still power custom services and specialist child pages.
  if (!service) return result.owned ? result.content : null;
  return {
    id: service.id,
    kind: "SERVICE",
    locale,
    slug: service.id,
    title: service.title[locale],
    summary: service.summary[locale],
    body: serviceDocument(service.id, service.scope[locale], locale),
    image: service.image,
    imageAlt: service.title[locale],
    author: "RYCODE",
    category: "",
    tags: service.tags.map((tag) => tag[locale]),
    relatedIds: [],
    serviceId: service.id,
    noIndex: false,
    legacy: false,
    publishedAt: "2026-10-20T00:00:00Z",
    updatedAt: "2026-10-20T00:00:00Z",
    locales: ["fa", "en"],
    seoTitle: service.title[locale],
    seoDescription: service.summary[locale],
  } as PublicContent;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await resolve(slug);
  const { locale } = await getTranslations();
  if (!content) return {};
  return pageMetadata({
    path: "/services/" + slug,
    locale,
    title: content.seoTitle,
    description: content.seoDescription,
    image: content.image || undefined,
    locales: content.locales,
    noIndex: content.noIndex,
  });
}
export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await resolve(slug);
  if (!content) notFound();
  const { locale } = await getTranslations();
  return content.kind === "SERVICE" ? (
    <ServiceDetailPage content={content} locale={locale} />
  ) : (
    <ContentDetail content={content} locale={locale} />
  );
}
