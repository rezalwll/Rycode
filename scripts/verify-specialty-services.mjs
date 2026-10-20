import assert from "node:assert/strict";
import { load } from "cheerio";
import { specialtyServices } from "../src/content/specialty-services.ts";

export async function verifySpecialtyServices(base) {
  const sitemap = load(await (await fetch(base + "/sitemap.xml")).text(), {
    xml: true,
  });
  const sitemapUrls = new Set(
    sitemap("loc")
      .toArray()
      .map((node) => sitemap(node).text()),
  );
  const catalog = load(await (await fetch(base + "/services")).text());
  const serviceLinks = catalog("main a[href^='/services/']")
    .toArray()
    .map((node) => catalog(node).attr("href"));
  assert.equal(
    serviceLinks.length,
    7,
    "specialties do not inflate the seven top-level groups",
  );
  const titles = new Set(),
    descriptions = new Set();
  for (const service of specialtyServices) {
    const path = "/services/" + service.slug;
    const page = await fetch(base + path);
    assert.equal(page.status, 200, path);
    const $ = load(await page.text());
    assert.equal($("html").attr("lang"), "fa");
    assert.equal($("html").attr("dir"), "rtl");
    assert.equal($("main h1").length, 1);
    assert.equal($("main h1").text(), service.title);
    assert.ok($("title").text().includes(service.seoTitle));
    assert.equal(
      $("meta[name='description']").attr("content"),
      service.seoDescription,
    );
    titles.add($("title").text());
    descriptions.add(service.seoDescription);
    assert.equal($("link[rel='canonical']").attr("href"), base + path);
    assert.equal(
      $("link[hreflang='en'], a.language-switch").length,
      0,
      "no unapproved English translation",
    );
    assert.equal(
      $("[aria-label='مسیر صفحه'] a[href='/services/" + service.parent + "']")
        .length,
      1,
      "parent breadcrumb",
    );
    assert.ok(
      $("a[href='/contact?service=" + service.slug + "']").length > 0,
      "inquiry keeps the exact specialty",
    );
    assert.equal(
      $("section[aria-labelledby='faq'] details summary").length,
      service.faqs.length,
      "visible FAQ set",
    );
    for (const section of service.sections)
      assert.ok(
        $("article h2")
          .toArray()
          .some((node) => $(node).text() === section.title),
        section.title,
      );
    for (const node of $("nav a[href^='#']").toArray()) {
      const target = $(node).attr("href").slice(1);
      assert.equal(
        $("[id]")
          .toArray()
          .some((item) => $(item).attr("id") === target),
        true,
        "working table-of-contents anchor",
      );
    }
    const graphs = $("script[type='application/ld+json']")
      .toArray()
      .flatMap((node) => {
        const json = JSON.parse($(node).text());
        return json["@graph"] || [json];
      });
    const schema = graphs.find((node) => node["@type"] === "Service");
    assert.equal(schema?.name, service.title);
    assert.equal(schema.provider.name, "RYCODE");
    const faq = graphs.find((node) => node["@type"] === "FAQPage");
    assert.deepEqual(
      faq?.mainEntity.map((item) => ({
        question: item.name,
        answer: item.acceptedAnswer.text,
      })),
      service.faqs,
    );
    const breadcrumb = graphs.find(
      (node) => node["@type"] === "BreadcrumbList",
    );
    assert.equal(
      breadcrumb.itemListElement.at(-2).item,
      base + "/services/" + service.parent,
    );
    assert.ok(sitemapUrls.has(base + path));
    assert.ok(!sitemapUrls.has(base + "/en" + path));
    const english = await fetch(base + "/en" + path);
    assert.equal(english.status, 404);
    assert.equal(load(await english.text())("html").attr("lang"), "en");
    const parent = load(
      await (await fetch(base + "/services/" + service.parent)).text(),
    );
    assert.equal(
      parent("#specialty-services-title").text(),
      "خدمات تخصصی این بخش",
    );
    assert.ok(
      parent("a[href='" + path + "']").length > 0,
      "specialty discoverable from parent",
    );
    const englishParent = load(
      await (await fetch(base + "/en/services/" + service.parent)).text(),
    );
    assert.equal(englishParent("a[href='/en" + path + "']").length, 0);
  }
  assert.equal(titles.size, specialtyServices.length);
  assert.equal(descriptions.size, specialtyServices.length);
  console.log(
    "PASS: four distinct Persian specialties, seven parent groups, metadata, breadcrumbs, visible FAQ schema, inquiry context, anchors and locale-aware discovery.",
  );
}
