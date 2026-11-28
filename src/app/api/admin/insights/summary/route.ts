import { requireStaff } from "@/server/auth";
import { getInsights, insightFilters } from "@/server/insights";
import { HttpError } from "@/server/security";

export async function GET(request: Request) {
  try {
    await requireStaff(true);
    const filters = insightFilters(new URL(request.url).searchParams);
    return Response.json(await getInsights(filters), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    if (!(error instanceof HttpError))
      console.error(
        "[insights] report unavailable",
        error instanceof Error ? error.name : "",
      );
    return Response.json(
      {
        error:
          error instanceof HttpError
            ? error.message
            : "گزارش فعلاً در دسترس نیست.",
      },
      { status: error instanceof HttpError ? error.status : 503 },
    );
  }
}
