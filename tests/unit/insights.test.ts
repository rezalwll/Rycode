import { afterEach, describe, expect, it, vi } from "vitest";
import { generateKeyPairSync } from "node:crypto";
import {
  analyticsDetail,
  analyticsPath,
  campaignTag,
  insightBatchSchema,
} from "../../src/lib/insights";
import { searchConsoleReport } from "../../src/server/search-console";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("Site insights", () => {
  it("keeps public locale, service and article paths canonical", () => {
    expect(analyticsPath("/fa/about/")).toBe("/about");
    expect(analyticsPath("/en/services/software/windows-software/")).toBe(
      "/en/services/software/windows-software",
    );
    expect(analyticsPath("/blog/" + encodeURIComponent("راهنما"))).toBe(
      "/blog/راهنما",
    );
    for (const path of [
      "/admin",
      "/en/admin",
      "/api/health",
      "/blog/test?email=a",
      "/work/test%2Fsecret",
      "/work/%ZZ",
    ]) {
      expect(analyticsPath(path)).toBeNull();
    }
    expect(analyticsDetail("link_click", "header|/fa/contact/")).toBe(
      "header|/contact",
    );
    expect(analyticsDetail("link_click", "footer|/admin")).toBeNull();
  });

  it("rejects visitor identifiers and keeps campaign labels bounded", () => {
    const event = {
      name: "page_view",
      path: "/",
      context: { source: "telegram", campaign: "landing-a" },
    };
    expect(insightBatchSchema.safeParse({ events: [event] }).success).toBe(
      true,
    );
    expect(
      insightBatchSchema.safeParse({
        events: [{ ...event, context: { ...event.context, visitor: "test" } }],
      }).success,
    ).toBe(false);
    expect(campaignTag("Launch_A")).toBe("launch_a");
    expect(campaignTag("someone@example.com")).toBe("");
  });

  it("queries Search Console with read-only authorization and reuses the report", async () => {
    const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
    vi.stubEnv("SEARCH_CONSOLE_PROPERTY", "sc-domain:rycode-insights.example");
    vi.stubEnv(
      "GOOGLE_SEARCH_CONSOLE_CREDENTIALS",
      JSON.stringify({
        client_email: "insights@rycode-insights.example",
        private_key: privateKey.export({ type: "pkcs8", format: "pem" }),
      }),
    );
    const fetch = vi.fn(async (url: string, request: RequestInit) => {
      if (url === "https://oauth2.googleapis.com/token") {
        const assertion = (request.body as URLSearchParams).get("assertion")!;
        const payload = JSON.parse(
          Buffer.from(assertion.split(".")[1], "base64url").toString(),
        );
        expect(payload.scope).toBe(
          "https://www.googleapis.com/auth/webmasters.readonly",
        );
        return Response.json({ access_token: "test-token" });
      }
      expect(url).toContain(
        "/sc-domain%3Arycode-insights.example/searchAnalytics/query",
      );
      expect(new Headers(request.headers).get("authorization")).toBe(
        "Bearer test-token",
      );
      const { dimensions } = JSON.parse(String(request.body));
      return Response.json({
        rows: [
          {
            keys: dimensions,
            clicks: 2,
            impressions: 15,
            ctr: 2 / 15,
            position: 8,
          },
        ],
      });
    });
    vi.stubGlobal("fetch", fetch);
    const report = await searchConsoleReport();
    expect(report.state).toBe("connected");
    if (report.state === "connected") expect(report.queries[0].clicks).toBe(2);
    await searchConsoleReport();
    expect(fetch).toHaveBeenCalledTimes(4);
  });
});
