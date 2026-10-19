import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";

const base = process.env.VERIFY_URL || "http://127.0.0.1:3014";
const { projects } = JSON.parse(
  await readFile("scripts/fixtures/project-reference.json", "utf8"),
);
const normalize = (text) => text.replace(/\s+/g, " ").trim();
let documents = 0;

for (const prefix of ["", "/en"]) {
  for (const project of projects) {
    const path = prefix + project.route;
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    const $ = load(await response.text());
    const section = $('[data-framer-name="Details Section"]');
    assert.equal(section.length, 1, `${path}: details section`);
    assert.equal(
      $("html").attr("lang"),
      prefix ? "en" : "fa",
      `${path}: locale`,
    );
    assert.deepEqual(
      section
        .find(".framer-11w6e86 img")
        .toArray()
        .map((e) => $(e).attr("src")),
      project.images.map((image) => image.local),
      `${path}: the four reference gallery images in source order`,
    );
    assert.equal(
      $("[data-tone]").attr("data-tone"),
      "dark",
      `${path}: dark project ticker`,
    );
    assert.equal(
      section
        .find("a")
        .filter((_, e) =>
          $(e)
            .text()
            .includes(prefix ? "View All Work" : "همهٔ پروژه‌ها"),
        )
        .attr("href"),
      `${prefix}/work`,
      `${path}: working back link in the selected language`,
    );
    if (prefix) {
      assert.equal(
        normalize(section.find("h2").first().text()),
        project.title,
        path,
      );
      assert.equal(
        normalize(section.find(".framer-1ps20o6").text()),
        normalize(project.description),
        path,
      );
      assert.deepEqual(
        [".framer-dw2jep", ".framer-773cuu", ".framer-s7u1u1"].map((s) =>
          section.find(s).first().text(),
        ),
        project.metadata,
        `${path}: year, client and industry match the reference`,
      );
    } else {
      assert.match(section.find("h2").first().text(), /[آ-ی]/, path);
      assert.equal(
        section.find(".framer-dw2jep").first().text(),
        project.metadata[0].replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]),
        path,
      );
    }
    documents++;
  }
  const $ = load(await (await fetch(`${base}${prefix}/work`)).text());
  const links = $('[data-framer-name="Work Section"] > div a[href]')
    .toArray()
    .map((e) => $(e).attr("href"));
  assert.deepEqual(
    links,
    projects.map((p) => prefix + p.route),
    `${prefix}/work: six project destinations`,
  );
  assert.equal($("[data-tone]").attr("data-tone"), "dark");
  documents++;
}
console.log(
  `Verified ${documents} localized Work/project pages against the reference content and 48 gallery images.`,
);
