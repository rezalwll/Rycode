import { createSign } from "node:crypto";
import { z } from "zod";

const tokenEndpoint = "https://oauth2.googleapis.com/token";
const credentialsSchema = z.object({
  client_email: z.email(),
  private_key: z.string().startsWith("-----BEGIN PRIVATE KEY-----"),
});
const metricSchema = z.object({
  keys: z.array(z.string()),
  clicks: z.number(),
  impressions: z.number(),
  ctr: z.number(),
  position: z.number(),
});
const resultSchema = z.object({ rows: z.array(metricSchema).default([]) });
export type SearchMetric = z.infer<typeof metricSchema>;
type Connected = {
  state: "connected";
  property: string;
  updatedAt: string;
  days: SearchMetric[];
  queries: SearchMetric[];
  pages: SearchMetric[];
};
export type SearchConsoleReport =
  Connected | { state: "unconfigured" | "unavailable"; property?: string };
let cache:
  { key: string; until: number; report: Promise<Connected> } | undefined;

function base64url(value: object) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

async function accessToken(credentials: z.infer<typeof credentialsSchema>) {
  const now = Math.floor(Date.now() / 1000);
  const assertion = [
    base64url({ alg: "RS256", typ: "JWT" }),
    base64url({
      iss: credentials.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: tokenEndpoint,
      iat: now,
      exp: now + 3000,
    }),
  ].join(".");
  const signature = createSign("RSA-SHA256")
    .update(assertion)
    .sign(credentials.private_key, "base64url");
  const response = await fetch(tokenEndpoint, {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: assertion + "." + signature,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error("Google authorization failed");
  return z.object({ access_token: z.string() }).parse(await response.json())
    .access_token;
}

async function readReport(
  property: string,
  credentials: z.infer<typeof credentialsSchema>,
): Promise<Connected> {
  const token = await accessToken(credentials);
  const end = new Date();
  const start = new Date(end.getTime() - 27 * 86400_000);
  const endpoints = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`;
  async function query(dimension: "date" | "query" | "page", rowLimit: number) {
    const response = await fetch(endpoints, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: start.toISOString().slice(0, 10),
        endDate: end.toISOString().slice(0, 10),
        dimensions: [dimension],
        dataState: "final",
        rowLimit,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("Search Console query failed");
    return resultSchema.parse(await response.json()).rows;
  }
  const [days, queries, pages] = await Promise.all([
    query("date", 30),
    query("query", 20),
    query("page", 20),
  ]);
  return {
    state: "connected",
    property,
    updatedAt: new Date().toISOString(),
    days,
    queries,
    pages,
  };
}

export async function searchConsoleReport(): Promise<SearchConsoleReport> {
  const property = process.env.SEARCH_CONSOLE_PROPERTY?.trim();
  const config = process.env.GOOGLE_SEARCH_CONSOLE_CREDENTIALS;
  if (!property || !config) return { state: "unconfigured", property };
  try {
    if (
      !/^(?:sc-domain:[a-z0-9.-]+|https:\/\/[a-z0-9.\-]+\/[a-z0-9/_-]*)$/i.test(
        property,
      )
    ) {
      return { state: "unavailable" };
    }
    const credentials = credentialsSchema.parse(JSON.parse(config));
    const key = property + "|" + credentials.client_email;
    if (cache?.key !== key || cache.until <= Date.now()) {
      cache = {
        key,
        until: Date.now() + 15 * 60_000,
        report: readReport(property, credentials),
      };
    }
    const pending = cache;
    try {
      return await pending.report;
    } catch {
      if (cache === pending) cache = undefined;
      return { state: "unavailable", property };
    }
  } catch {
    return { state: "unavailable", property };
  }
}
