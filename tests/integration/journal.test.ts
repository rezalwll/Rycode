import { afterAll, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";
import { database } from "../../src/server/db";
import { blogListing } from "../../src/server/blog";
import {
  lookupContent,
  publishedSitemapRecords,
} from "../../src/server/content";
import { textDocument } from "../../src/lib/content-rules";
const enabled = process.env.RUN_INTEGRATION === "1";
if (
  enabled &&
  !/^rycode_(test|ci)/.test(
    new URL(process.env.DATABASE_URL || "").pathname.slice(1),
  )
)
  throw new Error("A dedicated test database is required");
const ids: string[] = [];
describe.skipIf(!enabled)("Developer journal publication and filtering", () => {
  afterAll(async () => {
    await database().content.deleteMany({ where: { id: { in: ids } } });
    await database().$disconnect();
  });
  it("combines a case-insensitive tag query and category, paginates and hides drafts", async () => {
    const category = "journal-test-" + randomUUID();
    for (let i = 0; i < 14; i++) {
      const record = await database().content.create({
        data: {
          kind: "ARTICLE",
          slug: category + i,
          category,
          tags: ["UniqueFrameworkTag"],
          status: i === 13 ? "DRAFT" : "PUBLISHED",
          publishedAt: new Date(),
          sample: true,
          featured: true,
          translations: {
            create: {
              locale: "fa",
              approved: true,
              title: "عنوان نمونه",
              summary: "خلاصهٔ مشخص",
              body: textDocument(
                "متن کافی برای بررسی رفتار جست‌وجوی دسته‌بندی و برچسب",
              ),
            },
          },
        },
      });
      ids.push(record.id);
    }
    const result = await blogListing("fa", { category, q: "frameworktag" });
    expect(result.total).toBe(13);
    expect(result.items).toHaveLength(12);
    expect((await blogListing("fa", { category, q: "مشخص" })).total).toBe(13);
    expect((await blogListing("fa", { category, q: "عنوان" })).total).toBe(13);
    expect(
      (await blogListing("fa", { category, q: "FRAMEWORKTAG", page: "2" }))
        .items,
    ).toHaveLength(1);
    expect(
      (await blogListing("fa", { category, q: "not-a-match" })).total,
    ).toBe(0);
    expect((await blogListing("en", { category })).total).toBe(0);
    const dto = (await lookupContent("ARTICLE", category + "0", "fa")).content!;
    expect(dto.featured).toBe(true);
    expect(dto.sample).toBe(true);
    expect(dto.noIndex).toBe(true);
    expect(
      (await publishedSitemapRecords()).some((r) => ids.includes(r.id)),
    ).toBe(false);
  });
});
