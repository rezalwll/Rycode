import { database, databaseConfigured } from "@/server/db";
export async function GET() {
  try {
    if (!databaseConfigured())
      return Response.json(
        { status: "preview", database: false },
        { status: process.env.NODE_ENV === "production" ? 503 : 200 },
      );
    await database().$queryRaw`SELECT 1`;
    return Response.json({ status: "ok" });
  } catch {
    return Response.json({ status: "unavailable" }, { status: 503 });
  }
}
