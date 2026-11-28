import { randomBytes } from "node:crypto";
import { after } from "next/server";
import { leadSchema } from "@/lib/content-rules";
import { analyticsContext } from "@/lib/insights";
import { database } from "@/server/db";
import { writeOperationalLog } from "@/server/operational-log";
import {
  assertSameOrigin,
  boundedJson,
  consumeLimit,
  HttpError,
  requestKey,
} from "@/server/security";
export async function POST(request: Request) {
  const started = Date.now();
  function log(code: string, level: "warning" | "error") {
    after(() => writeOperationalLog({
      area: "form",
      code,
      path: "/api/leads",
      level,
      elapsedMs: Date.now() - started,
    }));
  }
  try {
    await assertSameOrigin(request);
    const raw = await boundedJson(request, 18000);
    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      log("validation", "warning");
      return Response.json(
        {
          error: "اطلاعات فرم را بررسی کنید / Review the form",
          fields: parsed.error.flatten().fieldErrors,
        },
        { status: 422 },
      );
    }
    const input = parsed.data;
    const attribution = analyticsContext.safeParse(
      raw && typeof raw === "object" && "attribution" in raw ? raw.attribution : undefined,
    );
    if (input.website)
      return Response.json({
        receipt: "RY-" + randomBytes(6).toString("hex").toUpperCase(),
      });
    const existing = await database().lead.findUnique({
      where: { requestKey: input.requestKey },
      select: { receipt: true },
    });
    if (existing) return Response.json(existing);
    if (
      Date.now() - input.startedAt < 500 ||
      Date.now() - input.startedAt > 86400000
    )
      throw new HttpError(422, "Please refresh the form and try again");
    await consumeLimit(await requestKey("leads"), 8, 900);
    const lead = await database().lead.upsert({
      where: { requestKey: input.requestKey },
      update: {},
      create: {
        receipt: "RY-" + randomBytes(6).toString("hex").toUpperCase(),
        requestKey: input.requestKey,
        name: input.name,
        email: input.email || null,
        phone: input.phone || null,
        message: input.message,
        service: input.service || null,
        sourcePath: input.sourcePath.split(/[?#]/)[0],
        locale: input.locale,
        attribution: attribution.success ? attribution.data : undefined,
      },
      select: { receipt: true },
    });
    return Response.json(lead, { status: 201 });
  } catch (error) {
    const status = error instanceof HttpError ? error.status : 503;
    if (status === 503 || status === 422 || status === 429)
      log(String(status), status >= 500 ? "error" : "warning");
    return Response.json(
      {
        error:
          status === 503
            ? "ثبت درخواست فعلاً ممکن نیست؛ دوباره تلاش کنید / Submission unavailable; please retry"
            : (error as Error).message,
      },
      {
        status,
        headers: status === 429 ? { "Retry-After": "900" } : undefined,
      },
    );
  }
}
