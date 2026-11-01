import { describe, expect, it } from "vitest";
import {
  articleHeadings,
  articleReadingTime,
  codeText,
  searchText,
} from "../../src/lib/article";
import { validateDocument, contentSchema } from "../../src/lib/content-rules";
import { journalSamples } from "../../src/content/journal-samples";
describe("Developer article documents", () => {
  it("preserves newlines, tabs and indentation when text nodes are split", () => {
    expect(
      codeText({
        type: "codeBlock",
        content: [
          { type: "text", text: "if (ready) {\n\t" },
          { type: "text", text: "run();" },
          { type: "hardBreak" },
          { type: "text", text: "}" },
        ],
      }),
    ).toBe("if (ready) {\n\trun();\n}");
  });
  it("creates unique TOC anchors for nested H2/H3 and ignores H4", () => {
    const headings = articleHeadings({
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "مقدمه" }],
        },
        {
          type: "blockquote",
          content: [
            {
              type: "heading",
              attrs: { level: 3 },
              content: [{ type: "text", text: "جزئیات" }],
            },
          ],
        },
        { type: "heading", attrs: { level: 4 } },
      ],
    });
    expect(headings.map((h) => h.id)).toEqual(["heading-0", "heading-1-0"]);
    expect(headings.map((h) => h.level)).toEqual([2, 3]);
  });
  it("estimates reading time from prose and code, without counting JSON attributes", () => {
    expect(
      articleReadingTime({
        type: "doc",
        attrs: { metadata: "x ".repeat(1000) },
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "word ".repeat(220) }],
          },
        ],
      }),
    ).toBe(1);
    expect(
      articleReadingTime({
        type: "doc",
        content: [
          {
            type: "codeBlock",
            content: [{ type: "text", text: "line\n".repeat(49) }],
          },
        ],
      }),
    ).toBe(2);
  });
  it("normalizes Persian and case variations in tags", () =>
    expect(searchText("  REACT كد ي  ")).toBe("react کد ی"));
  it("validates all demo documents, including tables and code languages", () => {
    for (const sample of journalSamples) {
      expect(validateDocument(sample.body), sample.slug).toBe(true);
      expect(
        contentSchema.safeParse({
          kind: "ARTICLE",
          slug: sample.slug,
          status: "PUBLISHED",
          featuredImage: "/brand/journal/" + sample.cover + ".svg",
          sample: true,
          featured: true,
          translations: [
            {
              locale: "fa",
              approved: true,
              title: sample.title,
              summary: sample.summary,
              body: sample.body,
            },
          ],
        }).success,
      ).toBe(true);
    }
  });
});
