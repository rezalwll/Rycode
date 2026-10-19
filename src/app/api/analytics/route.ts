import { z } from "zod";
import { database } from "@/server/db";
import {
  assertSameOrigin,
  boundedJson,
  consumeLimit,
  fingerprint,
  HttpError,
  requestKey,
} from "@/server/security";
const eventSchema = z.object({
  name: z.enum(["page_view", "contact_click", "lead_saved"]),
  path: z
    .string()
    .regex(/^\/(?:[a-zA-Z0-9_/%-]*)$/)
    .max(300),
  session: z.string().uuid(),
  consent: z.literal(true),
  referrerHost: z
    .string()
    .regex(/^[a-zA-Z0-9.-]*$/)
    .max(200)
    .optional(),
  campaign: z
    .string()
    .regex(/^[a-zA-Z0-9_-]*$/)
    .max(80)
    .optional(),
});
export async function POST(request: Request) {
  try {
    await assertSameOrigin(request);
    const input = eventSchema.parse(await boundedJson(request, 3000));
    if (/^\/(?:en\/|fa\/)?(admin|api|preview)(\/|$)/.test(input.path))
      return new Response(null, { status: 204 });
    await consumeLimit(await requestKey("analytics"), 240, 60);
    await database().analyticsEvent.create({
      data: {
        name: input.name,
        path: input.path,
        sessionHash: fingerprint("analytics:" + input.session),
        referrerHost: input.referrerHost || null,
        campaign: input.campaign || null,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(null, {
      status: error instanceof HttpError ? error.status : 400,
    });
  }
}
