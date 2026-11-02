import { describe, expect, it } from "vitest";
import { access } from "node:fs/promises";
import { businessGuides } from "../../src/content/business-guides";
import { services } from "../../src/content/services";
import { validateDocument, contentSchema } from "../../src/lib/content-rules";

describe("Business journal publication content", () => {
  it("covers every offered service with valid bilingual documents and local artwork", async () => {
    expect(new Set(businessGuides.map((guide) => guide.serviceId))).toEqual(
      new Set(services.map((service) => service.id)),
    );
    for (const guide of businessGuides) {
      await access(
        new URL(
          "../../public/brand/journal/business/" + guide.cover + ".png",
          import.meta.url,
        ),
      );
      for (const locale of ["fa", "en"] as const) {
        const translation = guide.translations[locale];
        const body = { type: "doc", content: translation.content };
        expect(validateDocument(body), guide.slug + "/" + locale).toBe(true);
        expect(
          translation.content.filter((node) => node.type === "heading").length,
        ).toBeGreaterThanOrEqual(3);
        expect(
          translation.content.some((node) => node.type === "codeBlock"),
        ).toBe(false);
        expect(
          contentSchema.safeParse({
            kind: "ARTICLE",
            slug: guide.slug,
            status: "PUBLISHED",
            serviceId: guide.serviceId,
            featuredImage: "/brand/journal/business/" + guide.cover + ".png",
            translations: (["fa", "en"] as const).map((language) => ({
              locale: language,
              approved: true,
              title: guide.translations[language].title,
              summary: guide.translations[language].summary,
              body: {
                type: "doc",
                content: guide.translations[language].content,
              },
            })),
          }).success,
          guide.slug + "/" + locale,
        ).toBe(true);
      }
    }
  });
});
