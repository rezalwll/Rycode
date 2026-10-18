import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { load } from "cheerio";

const base = process.env.VERIFY_URL || "http://127.0.0.1:3014";
const routes = JSON.parse(await readFile(".reference/routes.json", "utf8"));
const results = [];
for (const locale of ["en", "fa"]) {
  for (const route of [...routes, "/missing-test-page"]) {
    const path = locale === "fa" ? `/fa${route === "/" ? "" : route}` : route;
    const response = await fetch(base + path);
    const $ = load(await response.text());
    const expected =
      route === "/404" || route === "/missing-test-page" ? 404 : 200;
    assert.equal(response.status, expected, `${path}: status`);
    assert.equal($("html").attr("lang"), locale, `${path}: lang`);
    assert.equal(
      $("html").attr("dir"),
      locale === "fa" ? "rtl" : "ltr",
      `${path}: dir`,
    );
    assert.ok($("header .language-switch").length, `${path}: language switch`);
    if (locale === "fa") {
      assert.match(
        $("title").text(),
        /[\u0600-\u06ff]/,
        `${path}: localized title`,
      );
      $("a[href^='/']")
        .not(".language-switch")
        .each((_, element) => {
          assert.match(
            $(element).attr("href"),
            /^\/fa(?:$|[\/#?])/,
            `${path}: locale-preserving link`,
          );
        });
      $(".framer-text").each((_, element) => {
        const value = $(element).text().trim();
        if (
          /^[\s\w]*ry(?:code)?(?:\s*studio)?$/i.test(value) ||
          /^(code(?: studio)?|studio)$/i.test(value)
        )
          return;
        assert.ok(
          !/[A-Za-z]{3}/.test(value),
          `${path}: untranslated text: ${value}`,
        );
      });
    }
    results.push({ path, status: response.status, title: $("title").text() });
  }
}
await writeFile(
  ".reference/locale-verification.json",
  JSON.stringify(results, null, 2),
);
console.log(
  `Verified ${results.length} documents: localized titles, language, direction, navigation and text coverage.`,
);
