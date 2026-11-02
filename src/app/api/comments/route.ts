import { z } from "zod";
import { commentSchema } from "@/lib/comments";
import { publicComments, submitComment } from "@/server/comments";
import { listingPage } from "@/lib/listing-params";
import {
  assertSameOrigin,
  boundedJson,
  consumeLimit,
  HttpError,
  requestKey,
} from "@/server/security";

function failure(error: unknown) {
  const status =
    error instanceof HttpError
      ? error.status
      : error instanceof z.ZodError
        ? 422
        : 503;
  const errorText =
    status === 429
      ? "تعداد ارسال‌ها زیاد است؛ کمی بعد تلاش کنید / Please try again later"
      : status === 422
        ? "اطلاعات فرم را بررسی کنید؛ در صورت نیاز صفحه را تازه کنید / Review the form or refresh the page"
        : status === 404
          ? "مقاله در دسترس نیست / Article unavailable"
          : "دریافت یا ثبت دیدگاه ممکن نشد؛ دوباره تلاش کنید / Comments unavailable; please retry";
  return Response.json(
    { error: errorText },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...(status === 429 ? { "Retry-After": "900" } : {}),
      },
    },
  );
}
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const articleId = z
      .string()
      .uuid()
      .parse(url.searchParams.get("articleId"));
    const locale = z
      .enum(["fa", "en"])
      .parse(url.searchParams.get("locale") || "fa");
    return Response.json(
      await publicComments(
        articleId,
        locale,
        listingPage(url.searchParams.get("page")),
      ),
      {
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch (error) {
    return failure(error);
  }
}
export async function POST(request: Request) {
  try {
    await assertSameOrigin(request);
    const input = commentSchema.parse(await boundedJson(request, 20000));
    if (input.website) return Response.json({ accepted: true });
    const elapsed = Date.now() - input.startedAt;
    if (elapsed < 800 || elapsed > 86400000)
      throw new HttpError(422, "Refresh the form");
    await consumeLimit(await requestKey("comments"), 8, 900);
    await submitComment(input);
    return Response.json({ accepted: true }, { status: 201 });
  } catch (error) {
    return failure(error);
  }
}
