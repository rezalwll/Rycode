import { z } from "zod";
import { Prisma } from "@/generated/prisma/client";
import { analyticsPath, devices, insightsZone, sources } from "@/lib/insights";
import { database } from "./db";
import { HttpError } from "./security";

const filtersSchema = z.object({
  days: z.coerce
    .number()
    .pipe(z.union([z.literal(7), z.literal(30), z.literal(90)])),
  device: z.union([z.enum(devices), z.literal("")]),
  source: z.union([z.enum(sources), z.literal("")]),
  locale: z.enum(["", "fa", "en"]),
  page: z.string().max(240),
});

export function insightFilters(query: URLSearchParams) {
  const parsed = filtersSchema.safeParse({
    days: query.get("days") ?? 30,
    device: query.get("device") ?? "",
    source: query.get("source") ?? "",
    locale: query.get("locale") ?? "",
    page: query.get("page") ?? "",
  });
  if (!parsed.success) throw new HttpError(400, "فیلتر گزارش معتبر نیست.");
  const { page, ...filters } = parsed.data;
  const canonical = page ? analyticsPath(page) : "";
  if (canonical === null) throw new HttpError(400, "نشانی صفحه معتبر نیست.");
  return { ...filters, page: canonical };
}

export type InsightGroup = {
  kind: string;
  label: string;
  metric: string;
  total: number;
};

export async function getInsights(filters: ReturnType<typeof insightFilters>) {
  const { days, device, source, locale, page } = filters;
  const date = Prisma.sql`(now() AT TIME ZONE ${insightsZone})::date`;
  const lower = Prisma.sql`(${date} - ${days * 2 - 1}::int)`;
  const start = Prisma.sql`(${date} - ${days - 1}::int)`;
  const constraints = [
    device ? Prisma.sql`device = ${device}` : Prisma.empty,
    source ? Prisma.sql`source = ${source}` : Prisma.empty,
    locale === "en"
      ? Prisma.sql`(path = '/en' OR path LIKE '/en/%')`
      : Prisma.empty,
    locale === "fa"
      ? Prisma.sql`(path <> '/en' AND path NOT LIKE '/en/%' AND path <> '/404')`
      : Prisma.empty,
    page ? Prisma.sql`path = ${page}` : Prisma.empty,
  ].filter((item) => item !== Prisma.empty);
  const where = constraints.length
    ? Prisma.sql`WHERE ${Prisma.join(constraints, " AND ")}`
    : Prisma.empty;

  const rows = await database().$queryRaw<InsightGroup[]>`
    WITH input AS (
      SELECT "bucket", "name", "path", "detail", "device", "platform", "browser", "viewport",
             "source", "landing", "campaign", "creative", "count"
      FROM "AnalyticsHourly"
      WHERE "bucket" >= ${lower} AND "bucket" < ${date} + 1
      UNION ALL
      SELECT date_trunc('hour', "createdAt" AT TIME ZONE 'UTC' AT TIME ZONE ${insightsZone}),
             'lead_saved',
             CASE WHEN "locale" = 'en' AND "sourcePath" !~ '^/en(/|$)'
                  THEN '/en' || rtrim("sourcePath", '/')
                  ELSE COALESCE(NULLIF(rtrim(regexp_replace("sourcePath", '^/fa(/|$)', '/'), '/'), ''), '/')
             END,
             '', COALESCE(attribution->>'device', 'unknown'), COALESCE(attribution->>'platform', 'unknown'),
             COALESCE(attribution->>'browser', 'unknown'), COALESCE(attribution->>'viewport', 'unknown'),
             COALESCE(attribution->>'source', 'unknown'), COALESCE(attribution->>'landing', ''),
             COALESCE(attribution->>'campaign', ''), COALESCE(attribution->>'creative', ''), 1
      FROM "Lead"
      WHERE "createdAt" >= (${lower}::timestamp AT TIME ZONE ${insightsZone}) AT TIME ZONE 'UTC'
        AND "createdAt" < ((${date} + 1)::timestamp AT TIME ZONE ${insightsZone}) AT TIME ZONE 'UTC'
    ),
    filtered AS (
      SELECT *, bucket >= ${start} AS current FROM input ${where}
    ),
    grouped AS (
      SELECT dimension.kind, dimension.label, dimension.metric, SUM(filtered.count)::float8 AS total
      FROM filtered
      CROSS JOIN LATERAL (VALUES
        ('summary', CASE WHEN current THEN 'current' ELSE 'previous' END, name, true),
        ('days', to_char(bucket, 'YYYY-MM-DD'), name, current AND name IN ('page_view','page_entry','lead_saved')),
        ('heat', (extract(isodow FROM bucket)::int - 1)::text || ':' || extract(hour FROM bucket)::int::text,
          name, current AND name IN ('page_entry','lead_saved')),
        ('pages', path, name, current AND name IN ('page_view','page_entry','page_exit','contact_click','lead_saved','active_time','scroll_depth') AND
          (name NOT IN ('active_time','scroll_depth') OR detail IN ('45','75'))),
        ('landings', landing, name, current AND landing <> '' AND name IN ('page_entry','lead_saved')),
        ('sources', source, name, current AND name IN ('page_entry','lead_saved')),
        ('devices', device, name, current AND name IN ('page_view','lead_saved')),
        ('browsers', browser, name, current AND name IN ('page_view','lead_saved')),
        ('platforms', platform, name, current AND name IN ('page_view','lead_saved')),
        ('viewports', viewport, name, current AND name = 'page_view'),
        ('sections', path || '|' || detail, name, current AND name IN ('section_view','section_click')),
        ('campaigns', source || '|' || campaign || '|' || creative, name, current AND campaign <> '' AND name IN ('page_entry','lead_saved')),
        ('journeys', path || '|' || detail, name, current AND name = 'navigate'),
        ('links', path || '|' || detail, name, current AND name = 'link_click'),
        ('contact', detail, name, current AND name = 'contact_click'),
        ('form-errors', detail, name, current AND name = 'form_invalid'),
        ('browser-errors', path || '|' || detail, name, current AND name = 'browser_error'),
        ('web-vitals', path || '|' || split_part(detail, '|', 1), split_part(detail, '|', 2), current AND name = 'web_vital'),
        ('engagement', detail, name, current AND name IN ('active_time','scroll_depth'))
      ) AS dimension(kind, label, metric, include)
      WHERE dimension.include
      GROUP BY dimension.kind, dimension.label, dimension.metric
    ),
    ranked AS (
      SELECT *, dense_rank() OVER (PARTITION BY kind, metric ORDER BY total DESC, label) AS rank
      FROM grouped
    )
    SELECT kind, label, metric, total FROM ranked
    WHERE kind IN ('days', 'heat', 'summary') OR rank <= 50
    ORDER BY kind, label
  `;
  return {
    rows,
    days,
    date: new Intl.DateTimeFormat("en-CA", { timeZone: insightsZone }).format(
      new Date(),
    ),
  };
}
