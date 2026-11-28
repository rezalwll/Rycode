import { after } from "next/server";
import { authentication } from "@/server/auth";
import { writeOperationalLog } from "@/server/operational-log";
export async function GET(request: Request) {
  try {
    return await authentication().handler(request);
  } catch {
    return Response.json(
      { error: "Authentication unavailable" },
      { status: 503 },
    );
  }
}
export async function POST(request: Request) {
  const signIn = new URL(request.url).pathname.endsWith("/sign-in/email");
  function record(status: number) {
    if (!signIn) return;
    after(() => writeOperationalLog({
      area: "auth",
      code: status < 400 ? "sign-in" : status === 429 ? "rate-limit" : "sign-in-failed",
      path: "/api/auth/sign-in/email",
      level: status < 400 ? "info" : status >= 500 ? "error" : "warning",
    }));
  }
  try {
    const response = await authentication().handler(request);
    record(response.status);
    return response;
  } catch {
    record(503);
    return Response.json(
      { error: "Authentication unavailable" },
      { status: 503 },
    );
  }
}
