import { database, databaseConfigured } from "./db";

type LogEntry = {
  area: "form" | "auth" | "server" | "media" | "backup" | "deploy";
  code: string;
  path: string;
  level: "info" | "warning" | "error";
  elapsedMs?: number;
};

export async function writeOperationalLog(entry: LogEntry) {
  if (!databaseConfigured()) return;
  try {
    await database().operationalLog.create({
      data: {
        ...entry,
        path: entry.path.slice(0, 240),
        release: process.env.RYCODE_RELEASE?.slice(0, 80),
      },
    });
  } catch {
    // Keep a minimal server-side record when the database is unavailable.
    console.warn("[rycode]", entry.area, entry.code, entry.path);
  }
}
