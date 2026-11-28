import { requireStaff } from "@/server/auth";
import { HttpError } from "@/server/security";
import { searchConsoleReport } from "@/server/search-console";

export async function GET() {
  try {
    await requireStaff(true);
    return Response.json(await searchConsoleReport(), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof HttpError
            ? error.message
            : "گزارش جست‌وجو در دسترس نیست.",
      },
      { status: error instanceof HttpError ? error.status : 503 },
    );
  }
}
