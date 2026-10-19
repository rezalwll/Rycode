import { authentication } from "@/server/auth";
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
  try {
    return await authentication().handler(request);
  } catch {
    return Response.json(
      { error: "Authentication unavailable" },
      { status: 503 },
    );
  }
}
