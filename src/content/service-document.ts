import details from "./service-details.json";
import type { Locale } from "@/lib/i18n";
import { textDocument, type RichNode } from "@/lib/content-rules";
export function serviceDocument(
  id: string,
  scope: string,
  locale: Locale,
): RichNode {
  const sections = details.find((service) => service.id === id)?.sections || [];
  const nodes: RichNode[] = sections.length
    ? []
    : textDocument(scope).content || [];
  for (const section of sections) {
    if (section.title?.[locale])
      nodes.push({
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: section.title[locale] }],
      });
    if ("body" in section && section.body?.[locale])
      nodes.push(...(textDocument(section.body[locale]).content || []));
    if ("items" in section && section.items?.length)
      nodes.push({
        type: "bulletList",
        content: section.items.map((item) => ({
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: item[locale] }],
            },
          ],
        })),
      });
  }
  return { type: "doc", content: nodes };
}
