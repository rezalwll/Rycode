import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import sql from "highlight.js/lib/languages/sql";
import { CopyButton } from "./CopyButton";
import styles from "./Reader.module.css";

for (const [name, language] of Object.entries({
  javascript,
  typescript,
  python,
  bash,
  json,
  css,
  xml,
  sql,
}))
  hljs.registerLanguage(name, language);
const aliases: Record<string, string> = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  py: "python",
  sh: "bash",
  shell: "bash",
  html: "xml",
  plaintext: "text",
  txt: "text",
};
export function CodeBlock({
  code,
  language = "text",
  fa,
}: {
  code: string;
  language?: string;
  fa: boolean;
}) {
  const normalized = aliases[language.toLowerCase()] || language.toLowerCase();
  const supported = hljs.getLanguage(normalized);
  // Only highlight.js's escaped output enters HTML; unknown languages remain React text.
  const html =
    supported && code.length <= 100000
      ? hljs.highlight(code, {
          language: normalized,
          ignoreIllegals: true,
        }).value
      : null;
  return (
    <figure className={styles.code} dir="ltr">
      <figcaption>
        <span className={styles.language}>{language || "text"}</span>
        <CopyButton text={code} fa={fa} className={styles.copy} />
      </figcaption>
      <pre
        className={styles.pre}
        tabIndex={0}
        aria-label={(fa ? "کد " : "Code: ") + language}
        data-lenis-prevent
      >
        {html !== null ? (
          <code className="hljs" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <code>{code}</code>
        )}
      </pre>
    </figure>
  );
}
