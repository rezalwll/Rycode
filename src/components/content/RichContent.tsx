import { Fragment, createElement, type ReactNode } from "react";
import { safeLink, type RichNode } from "@/lib/content-rules";
import styles from "./Content.module.css";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { codeText, headingId } from "@/lib/article";
import journal from "@/components/blog/Journal.module.css";
function render(
  node: RichNode,
  index: number,
  path: number[],
  technical: boolean,
  fa: boolean,
): ReactNode {
  const children = node.content?.map((child, i) =>
    render(child, i, [...path, i], technical, fa),
  );
  if (node.type === "text") {
    let text: ReactNode = node.text || "";
    for (const [i, mark] of (node.marks || []).entries()) {
      if (
        mark.type === "link" &&
        typeof mark.attrs?.href === "string" &&
        safeLink(mark.attrs.href)
      )
        text = (
          <a key={i} href={mark.attrs.href} rel="noopener noreferrer">
            {text}
          </a>
        );
      else if (
        ["bold", "italic", "strike", "code", "underline"].includes(mark.type)
      )
        text = createElement(
          (
            {
              bold: "strong",
              italic: "em",
              strike: "s",
              code: "code",
              underline: "u",
            } as Record<string, string>
          )[mark.type],
          { key: i },
          text,
        );
    }
    return <Fragment key={index}>{text}</Fragment>;
  }
  if (
    node.type === "image" &&
    typeof node.attrs?.src === "string" &&
    /^\/(media|assets|brand)\//.test(node.attrs.src)
  )
    return (
      <img
        key={index}
        src={node.attrs.src}
        alt={String(node.attrs.alt || "")}
        loading="lazy"
      />
    );
  if (node.type === "hardBreak") return <br key={index} />;
  if (node.type === "horizontalRule") return <hr key={index} />;
  if (node.type === "heading") {
    const level = Math.max(2, Math.min(4, Number(node.attrs?.level) || 2));
    return createElement(
      "h" + level,
      { key: index, id: headingId(path) },
      children,
    );
  }
  if (node.type === "codeBlock")
    return technical ? (
      <CodeBlock
        key={index}
        code={codeText(node)}
        language={String(node.attrs?.language || "text")}
        fa={fa}
      />
    ) : (
      <pre key={index} dir="ltr">
        <code>{codeText(node)}</code>
      </pre>
    );
  if (node.type === "table")
    return (
      <div
        key={index}
        className={journal.tableScroll}
        tabIndex={0}
        role="region"
        aria-label={fa ? "جدول مقاله" : "Article table"}
        data-lenis-prevent
      >
        <table>
          <tbody>{children}</tbody>
        </table>
      </div>
    );
  if (node.type === "tableRow") return <tr key={index}>{children}</tr>;
  if (["tableHeader", "tableCell"].includes(node.type)) {
    const span = (value: unknown) =>
      Math.max(1, Math.min(20, Number(value) || 1));
    return createElement(
      node.type === "tableHeader" ? "th" : "td",
      {
        key: index,
        colSpan: span(node.attrs?.colspan),
        rowSpan: span(node.attrs?.rowspan),
        ...(node.type === "tableHeader" ? { scope: "col" } : {}),
      },
      children,
    );
  }
  const tags: Record<string, string> = {
    paragraph: "p",
    bulletList: "ul",
    orderedList: "ol",
    listItem: "li",
    blockquote: "blockquote",
    codeBlock: "pre",
  };
  if (node.type === "doc") return <Fragment key={index}>{children}</Fragment>;
  return createElement(tags[node.type] || "div", { key: index }, children);
}
export function RichContent({
  document,
  technical = false,
  locale = "fa",
}: {
  document: RichNode;
  technical?: boolean;
  locale?: "fa" | "en";
}) {
  return (
    <div className={styles.rich}>
      {render(document, 0, [], technical, locale === "fa")}
    </div>
  );
}
