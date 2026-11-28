import assert from "node:assert/strict";
import { load } from "cheerio";
import { businessGuides } from "../src/content/business-guides.ts";
import { localizedServicePath } from "../src/lib/service-routes.ts";
const base = process.env.VERIFY_URL || "http://127.0.0.1:3014";
let checks = 0;
async function page(path) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const $ = load(await response.text());
  assert.equal($("h1").length, 1, path + " heading");
  checks++;
  return $;
}
for (const prefix of ["", "/en"]) {
  const locale = prefix ? "en" : "fa";
  const $ = await page(prefix + "/blog");
  assert.equal($("#articles [data-blog-card]").length, 8);
  assert.equal(
    $(
      "main nav[aria-label='دسته‌بندی مقالات'], main nav[aria-label='Article categories']",
    ).length,
    0,
  );
  assert.doesNotMatch($("h1").text(), /برنامه‌نویسی|developer/i);
  assert.ok($("#featured-title").length);
  for (const guide of businessGuides) {
    const articlePath = prefix + "/blog/" + guide.slug;
    const coverPath = "/brand/journal/business/" + guide.cover + ".webp";
    const { title, summary, imageAlt } = guide.translations[locale];
    const cardCover = $(`#articles a[href='${articlePath}'] img`);
    assert.equal(cardCover.attr("src"), coverPath);
    assert.equal(cardCover.attr("alt"), imageAlt);
    const article = await page(articlePath);
    assert.equal(article("h1").text(), title);
    const articleCover = article(`main figure img[src='${coverPath}']`);
    assert.equal(articleCover.attr("alt"), imageAlt);
    assert.ok(
      article("main header p")
        .toArray()
        .some((p) => article(p).text() === summary),
    );
    assert.equal(article("#article-content pre").length, 0);
    assert.ok(article("#article-content h2").length >= 3);
    assert.ok(
      article(
        "main a[href='" + prefix + "/contact?service=" + guide.serviceId + "']",
      ).length,
    );
    const servicePath = localizedServicePath(
      "/services/" + guide.serviceId,
      locale,
    );
    assert.ok(article(`main a[href='${prefix}${servicePath}']`).length);
    assert.ok(article("#comments #comment-form").length);
    assert.ok(
      article("script[type='application/ld+json']")
        .toArray()
        .some((element) => article(element).text().includes('"BlogPosting"')),
    );
    assert.ok(
      article("meta[property='og:image']").attr("content").endsWith(coverPath),
    );
    assert.equal(article("main a[href*='category=']").length, 0);
  }
}
const search = await page("/blog?q=" + encodeURIComponent("وردپرس"));
assert.equal(search("#articles [data-blog-card]").length, 1);
assert.match(search("meta[name='robots']").attr("content"), /noindex/);
const empty = await page("/blog?q=nonexistent-rycode-guide-test");
assert.equal(empty("#articles [data-blog-card]").length, 0);
const home = await page("/");
assert.equal(home("#blog-preview [data-blog-card]").length, 3);
assert.ok(
  home("#blog-preview a[href*='/blog/']")
    .toArray()
    .every((element) =>
      businessGuides.some((guide) =>
        home(element).attr("href").endsWith(guide.slug),
      ),
    ),
);
for (const guide of businessGuides) {
  assert.equal(
    (
      await fetch(base + "/brand/journal/business/" + guide.cover + ".webp", {
        method: "HEAD",
      })
    ).status,
    200,
  );
}
assert.equal(
  (await fetch(base + "/blog/sample-javascript-async-await")).status,
  404,
);
console.log(
  `Passed ${checks} bilingual business-journal pages, search, inquiry paths, comments, SEO and homepage checks.`,
);
