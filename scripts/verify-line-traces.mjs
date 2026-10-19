import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import { load } from "cheerio";

const base = process.env.VERIFY_URL || "http://127.0.0.1:3014";
const routes = JSON.parse(await readFile(".reference/routes.json", "utf8"));
let documents = 0;
let traces = 0;

for (const prefix of ["", "/fa"]) {
  for (const route of routes) {
    const path = prefix + (prefix && route === "/" ? "" : route);
    const response = await fetch(base + path);
    assert.equal(response.status, route === "/404" ? 404 : 200, path);
    const $ = load(await response.text());
    const segments = $("[data-line-trace]");
    const expected = ["/blog", "/404"].includes(route)
      ? 0
      : route === "/contact"
        ? 5
        : 4;
    assert.equal(segments.length, expected, `${path}: reference line coverage`);

    segments.each((_, element) => {
      const segment = $(element);
      assert.equal(segment.attr("aria-hidden"), "true", path);
      assert.equal(segment.children().length, 0, `${path}: decorative segment`);
      assert.match(segment.attr("data-line-trace"), /^[xy]$/, path);
      const track = segment.closest(
        '[data-framer-name^="Line"], [data-framer-name="Layer"]',
      );
      assert.equal(track.length, 1, `${path}: existing reference track`);
      assert.match(
        segment.attr("style"),
        /--trace-desktop:\d+px/,
        `${path}: loop travel configured`,
      );
      assert.ok(
        !/opacity:0|transform:none/.test(segment.attr("style")),
        `${path}: no frozen capture style`,
      );
    });
    if (expected) {
      assert.ok($("[data-line-trace=x]").length, `${path}: horizontal loop`);
      assert.ok($("[data-line-trace=y]").length, `${path}: vertical loop`);
    }
    documents++;
    traces += segments.length;
  }
}
console.log(
  `Verified ${documents} documents and ${traces} decorative line segments.`,
);
