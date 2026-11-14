import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { getTranslations } from "@/lib/i18n-server";
import { lookupContent, type PublicContent } from "@/server/content";
import { serviceDocument } from "@/content/service-document";
import { pageMetadata } from "@/lib/seo";
import { ContentDetail } from "@/components/content/ContentDetail";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { WebsiteDesignPage } from "@/components/services/WebsiteDesignPage";
import { SeoGrowthPage } from "@/components/services/SeoGrowthPage";
import { SoftwareServicePage } from "@/components/services/SoftwareServicePage";
import { ProjectRescuePage } from "@/components/services/ProjectRescuePage";
import { AutomationServicePage } from "@/components/services/AutomationServicePage";
import { automationMeta } from "@/components/services/automation-copy";
import {
  automationServiceId,
  automationServiceSlug,
} from "@/lib/automation-route";

const persianMetadata: Partial<
  Record<string, { title: string; description: string; image?: string }>
> = {
  [automationServiceSlug]: automationMeta,
  grow: {
    title: "خدمات سئو سایت و فروشگاه اینترنتی، سئو تکنیکال و محتوا",
    description:
      "سایتت توی گوگل خوب دیده نمی‌شه؟ در رایکد از بررسی و رفع مشکلات فنی سئو تا تحقیق کلمات کلیدی، بهینه‌سازی محتوا و سئوی فروشگاهی کمک می‌کنیم.",
    image: "/brand/seo-growth/search-analysis.webp",
  },
  software: {
    title: "طراحی نرم‌افزار اختصاصی تحت وب، ویندوز و اندروید",
    description:
      "به نرم‌افزار مخصوص کسب‌وکارت نیاز داری؟ رایکد در طراحی نرم‌افزار تحت وب، ویندوز، اپلیکیشن اندروید، CRM، داشبورد و سامانه‌های اختصاصی کمکت می‌کنه.",
    image: "/brand/journal/business/software.png",
  },
  rescue: {
    title: "رفع باگ سایت و نرم‌افزار، نجات پروژه نیمه‌کاره و توسعه کد",
    description:
      "سایت یا نرم‌افزارت مشکل داره؟ پروژه‌ات نیمه‌کاره مونده؟ رای‌کد برای رفع باگ وردپرس و نرم‌افزار، تکمیل پروژه‌های رهاشده و توسعه امکانات جدید کمکت می‌کنه.",
    image: "/brand/project-rescue/code-workspace.webp",
  },
};

async function resolve(slug: string) {
  const { locale } = await getTranslations();
  const serviceId = slug === automationServiceSlug ? automationServiceId : slug;
  const result = await lookupContent("SERVICE", serviceId, locale);
  const service = services.find((s) => s.id === serviceId);
  // Keep the seven canonical service pages on the curated product copy. CMS
  // records still power custom services and specialist child pages.
  if (!service) return result.owned ? result.content : null;
  return {
    id: service.id,
    kind: "SERVICE",
    featured: false,
    sample: false,
    readingTime: 1,
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
  const metadata = locale === "fa" ? persianMetadata[slug] : undefined;
  return pageMetadata({
    path: "/services/" + slug,
    locale,
    title: metadata?.title ?? content.seoTitle,
    description: metadata?.description ?? content.seoDescription,
    image: metadata?.image ?? content.image ?? undefined,
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
  if (slug === "build" && locale === "fa") return <WebsiteDesignPage />;
  if (slug === "grow" && locale === "fa") return <SeoGrowthPage />;
  if (slug === "software" && locale === "fa") return <SoftwareServicePage />;
  if (slug === "rescue" && locale === "fa") return <ProjectRescuePage />;
  if (slug === automationServiceSlug && locale === "fa")
    return <AutomationServicePage />;
  return content.kind === "SERVICE" ? (
    <ServiceDetailPage content={content} locale={locale} />
  ) : (
    <ContentDetail content={content} locale={locale} />
  );
}
