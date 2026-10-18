// One-time migration of the captured JSX, using the TypeScript parser so CSS,
// media URLs, SVG symbols and animation variants are preserved byte-for-byte.
import ts from "typescript";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const files = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? files(`${dir}/${entry.name}`)
      : [`${dir}/${entry.name}`],
  );
const text = (node) => {
  if (ts.isJsxText(node))
    return node.text.includes("\n") ? node.text.trim() : node.text;
  if (
    ts.isJsxExpression(node) &&
    node.expression &&
    ts.isStringLiteral(node.expression)
  )
    return node.expression.text;
  if (ts.isJsxElement(node)) return node.children.map(text).join("");
  return "";
};

for (const file of files("src").filter((file) => file.endsWith(".tsx"))) {
  const source = readFileSync(file, "utf8");
  if (
    source.startsWith('"use client"') ||
    source.includes("getTranslations") ||
    file.endsWith("layout.tsx")
  )
    continue;
  const root = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const edits = [],
    bindings = new Set();
  const replace = (node, value) =>
    edits.push([node.getStart(root), node.end, value]);
  const visit = (node) => {
    if (
      ts.isJsxElement(node) &&
      node.openingElement.tagName.getText(root) === "SplitText"
    ) {
      const message = text(node).replace(/\s+/g, " ").trim();
      bindings.add("t");
      bindings.add("locale");
      edits.push([
        node.openingElement.end - 1,
        node.openingElement.end - 1,
        ` localizedText={locale === "fa" ? t(${JSON.stringify(message)}) : undefined}`,
      ]);
      return;
    }
    if (
      ts.isJsxAttribute(node) &&
      node.initializer &&
      ts.isStringLiteral(node.initializer)
    ) {
      const name = node.name.getText(root),
        value = node.initializer.text;
      if (name === "href" && value.startsWith("/") && !value.startsWith("//")) {
        bindings.add("href");
        replace(node.initializer, `{href(${JSON.stringify(value)})}`);
      } else if (
        /^(alt|aria-label|placeholder|title|label)$/.test(name) &&
        /[a-zA-Z]/.test(value)
      ) {
        bindings.add("t");
        replace(node.initializer, `{t(${JSON.stringify(value)})}`);
      }
      return;
    }
    if (
      ts.isJsxExpression(node) &&
      node.expression &&
      ts.isStringLiteral(node.expression) &&
      !ts.isJsxAttribute(node.parent) &&
      /[a-zA-Z0-9]/.test(node.expression.text)
    ) {
      bindings.add("t");
      replace(node.expression, `t(${JSON.stringify(node.expression.text)})`);
      return;
    }
    if (ts.isJsxText(node) && node.text.trim()) {
      bindings.add("t");
      replace(
        node,
        `{t(${JSON.stringify(node.text.replace(/\s+/g, " ").trim())})}`,
      );
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(root);
  if (!edits.length) continue;
  const component = root.statements.find(
    (node) => ts.isFunctionDeclaration(node) && node.body,
  );
  if (!component) throw new Error(`No component: ${file}`);
  edits.push([
    component.body.getStart(root) + 1,
    component.body.getStart(root) + 1,
    `\n  const { ${[...bindings].join(", ")} } = await getTranslations();`,
  ]);
  const functionStart = source.indexOf("function", component.getStart(root));
  edits.push([functionStart, functionStart, "async "]);
  let output = source;
  for (const [start, end, value] of edits.sort((a, b) => b[0] - a[0]))
    output = output.slice(0, start) + value + output.slice(end);
  writeFileSync(
    file,
    'import { getTranslations } from "@/lib/i18n-server";\n' + output,
  );
  console.log(file);
}
