import { cache } from "react";
import { database, databaseConfigured } from "./db";
import type { ContentKind, Prisma } from "@/generated/prisma/client";
import type { Locale } from "@/lib/i18n";
import type { RichNode } from "@/lib/content-rules";
import { services, type Service } from "@/content/services";
import { documentText } from "@/lib/content-rules";
import { listingPage } from "@/lib/listing-params";

export const contentSegments = {
  ARTICLE: "blog",
  SERVICE: "services",
  PROJECT: "work",
  PAGE: "pages",
} as const;
export function contentPath(content: Pick<PublicContent, "kind" | "slug">) {
  return content.kind === "PAGE" && ["privacy", "terms"].includes(content.slug)
    ? "/" + content.slug
    : `/${contentSegments[content.kind]}/${content.slug}`;
}
export type PublicContent = {
  id: string;
  kind: ContentKind;
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  body: RichNode;
  image: string | null;
  imageAlt: string;
  author: string;
  category: string;
  tags: string[];
  serviceId: string | null;
  relatedIds: string[];
  noIndex: boolean;
  legacy: boolean;
  publishedAt: string;
  updatedAt: string;
  locales: Locale[];
  seoTitle: string;
  seoDescription: string;
};
const include = { translations: true } as const;
type RecordWithTranslations = Prisma.ContentGetPayload<{
  include: typeof include;
}>;
export function visibleContent(
  record: Pick<
    RecordWithTranslations,
    "status" | "scheduledAt" | "translations"
  >,
  locale: Locale,
  now = new Date(),
) {
  const published =
    record.status === "PUBLISHED" ||
    (record.status === "SCHEDULED" &&
      record.scheduledAt !== null &&
      record.scheduledAt <= now);
  return (
    published &&
    record.translations.some((t) => t.locale === locale && t.approved)
  );
}
function publicDto(
  record: RecordWithTranslations,
  locale: Locale,
): PublicContent {
  const text = record.translations.find((t) => t.locale === locale)!;
  return {
    id: record.id,
    kind: record.kind,
    slug: record.slug,
    locale,
    title: text.title,
    summary: text.summary,
    body: text.body as RichNode,
    image: record.featuredImage,
    imageAlt: text.imageAlt || text.title,
    author: record.author,
    category: record.category,
    tags: record.tags,
    relatedIds: record.relatedIds,
    serviceId: record.serviceId,
    noIndex: record.noIndex,
    legacy: record.legacy,
    publishedAt: (
      record.publishedAt ||
      record.scheduledAt ||
      record.createdAt
    ).toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    locales: record.translations
      .filter((t) => t.approved)
      .map((t) => t.locale as Locale),
    seoTitle: text.seoTitle || text.title,
    seoDescription: text.seoDescription || text.summary,
  };
}
export const lookupContent = cache(
  async (
    kind: ContentKind,
    slug: string,
    locale: Locale,
    preview = false,
  ): Promise<{ owned: boolean; content: PublicContent | null }> => {
    if (!databaseConfigured()) return { owned: false, content: null };
    try {
      slug = decodeURIComponent(slug);
    } catch {
      return { owned: true, content: null };
    }
    const record = await database().content.findUnique({
      where: { kind_slug: { kind, slug } },
      include,
    });
    if (!record) return { owned: false, content: null };
    const hasTranslation = record.translations.some((t) => t.locale === locale);
    return {
      owned: true,
      content:
        hasTranslation && (preview || visibleContent(record, locale))
          ? publicDto(record, locale)
          : null,
    };
  },
);
export const listPublishedContent = cache(
  async (
    kind: ContentKind,
    locale: Locale,
    options: { page?: number; search?: string; category?: string } = {},
  ) => {
    if (!databaseConfigured())
      return { items: [] as PublicContent[], total: 0 };
    const now = new Date();
    const where: Prisma.ContentWhereInput = {
      kind,
      OR: [
        { status: "PUBLISHED" },
        { status: "SCHEDULED", scheduledAt: { lte: now } },
      ],
      translations: {
        some: {
          locale,
          approved: true,
          ...(options.search
            ? {
                OR: [
                  {
                    title: {
                      contains: options.search.slice(0, 100),
                      mode: "insensitive",
                    },
                  },
                  {
                    bodyText: {
                      contains: options.search.slice(0, 100),
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {}),
        },
      },
      ...(options.category ? { category: options.category.slice(0, 100) } : {}),
    };
    const page = listingPage(options.page);
    const [records, total] = await Promise.all([
      database().content.findMany({
        where,
        include,
        orderBy: [
          { position: "asc" },
          { publishedAt: "desc" },
          { createdAt: "desc" },
        ],
        take: 12,
        skip: (page - 1) * 12,
      }),
      database().content.count({ where }),
    ]);
    return { items: records.map((record) => publicDto(record, locale)), total };
  },
);
export const siteSettings = cache(
  async (): Promise<Record<string, unknown>> => {
    if (!databaseConfigured()) return {};
    const rows = await database().siteSetting.findMany();
    return Object.fromEntries(rows.map((row) => [row.key, row.value]));
  },
);
export const serviceCatalog = cache(
  async (locale: Locale): Promise<Service[]> => {
    if (!databaseConfigured()) return services;
    const rows = await database().content.findMany({
      where: { kind: "SERVICE" },
      include,
      orderBy: [{ position: "asc" }, { createdAt: "asc" }],
    });
    const result: Service[] = [];
    for (const fallback of services) {
      const record = rows.find(
        (row) => row.sourceKey === "service:" + fallback.id,
      );
      if (!record) {
        result.push(fallback);
        continue;
      }
      if (!visibleContent(record, locale)) continue;
      const item = publicDto(record, locale);
      result.push({
        ...fallback,
        id: item.slug,
        title: { ...fallback.title, [locale]: item.title },
        summary: { ...fallback.summary, [locale]: item.summary },
        scope: {
          ...fallback.scope,
          [locale]: documentText(
            item.body.content?.find((node) => node.type === "paragraph") ||
              item.body,
          ).slice(0, 700),
        },
        image: item.image || fallback.image,
      });
    }
    for (const record of rows.filter(
      (row) => !row.sourceKey && visibleContent(row, locale),
    )) {
      const item = publicDto(record, locale);
      result.push({
        id: item.slug,
        title: { fa: item.title, en: item.title },
        summary: { fa: item.summary, en: item.summary },
        scope: { fa: item.summary, en: item.summary },
        tags: item.tags.map((tag) => ({ fa: tag, en: tag })),
        image: item.image || "/brand/og-card.png",
      });
    }
    return result;
  },
);
export const serviceHierarchy = cache(
  async (content: PublicContent, locale: Locale) => {
    if (
      content.kind !== "SERVICE" ||
      !content.serviceId ||
      !databaseConfigured()
    )
      return { parent: null, children: [] as PublicContent[] };
    const rows = await database().content.findMany({
      where: {
        kind: "SERVICE",
        OR: [
          { sourceKey: "service:" + content.serviceId },
          { slug: content.serviceId },
          {
            sourceKey: { startsWith: "specialty:" },
            serviceId: content.serviceId,
          },
        ],
      },
      include,
      orderBy: [{ position: "asc" }, { createdAt: "asc" }],
    });
    const parent =
      rows.find((row) => row.sourceKey === "service:" + content.serviceId) ||
      rows.find(
        (row) =>
          row.slug === content.serviceId &&
          !row.sourceKey?.startsWith("specialty:"),
      );
    return {
      parent:
        parent && parent.id !== content.id && visibleContent(parent, locale)
          ? publicDto(parent, locale)
          : null,
      children:
        parent?.id === content.id
          ? rows
              .filter(
                (row) =>
                  row.id !== content.id &&
                  row.sourceKey?.startsWith("specialty:") &&
                  visibleContent(row, locale),
              )
              .map((row) => publicDto(row, locale))
          : [],
    };
  },
);
export async function relatedContent(content: PublicContent, locale: Locale) {
  if (!databaseConfigured()) return [];
  const relations: Prisma.ContentWhereInput[] = [
    { id: { in: content.relatedIds } },
  ];
  if (content.serviceId) relations.push({ serviceId: content.serviceId });
  if (content.category)
    relations.push({ category: content.category, kind: content.kind });
  const rows = await database().content.findMany({
    where: {
      id: { not: content.id },
      noIndex: false,
      AND: [
        { OR: relations },
        {
          OR: [
            { status: "PUBLISHED" },
            { status: "SCHEDULED", scheduledAt: { lte: new Date() } },
          ],
        },
      ],
      translations: { some: { locale, approved: true } },
    },
    include,
    take: 3,
    orderBy: { updatedAt: "desc" },
  });
  return rows.map((row) => publicDto(row, locale));
}
export async function publishedSitemapRecords() {
  if (!databaseConfigured()) return [];
  const rows = await database().content.findMany({
    where: {
      noIndex: false,
      OR: [
        { status: "PUBLISHED" },
        { status: "SCHEDULED", scheduledAt: { lte: new Date() } },
      ],
    },
    include,
  });
  return rows.flatMap((record) =>
    record.translations
      .filter((t) => t.approved)
      .map((t) => publicDto(record, t.locale as Locale)),
  );
}
