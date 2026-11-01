import type { RichNode } from "./content-rules";

/** Code whitespace is content, rather than a separator between rich text nodes. */
export function codeText(node: RichNode): string {
  if (node.type === "hardBreak") return "\n";
  return (node.text || "") + (node.content || []).map(codeText).join("");
}
export function headingId(path: number[]) {
  return "heading-" + path.join("-");
}
export function articleHeadings(document: RichNode) {
  const headings: { id: string; title: string; level: number }[] = [];
  const visit = (node: RichNode, path: number[]) => {
    if (node.type === "heading") {
      const level = Math.max(2, Math.min(4, Number(node.attrs?.level) || 2));
      if (level <= 3)
        headings.push({ id: headingId(path), title: codeText(node), level });
    }
    node.content?.forEach((child, i) => visit(child, [...path, i]));
  };
  visit(document, []);
  return headings;
}
export function articleReadingTime(document: RichNode) {
  let words = 0;
  let codeLines = 0;
  const visit = (node: RichNode) => {
    if (node.type === "codeBlock") {
      codeLines += codeText(node).split("\n").length;
      return;
    }
    words += (node.text || "").trim().split(/\s+/u).filter(Boolean).length;
    node.content?.forEach(visit);
  };
  visit(document);
  return Math.max(1, Math.ceil(words / 220 + codeLines / 25));
}
export function articleDate(date: string, locale: "fa" | "en") {
  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
export function searchText(value: string) {
  return value
    .normalize("NFKC")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .toLocaleLowerCase()
    .trim();
}
