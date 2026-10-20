import { z } from "zod";
import { database } from "@/server/db";
import {
  assertSameOrigin,
  boundedJson,
  consumeLimit,
  HttpError,
  requestKey,
} from "@/server/security";
const eventSchema = z
  .object({
    name: z.enum(["page_view", "contact_click", "lead_saved"]),
    path: z
      .string()
      .regex(/^\/[\p{L}\p{N}_/%-]*$/u)
      .max(300),
  })
  .strict();
export async function POST(request: Request) {
  try {
    await assertSameOrigin(request);
    const input = eventSchema.parse(await boundedJson(request, 1000));
    const path =
      decodeURIComponent(input.path)
        .normalize("NFC")
        .replace(/^\/fa(?=\/|$)/, "")
        .replace(/\/$/, "") || "/";
    // Only public page paths belong in these counters; never store query data.
    if (
      !/^\/(?:en(?:\/|$))?(?:(?:contact|privacy|terms)|(?:blog|work|services|pages)(?:\/[\p{L}\p{N}_-]+)?)?$/u.test(
        path,
      )
    )
      return new Response(null, { status: 204 });
    await consumeLimit(await requestKey("analytics"), 240, 60);
    // One atomic counter per UTC day/event/page, with no per-visit records.
    await database().$executeRaw`
      INSERT INTO "AnalyticsDaily" ("day", "name", "path", "count")
      VALUES ((CURRENT_TIMESTAMP AT TIME ZONE 'UTC')::date, ${input.name}, ${path}, 1)
      ON CONFLICT ("day", "name", "path") DO UPDATE
      SET "count" = "AnalyticsDaily"."count" + 1`;
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(null, {
      status: error instanceof HttpError ? error.status : 400,
    });
  }
}
