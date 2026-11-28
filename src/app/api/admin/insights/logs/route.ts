import { statfs } from "node:fs/promises";
import { requireStaff } from "@/server/auth";
import { database } from "@/server/db";
import { HttpError } from "@/server/security";

export async function GET(request: Request) {
  try {
    await requireStaff(true);
    const query = new URL(request.url).searchParams;
    const area = query.get("area") || "";
    const level = query.get("level") || "";
    const search = (query.get("q") || "").trim().slice(0, 100);
    const page = Math.max(
      1,
      Math.min(1000, Number.parseInt(query.get("page") || "", 10) || 1),
    );
    if (
      (area &&
        !["form", "auth", "media", "server", "backup", "deploy"].includes(
          area,
        )) ||
      (level && !["info", "warning", "error"].includes(level))
    )
      throw new HttpError(400, "فیلتر لاگ معتبر نیست.");
    const db = database();
    const where = {
      ...(area ? { area } : {}),
      ...(level ? { level } : {}),
      ...(search
        ? {
            OR: ["code", "path", "id"].map((key) => ({
              [key]: { contains: search, mode: "insensitive" as const },
            })),
          }
        : {}),
    };
    const [items, total, recentErrors, backup, deploy, databaseMs, storage] =
      await Promise.all([
        db.operationalLog.findMany({
          where,
          orderBy: [{ createdAt: "desc" }, { id: "desc" }],
          skip: (page - 1) * 30,
          take: 30,
        }),
        db.operationalLog.count({ where }),
        db.operationalLog.count({
          where: {
            level: "error",
            createdAt: { gte: new Date(Date.now() - 86400_000) },
          },
        }),
        db.operationalLog.findFirst({
          where: { area: "backup" },
          orderBy: { createdAt: "desc" },
        }),
        db.operationalLog.findFirst({
          where: { area: "deploy" },
          orderBy: { createdAt: "desc" },
        }),
        (async () => {
          const start = performance.now();
          await db.$queryRaw`SELECT 1`;
          return Math.round(performance.now() - start);
        })(),
        statfs(process.env.MEDIA_ROOT || "storage/media").catch(() => null),
      ]);
    return Response.json(
      {
        items,
        total,
        page,
        recentErrors,
        backup,
        deploy,
        backupNeedsAttention:
          backup !== null &&
          (backup.level === "error" ||
            Date.now() - backup.createdAt.getTime() > 2 * 86400_000),
        databaseMs,
        memoryMb: Math.round(process.memoryUsage.rss() / 1048576),
        uptimeMinutes: Math.floor(process.uptime() / 60),
        mediaFreeGb: storage
          ? Math.round((storage.bavail * storage.bsize) / 1073741824)
          : null,
        release: process.env.RYCODE_RELEASE || null,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof HttpError
            ? error.message
            : "لاگ‌ها فعلاً در دسترس نیستند.",
      },
      { status: error instanceof HttpError ? error.status : 503 },
    );
  }
}
