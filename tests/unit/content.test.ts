import { describe, it, expect } from "vitest";
import {
  contentSchema,
  leadSchema,
  normalizeDigits,
  normalizeSlug,
  safeLink,
  textDocument,
  validateDocument,
} from "../../src/lib/content-rules";
import { safeInternalPath } from "../../src/server/security";
const article = {
  kind: "ARTICLE",
  slug: "نمونه مقاله",
  status: "PUBLISHED",
  featuredImage: "/assets/example.png",
  translations: [
    {
      locale: "fa",
      approved: true,
      title: "مقالهٔ نمونه",
      summary: "خلاصهٔ مقالهٔ نمونه",
      body: textDocument(
        "این یک متن فارسی کامل برای بررسی انتشار یک مقالهٔ مستقل است.",
      ),
    },
  ],
};
describe("Publishing boundaries", () => {
  it("publishes approved Persian without requiring English", () =>
    expect(contentSchema.safeParse(article).success).toBe(true));
  it("does not publish an unapproved Persian draft", () =>
    expect(
      contentSchema.safeParse({
        ...article,
        translations: [{ ...article.translations[0], approved: false }],
      }).success,
    ).toBe(false));
  it("requires a featured image for public articles", () =>
    expect(
      contentSchema.safeParse({ ...article, featuredImage: undefined }).success,
    ).toBe(false));
  it("allows drafts without a featured image", () =>
    expect(
      contentSchema.safeParse({
        ...article,
        status: "DRAFT",
        featuredImage: undefined,
      }).success,
    ).toBe(true));
  it("rejects duplicate locale records", () =>
    expect(
      contentSchema.safeParse({
        ...article,
        translations: [...article.translations, ...article.translations],
      }).success,
    ).toBe(false));
  it("requires a future scheduled publication time", () =>
    expect(
      contentSchema.safeParse({
        ...article,
        status: "SCHEDULED",
        scheduledAt: new Date(0).toISOString(),
      }).success,
    ).toBe(false));
  it("rejects script links and arbitrary image locations", () => {
    expect(
      validateDocument({
        type: "doc",
        content: [
          {
            type: "text",
            text: "link",
            marks: [{ type: "link", attrs: { href: "javascript:alert(1)" } }],
          },
        ],
      }),
    ).toBe(false);
    expect(
      validateDocument({
        type: "doc",
        content: [
          { type: "image", attrs: { src: "https://tracker.invalid/pixel" } },
        ],
      }),
    ).toBe(false);
  });
  it("keeps headings, lists, formatting and safe links", () =>
    expect(
      validateDocument({
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 2 },
            content: [
              { type: "text", text: "نمونه", marks: [{ type: "bold" }] },
            ],
          },
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "لینک",
                marks: [{ type: "link", attrs: { href: "/services/build" } }],
              },
            ],
          },
        ],
      }),
    ).toBe(true));
  it("bounds document depth", () => {
    let node: unknown = { type: "text", text: "x" };
    for (let i = 0; i < 30; i++) node = { type: "paragraph", content: [node] };
    expect(validateDocument({ type: "doc", content: [node] })).toBe(false);
  });
  it("normalizes Unicode slugs and Persian/Arabic digits", () => {
    expect(normalizeSlug("  ساخت_سایت  ")).toBe("ساخت-سایت");
    expect(normalizeDigits("۰۹۹۸١٢٢۲۰۲۲")).toBe("09981222022");
  });
});
describe("Lead validation", () => {
  const lead = {
    name: "نام نمونه",
    email: "",
    phone: "۰۹۹۸ - ۱۲۲ - ۲۰۲۲",
    message: "درخواست بررسی یک پروژهٔ نمونه",
    locale: "fa",
    sourcePath: "/contact",
    requestKey: "2e244d2e-28d6-4dc3-aa5d-294d806608e8",
    startedAt: Date.now() - 3000,
  };
  it("accepts a phone-only inquiry and normalizes its digits", () => {
    const result = leadSchema.parse(lead);
    expect(result.phone).toBe("09981222022");
  });
  it("requires a way to reply", () =>
    expect(
      leadSchema.safeParse({ ...lead, phone: "", email: "" }).success,
    ).toBe(false));
  it("rejects oversized messages", () =>
    expect(
      leadSchema.safeParse({ ...lead, message: "a".repeat(5001) }).success,
    ).toBe(false));
  it("rejects an invalid email or request key", () => {
    expect(leadSchema.safeParse({ ...lead, email: "wrong" }).success).toBe(
      false,
    );
    expect(leadSchema.safeParse({ ...lead, requestKey: "same" }).success).toBe(
      false,
    );
  });
});
describe("URL safety", () => {
  it("normalizes Persian redirect paths to the browser's encoded pathname", () =>
    expect(safeInternalPath("/blog/ساخت-سایت")).toBe(
      "/blog/" + encodeURIComponent("ساخت-سایت"),
    ));
  for (const path of [
    "https://evil.invalid",
    "//evil.invalid",
    "/\\evil.invalid",
    "/a\nheader",
    "/%5cevil.invalid",
  ])
    it("rejects unsafe redirect " + JSON.stringify(path), () =>
      expect(() => safeInternalPath(path)).toThrow(),
    );
  it("permits internal paths with deliberate query parameters", () =>
    expect(safeInternalPath("/services/build?source=old")).toBe(
      "/services/build?source=old",
    ));
  it("rejects unsafe links", () => {
    expect(safeLink("data:text/html,x")).toBe(false);
    expect(safeLink("javascript:x")).toBe(false);
    expect(safeLink("/contact")).toBe(true);
  });
});
