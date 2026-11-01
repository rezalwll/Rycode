import { cache } from "react";
import type { Prisma } from "@/generated/prisma/client";
import type { Locale } from "@/lib/i18n";
import { database, databaseConfigured } from "./db";
import { publicDto, type PublicContent } from "./content";
import { listingParams, type ListingSearchParams } from "@/lib/listing-params";
import { searchText } from "@/lib/article";

const visible = (locale: Locale): Prisma.ContentWhereInput => ({
  kind: "ARTICLE",
  OR: [
    { status: "PUBLISHED" },
    { status: "SCHEDULED", scheduledAt: { lte: new Date() } },
  ],
  translations: { some: { locale, approved: true } },
});
export const blogFacets = cache(async (locale: Locale) => {
  if (!databaseConfigured())
    return { categories: [] as string[], tags: [] as string[] };
  const rows = await database().content.findMany({
    where: visible(locale),
    select: { category: true, tags: true },
  });
  return {
    categories: [...new Set(rows.map((r) => r.category).filter(Boolean))].sort(
      (a, b) => a.localeCompare(b, locale),
    ),
    tags: [...new Set(rows.flatMap((r) => r.tags))],
  };
});
export async function blogListing(
  locale: Locale,
  raw: ListingSearchParams = {},
) {
  const filters = listingParams(raw);
  const facets = await blogFacets(locale);
  if (!databaseConfigured())
    return { items: [], total: 0, featured: [], filters, ...facets };
  const search: Prisma.ContentWhereInput = filters.q
    ? {
        OR: [
          {
            translations: {
              some: {
                locale,
                approved: true,
                OR: [
                  { title: { contains: filters.q, mode: "insensitive" } },
                  { summary: { contains: filters.q, mode: "insensitive" } },
                ],
              },
            },
          },
          {
            tags: {
              hasSome: facets.tags.filter((tag) =>
                searchText(tag).includes(searchText(filters.q)),
              ),
            },
          },
        ],
      }
    : {};
  const where: Prisma.ContentWhereInput = {
    AND: [
      visible(locale),
      search,
      ...(filters.category ? [{ category: filters.category }] : []),
    ],
  };
  const [records, total, featured] = await Promise.all([
    database().content.findMany({
      where,
      include: { translations: true },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }, { id: "asc" }],
      take: 12,
      skip: (filters.page - 1) * 12,
    }),
    database().content.count({ where }),
    filters.q || filters.category || filters.page > 1
      ? []
      : database().content.findMany({
          where: { AND: [visible(locale), { featured: true }] },
          include: { translations: true },
          orderBy: [
            { position: "asc" },
            { publishedAt: "desc" },
            { id: "asc" },
          ],
          take: 3,
        }),
  ]);
  return {
    items: records.map((r) => publicDto(r, locale)),
    total,
    featured: featured.map((r) => publicDto(r, locale)),
    filters,
    ...facets,
  };
}
export async function relatedBlogArticles(
  content: PublicContent,
  locale: Locale,
) {
  if (!databaseConfigured()) return [];
  const where: Prisma.ContentWhereInput = {
    AND: [visible(locale), { id: { not: content.id } }],
  };
  const matches = await database().content.findMany({
    where: {
      AND: [
        where,
        {
          OR: [
            { id: { in: content.relatedIds } },
            ...(content.category ? [{ category: content.category }] : []),
            ...(content.tags.length
              ? [{ tags: { hasSome: content.tags } }]
              : []),
          ],
        },
      ],
    },
    include: { translations: true },
    take: 3,
    orderBy: { publishedAt: "desc" },
  });
  const rest =
    matches.length >= 3
      ? []
      : await database().content.findMany({
          where: { AND: [where, { id: { notIn: matches.map((r) => r.id) } }] },
          include: { translations: true },
          take: 3 - matches.length,
          orderBy: [{ publishedAt: "desc" }, { id: "asc" }],
        });
  return [...matches, ...rest].map((r) => publicDto(r, locale));
}
