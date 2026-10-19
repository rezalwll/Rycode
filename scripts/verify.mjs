import { readFile, writeFile, readdir } from "node:fs/promises";
import { load } from "cheerio";
const base = process.env.VERIFY_URL || "http://127.0.0.1:3014";
const referenceRoutes = JSON.parse(
  await readFile(".reference/routes.json", "utf8"),
);
const routes = [
  ...referenceRoutes,
  ...referenceRoutes.map((route) => "/en" + (route === "/" ? "" : route)),
  ...["/services", "/privacy", "/terms", ...["build","grow","software","rescue","connect","data","continue"].map(id=>"/services/"+id)].flatMap(route=>[route,"/en"+route]),
  "/this-page-does-not-exist",
  "/en/this-page-does-not-exist",
];
const results = [],
  errors = [],
  assets = new Set(),
  links = new Set(),
  documents = new Map();
for (const asset of JSON.parse(
  await readFile(".reference/assets.json", "utf8"),
))
  assets.add(asset.local);
for (const route of routes) {
  const response = await fetch(base + route);
  const html = await response.text();
  const $ = load(html);
  const expected = /\/(404|this-page-does-not-exist)$/.test(route) ? 404 : 200;
  if (response.status !== expected)
    errors.push(`${route}: HTTP ${response.status}`);
  if (!$("body").text().trim()) errors.push(`${route}: empty page`);
  if (
    $("img,video,source")
      .toArray()
      .some((e) => /^https?:/.test($(e).attr("src") || ""))
  )
    errors.push(`${route}: remote media source`);
  if (
    $("script[src]")
      .toArray()
      .some((e) => !$(e).attr("src").startsWith("/_next/"))
  )
    errors.push(`${route}: non-local runtime`);
  $("a[href]").each((_, e) => {
    const href = $(e).attr("href");
    if (href.startsWith("/")) links.add(href);
  });
  $("[src]").each((_, e) => {
    const src = $(e).attr("src");
    if (src.startsWith("/assets/")) assets.add(src);
  });
  documents.set(route, $);
  results.push({
    route,
    status: response.status,
    title: $("title").text(),
    images: $("img").length,
  });
}
for (const href of links) {
  const u = new URL(href, base);
  if (!routes.includes(u.pathname)) errors.push(`Unimplemented link: ${href}`);
  if (u.hash) {
    const $ = documents.get(u.pathname);
    const id = decodeURIComponent(u.hash.slice(1));
    if (
      $ &&
      !$("[id]")
        .toArray()
        .some((e) => $(e).attr("id") === id)
    )
      errors.push(`Missing anchor: ${href}`);
  }
}
for (const asset of assets) {
  const response = await fetch(base + asset, { method: "HEAD" });
  if (!response.ok) errors.push(`${asset}: HTTP ${response.status}`);
}
async function files(dir) {
  const output = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === "generated") continue;
    const path = dir + "/" + entry.name;
    output.push(...(entry.isDirectory() ? await files(path) : [path]));
  }
  return output;
}
for (const path of await files("src")) {
  const source = await readFile(path, "utf8");
  const safeJsonLd = ["src/components/StructuredData.tsx", "src/components/content/ContentDetail.tsx"].includes(path) && source.includes('type="application/ld+json"') && source.includes("jsonLd(");
  if ((source.includes("dangerouslySetInnerHTML") && !safeJsonLd) || /<iframe|eval\(/.test(source))
    errors.push(`Unacceptable runtime markup: ${path}`);
}
const result = {
  checkedAt: new Date().toISOString(),
  base,
  routes: results,
  localAssetsChecked: assets.size,
  internalLinksChecked: links.size,
  errors,
};
await writeFile(
  ".reference/technical-verification.json",
  JSON.stringify(result, null, 2),
);
console.log(
  JSON.stringify(
    { routes: results.length, assets: assets.size, links: links.size, errors },
    null,
    2,
  ),
);
if (errors.length) process.exitCode = 1;
