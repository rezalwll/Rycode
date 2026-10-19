import { Fragment, createElement, type ReactNode } from "react";
import { safeLink, type RichNode } from "@/lib/content-rules";
import styles from "./Content.module.css";
function render(node: RichNode, index: number): ReactNode {
  const children = node.content?.map(render);
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
      { key: index, id: "heading-" + index },
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
export function RichContent({ document }: { document: RichNode }) {
  return <div className={styles.rich}>{render(document, 0)}</div>;
}
