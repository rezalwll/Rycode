import { createHmac } from "node:crypto";
import { headers } from "next/headers";
import { database } from "./db";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
export function secret() {
  const value = process.env.BETTER_AUTH_SECRET;
  if (!value || value.length < 32)
    throw new Error("Set BETTER_AUTH_SECRET to at least 32 random characters");
  return value;
}
export function fingerprint(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}
export async function assertSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const expected = new URL(
    process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || request.url,
  ).origin;
  if (!origin || origin !== expected)
    throw new HttpError(403, "Invalid request origin");
}
export async function boundedJson(
  request: Request,
  limit = 120_000,
): Promise<unknown> {
  if (!request.headers.get("content-type")?.includes("application/json"))
    throw new HttpError(415, "JSON required");
  const reader = request.body?.getReader();
  if (!reader) throw new HttpError(400, "Missing request body");
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const result = await reader.read();
    if (result.done) break;
    size += result.value.byteLength;
    if (size > limit) {
      await reader.cancel();
      throw new HttpError(413, "Request too large");
    }
    chunks.push(result.value);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new HttpError(400, "Invalid JSON");
  }
}
export async function consumeLimit(
  key: string,
  limit: number,
  windowSeconds: number,
) {
  const hashed = fingerprint(key);
  const rows = await database().$queryRaw<{ count: number }[]>`
    INSERT INTO "RateLimit" ("key", "count", "resetAt") VALUES (${hashed}, 1, NOW() + (${windowSeconds} * INTERVAL '1 second'))
    ON CONFLICT ("key") DO UPDATE SET
      "count" = CASE WHEN "RateLimit"."resetAt" <= NOW() THEN 1 ELSE "RateLimit"."count" + 1 END,
      "resetAt" = CASE WHEN "RateLimit"."resetAt" <= NOW() THEN NOW() + (${windowSeconds} * INTERVAL '1 second') ELSE "RateLimit"."resetAt" END
    RETURNING "count"`;
  if (rows[0].count > limit)
    throw new HttpError(429, "Too many requests; please try again later");
}
export async function requestKey(prefix: string) {
  const h = await headers();
  // Forwarding headers are used only when the deployment proxy is explicitly trusted.
  const ip =
    process.env.TRUST_PROXY === "true"
      ? h.get("x-forwarded-for")?.split(",").at(-1)?.trim() || "unknown"
      : "local";
  return `${prefix}:${ip}`;
}
export function safeInternalPath(value: string) {
  if (
    !value.startsWith("/") ||
    value.startsWith("//") ||
    /[\\\u0000-\u0020\u007f]/.test(value) ||
    /%0[ad]|%5c/i.test(value)
  )
    throw new HttpError(400, "Invalid internal path");
  const normalized = new URL(value, "https://internal.invalid");
  if (normalized.origin !== "https://internal.invalid")
    throw new HttpError(400, "Invalid destination");
  return normalized.pathname + normalized.search + normalized.hash;
}
