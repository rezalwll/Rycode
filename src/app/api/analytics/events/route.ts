import { Prisma } from "@/generated/prisma/client";
import {
  analyticsDetail,
  analyticsPath,
  insightBatchSchema,
  insightsZone,
} from "@/lib/insights";
import { database } from "@/server/db";
import {
  assertSameOrigin,
  boundedJson,
  consumeLimit,
  HttpError,
  requestKey,
} from "@/server/security";

export async function POST(request: Request) {
  try {
    await assertSameOrigin(request);
    const { events } = insightBatchSchema.parse(
      await boundedJson(request, 12_000),
    );
    const counts = new Map<string, { dimensions: string[]; count: number }>();
    for (const event of events) {
      const path =
        event.name === "page_not_found" ? "/404" : analyticsPath(event.path);
      const detail = analyticsDetail(event.name, event.detail);
      if (!path || detail === null) continue;
      const {
        device,
        platform,
        browser,
        viewport,
        source,
        landing,
        campaign,
        creative,
      } = event.context;
      const dimensions = [
        event.name,
        path,
        detail,
        device,
        platform,
        browser,
        viewport,
        source,
        landing || path,
        campaign,
        creative,
      ];
      const key = JSON.stringify(dimensions);
      const row = counts.get(key);
      if (row) row.count += 1;
      else counts.set(key, { dimensions, count: 1 });
    }
    if (!counts.size) return new Response(null, { status: 204 });

    const key = await requestKey("site-insights");
    await consumeLimit(key, key.endsWith(":local") ? 1800 : 120, 60);
    const values = Array.from(counts.entries())
      .sort(([left], [right]) => (left < right ? -1 : left > right ? 1 : 0))
      .map(
        ([, { dimensions, count }]) =>
          Prisma.sql`(date_trunc('hour', now() AT TIME ZONE ${insightsZone}), ${Prisma.join([...dimensions, count])})`,
      );
    await database().$executeRaw`
      INSERT INTO "AnalyticsHourly"
        ("bucket", "name", "path", "detail", "device", "platform", "browser", "viewport", "source", "landing", "campaign", "creative", "count")
      VALUES ${Prisma.join(values)}
      ON CONFLICT ("bucket", "name", "path", "detail", "device", "platform", "browser", "viewport", "source", "landing", "campaign", "creative")
      DO UPDATE SET "count" = "AnalyticsHourly"."count" + EXCLUDED."count"
    `;
    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof HttpError)
      return new Response(null, { status: error.status });
    if (error instanceof Error && error.name === "ZodError")
      return new Response(null, { status: 400 });
    return new Response(null, { status: 503 });
  }
}
