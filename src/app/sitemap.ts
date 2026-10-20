import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import legacy from "@/content/legacy-content.json";
import { database, databaseConfigured } from "@/server/db";
import { publishedSitemapRecords, contentPath } from "@/server/content";
import { absoluteUrl } from "@/lib/seo";
import { localizedHref, type Locale } from "@/lib/i18n";
export const dynamic = "force-dynamic";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const records = await publishedSitemapRecords();
  const owned = databaseConfigured()
    ? await database().content.findMany({
        select: { kind: true, slug: true, sourceKey: true },
      })
    : [];
  const redirects = databaseConfigured()
    ? await database().redirect.findMany({ select: { source: true } })
    : [];
  const redirectedPaths = new Set(redirects.map((redirect) => redirect.source));
  const paths = [
    "/",
    "/contact",
    "/work",
    "/blog",
    "/services",
    ...["/privacy", "/terms"].filter(
      (path) =>
        !owned.some((o) => o.kind === "PAGE" && o.slug === path.slice(1)),
    ),
    ...services
      .filter(
        (s) =>
          !owned.some(
            (o) =>
              o.kind === "SERVICE" &&
              (o.slug === s.id || o.sourceKey === "service:" + s.id),
          ),
      )
      .map((s) => "/services/" + s.id),
    ...legacy
      .filter(
        (entry) =>
          !owned.some((o) => o.kind === entry.kind && o.slug === entry.slug),
      )
      .map(
        (entry) =>
          `/${entry.kind === "ARTICLE" ? "blog" : "work"}/${entry.slug}`,
      ),
  ];
  const item = (
    path: string,
    locale: Locale,
    available: Locale[] = ["fa", "en"],
    updatedAt?: string,
  ) => ({
    url: absoluteUrl(localizedHref(path, locale)),
    ...(updatedAt ? { lastModified: updatedAt } : {}),
    alternates: {
      languages: Object.fromEntries(
        available.map((l) => [
          l === "fa" ? "fa-IR" : "en",
          absoluteUrl(localizedHref(path, l)),
        ]),
      ),
    },
  });
  return [
    ...paths.flatMap((path) =>
      (["fa", "en"] as const).map((locale) => item(path, locale)),
    ),
    ...records.map((record) =>
      item(
        contentPath(record),
        record.locale,
        record.locales,
        record.updatedAt,
      ),
    ),
  ].filter(
    (entry, index, all) =>
      !redirectedPaths.has(new URL(entry.url).pathname) &&
      all.findIndex((other) => other.url === entry.url) === index,
  );
}
