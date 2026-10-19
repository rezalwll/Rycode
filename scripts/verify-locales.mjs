import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { load } from "cheerio";

const base = process.env.VERIFY_URL || "http://127.0.0.1:3014";
const routes = JSON.parse(await readFile(".reference/routes.json", "utf8"));
const results = [];
for (const locale of ["en", "fa"]) {
  for (const route of [...routes, "/missing-test-page"]) {
    const path = locale === "en" ? `/en${route === "/" ? "" : route}` : route;
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
    $(".brand-logo").each((_, element) => {
      assert.equal(
        $(element).attr("dir"),
        "ltr",
        `${path}: Latin brand direction`,
      );
    });
    $(
      "a[href^='tel:'], input[type='email'], input[type='url'], input[type='tel']",
    ).each((_, element) => {
      assert.equal(
        $(element).attr("dir"),
        "ltr",
        `${path}: contact value direction`,
      );
    });
    $("input[type='text'], textarea").each((_, element) => {
      assert.equal(
        $(element).attr("dir"),
        locale === "fa" ? "rtl" : "ltr",
        `${path}: empty field and placeholder direction`,
      );
    });
    $("h2").each((_, element) => {
      if (/^\$[\d۰-۹,]+$/.test($(element).text().trim()))
        assert.equal($(element).attr("dir"), "ltr", `${path}: price direction`);
    });
    assert.ok($("header .language-switch").length, `${path}: language switch`);
    assert.equal(
      $("header .language-switch").first().attr("href"),
      locale === "fa" ? `/en${route === "/" ? "" : route}` : route,
      `${path}: switch destination`,
    );
    if (locale === "fa") {
      if (route === "/") {
        assert.match(
          $("main h1").text(),
          /RYCODE STUDIO/,
          `${path}: original brand heading`,
        );
      }
      assert.match(
        $("title").text(),
        /[\u0600-\u06ff]/,
        `${path}: localized title`,
      );
      $("a[href^='/']")
        .not(".language-switch")
        .each((_, element) => {
          const href = $(element).attr("href");
          assert.ok(
            !/^\/(fa|en)(?:$|[\/#?])/.test(href),
            `${path}: Persian link uses default route: ${href}`,
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
      assert.doesNotMatch(
        $("body").text(),
        /استودیو رایکد|رایکد استودیو/,
        `${path}: concise Persian brand references`,
      );
    }
    results.push({ path, status: response.status, title: $("title").text() });
  }
}
const legacy = await fetch(`${base}/fa/blog?preview=1`);
assert.equal(legacy.status, 200, "Legacy Persian URLs remain available");
assert.equal(
  load(await legacy.text())("html").attr("lang"),
  "fa",
  "Legacy URL stays Persian",
);
await writeFile(
  ".reference/locale-verification.json",
  JSON.stringify(results, null, 2),
);
console.log(
  `Verified ${results.length} documents: localized titles, language, direction, navigation and text coverage.`,
);
