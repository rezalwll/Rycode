import { describe, expect, it } from "vitest";
import {
  listingPage,
  listingParams,
  listingHref,
} from "../../src/lib/listing-params";
import { contentRoute } from "../../src/lib/content-route";

describe("Public listing parameters", () => {
  it("accepts repeated parameters without passing arrays to the database", () => {
    expect(
      listingParams({
        q: [" first ", "second"],
        category: ["web", "other"],
        page: ["2", "3"],
      }),
    ).toEqual({ q: "first", category: "web", page: 2 });
  });
  it("bounds search input", () =>
    expect(listingParams({ q: "x".repeat(500) }).q).toHaveLength(100));
  it("always returns bounded integer page numbers", () => {
    for (const value of [
      undefined,
      null,
      "",
      "Infinity",
      "NaN",
      "wrong",
      -10,
      0,
    ])
      expect(listingPage(value)).toBe(1);
    expect(listingPage("2.9")).toBe(2);
    expect(listingPage(999999)).toBe(10000);
  });
  it("keeps project pagination on the work listing and encodes filters", () => {
    expect(listingHref("PROJECT", 2, { q: "", category: "" })).toBe(
      "/work?page=2",
    );
    const url = new URL(
      listingHref("ARTICLE", 2, { q: "a&b", category: "سایت" }),
      "http://test.local",
    );
    expect(url.pathname).toBe("/blog");
    expect(url.searchParams.get("q")).toBe("a&b");
    expect(url.searchParams.get("category")).toBe("سایت");
  });
});
describe("Managed public routes", () => {
  it("recognizes policy pages without inventing a pages parent", () => {
    expect(contentRoute("/privacy")).toEqual({
      kind: "PAGE",
      slug: "privacy",
      policy: true,
    });
    expect(contentRoute("/terms")?.kind).toBe("PAGE");
    expect(contentRoute("/pages/about")?.slug).toBe("about");
    expect(contentRoute("/contact")).toBeNull();
  });
});
