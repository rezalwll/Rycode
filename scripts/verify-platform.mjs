import assert from "node:assert/strict";
import { randomUUID, randomBytes, createHmac, createHash } from "node:crypto";
import { unlink, readdir, mkdir, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import pg from "pg";
import nextEnv from "@next/env";
import { hashPassword } from "better-auth/crypto";
import sharp from "sharp";
import { load } from "cheerio";
import { verifySpecialtyServices } from "./verify-specialty-services.mjs";
nextEnv.loadEnvConfig(process.cwd());
const base = process.env.VERIFY_URL || "http://127.0.0.1:3014";
await verifySpecialtyServices(base);
for (const [path, status, type] of [
  ["/sitemap.xml", 200, "xml"],
  ["/robots.txt", 200, "text/plain"],
  ["/missing.css", 404, "text/html"],
  ["/services", 200, "text/html"],
  ["/admin/login", 200, "text/html"],
]) {
  const response = await fetch(base + path, { redirect: "manual" });
  assert.equal(response.status, status, path);
  assert.ok(
    response.headers.get("content-type")?.includes(type),
    path + " content type",
  );
}
const canonical = await fetch(base + "/fa/contact?source=test", {
  redirect: "manual",
});
assert.equal(canonical.status, 308);
assert.equal(
  new URL(canonical.headers.get("location"), base).pathname,
  "/contact",
);
assert.equal(
  new URL(canonical.headers.get("location"), base).search,
  "?source=test",
);
assert.equal((await fetch(base + "/api/admin/leads")).status, 401);
console.log(
  "PASS: sitemap, robots, missing assets, canonical locale redirect and anonymous admin access",
);
if (process.env.RUN_INTEGRATION !== "1") {
  console.log(
    "Write scenarios skipped: set RUN_INTEGRATION=1 with a dedicated rycode_test database.",
  );
  process.exit(0);
}
const url = new URL(process.env.DATABASE_URL || "");
if (!/^rycode_(test|ci)/.test(url.pathname.slice(1)))
  throw new Error("Refusing write scenarios outside a dedicated test database");
const client = new pg.Client({ connectionString: url.href });
await client.connect();
const userIds = [],
  contentIds = [],
  mediaIds = [];
const slug = "http-test-" + randomUUID();
const analyticsPath = "/pages/" + slug + "-analytics";
let adminCookie = "",
  editorCookie = "";
const failureTrigger = "qa_media_" + randomUUID().replaceAll("-", "");
const renamedFaqId = randomUUID();
let keptMedia;
const post = async (path, data, cookie = "", origin = base) =>
  fetch(base + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: origin,
      ...(cookie ? { Cookie: cookie } : {}),
    },
    body: JSON.stringify(data),
    redirect: "manual",
  });
async function user(role) {
  const id = randomUUID();
  userIds.push(id);
  const email = `qa-${id}@rycode.invalid`,
    password = "Qa!" + randomBytes(24).toString("base64url");
  await client.query(
    'INSERT INTO "User" (id,name,email,"emailVerified",role,"createdAt","updatedAt") VALUES ($1,$2,$3,true,$4,NOW(),NOW())',
    [id, "QA " + role, email, role],
  );
  await client.query(
    'INSERT INTO "Account" (id,"accountId","providerId","userId",password,"createdAt","updatedAt") VALUES ($1,$2,\'credential\',$2,$3,NOW(),NOW())',
    [randomUUID(), id, await hashPassword(password)],
  );
  const login = await post("/api/auth/sign-in/email", { email, password });
  assert.equal(login.status, 200, "staff sign-in: " + (await login.text()));
  return login.headers
    .getSetCookie()
    .map((c) => c.split(";")[0])
    .join("; ");
}
try {
  adminCookie = await user("ADMIN");
  editorCookie = await user("EDITOR");
  for (const path of [
    "/admin",
    "/admin/content",
    "/admin/preview/" + randomUUID(),
  ]) {
    const anonymous = await fetch(base + path, { redirect: "manual" });
    assert.equal(anonymous.status, 307, path + " requires sign-in");
    assert.equal(
      new URL(anonymous.headers.get("location"), base).pathname,
      "/admin/login",
    );
  }
  for (const query of [
    "q=a&q=b",
    "category=a&category=b",
    "page=1.1",
    "page=Infinity",
    "page=-1",
    "page=2&page=3",
  ]) {
    const page = await fetch(base + "/blog?" + query);
    assert.equal(page.status, 200, query);
    const html = load(await page.text());
    assert.ok(html("h1").text().length > 0, query + " renders a real page");
    assert.equal(html("html").attr("lang"), "fa");
  }
  assert.equal(
    (
      await fetch(base + "/api/admin/content?page=1.1", {
        headers: { Cookie: adminCookie },
      })
    ).status,
    200,
  );
  assert.equal(
    (
      await post("/api/auth/sign-up/email", {
        email: "blocked@rycode.invalid",
        password: "ThisCannotCreateAnAccount123!",
        name: "blocked",
      })
    ).ok,
    false,
    "public signup disabled",
  );
  assert.equal(
    (
      await post(
        "/api/admin/settings",
        { key: "contact.email", value: "editor@rycode.invalid" },
        editorCookie,
      )
    ).status,
    403,
  );
  assert.equal(
    (
      await post(
        "/api/admin/content",
        {},
        adminCookie,
        "https://untrusted.invalid",
      )
    ).status,
    403,
  );
  const document = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "عنوان فارسی" }],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "این متن برای آزمون انتشار فارسی بدون ترجمهٔ انگلیسی نوشته شده است.",
          },
        ],
      },
    ],
  };
  const draft = {
    kind: "ARTICLE",
    slug,
    status: "DRAFT",
    featuredImage: "/brand/rycode-charcoal.webp",
    translations: [
      {
        locale: "fa",
        approved: true,
        title: "آزمون مقالهٔ فارسی",
        summary: "بررسی گردش انتشار و دسترسی به پیش‌نویس",
        body: document,
      },
    ],
    tags: ["test"],
  };
  let response = await post("/api/admin/content", draft, editorCookie);
  assert.equal(
    response.status,
    200,
    "editor can save draft: " +
      (await response.text().then((text) => {
        try {
          return JSON.parse(text).error || text;
        } catch {
          return text;
        }
      })),
  );
  // Resolve the ID independently because the response body has already been read for diagnostics.
  let record = (
    await client.query('SELECT id FROM "Content" WHERE slug=$1', [slug])
  ).rows[0];
  contentIds.push(record.id);
  await client.query(
    "INSERT INTO \"Faq\" (id,scope,locale,question,answer,published,position) VALUES ($1,$2,'fa',$3,$4,true,0)",
    [
      renamedFaqId,
      "blog/" + slug,
      "پرسش آزمایشی تغییر نشانی",
      "پاسخ این پرسش همراه با نشانی محتوای آزمایشی جابه‌جا می‌شود.",
    ],
  );
  assert.equal(
    (await fetch(base + "/blog/" + slug)).status,
    404,
    "draft must not render publicly",
  );
  assert.equal(
    (
      await fetch(base + "/admin/preview/" + record.id, {
        headers: { Cookie: adminCookie },
      })
    ).status,
    200,
    "private preview",
  );
  assert.equal(
    (
      await post(
        "/api/admin/content",
        { ...draft, id: record.id, status: "PUBLISHED" },
        editorCookie,
      )
    ).status,
    403,
    "editor cannot publish",
  );
  response = await post(
    "/api/admin/content",
    { ...draft, id: record.id, status: "PUBLISHED" },
    adminCookie,
  );
  assert.equal(
    response.status,
    200,
    "administrator can publish: " + (await response.text()),
  );
  const article = await fetch(base + "/blog/" + slug);
  assert.equal(article.status, 200);
  const $ = load(await article.text());
  assert.match($("h1").text(), /آزمون مقاله/);
  assert.equal(
    $("link[hreflang='en']").length,
    0,
    "no imaginary English translation",
  );
  assert.ok($("script[type='application/ld+json']").length >= 1);
  const managedBlog = load(await (await fetch(base + "/blog")).text());
  assert.equal(
    managedBlog("[data-framer-name='Blog Section']").length,
    1,
    "CMS publication retains the reference blog layout",
  );
  assert.equal(
    managedBlog("[data-blog-card][data-article-id='" + record.id + "']").length,
    1,
    "CMS article uses the original card template",
  );
  assert.equal(
    managedBlog("h1").length,
    1,
    "no replacement generic hero heading",
  );
  assert.ok(
    managedBlog("[data-blog-images]").length > 0,
    "reference slideshow survives editorial changes",
  );
  assert.equal(
    $("a.language-switch").length,
    0,
    "no switch to an unavailable translation",
  );
  assert.equal(
    (await fetch(base + "/en/blog/" + slug)).status,
    404,
    "untranslated English article must not fall back to Persian",
  );
  const renamed = slug + "-فارسی";
  assert.equal(
    (await post("/api/admin/content", { ...draft, id: record.id }, adminCookie))
      .status,
    200,
  );
  const [publishing, editing] = await Promise.all([
    post(
      "/api/admin/content",
      { ...draft, id: record.id, status: "PUBLISHED" },
      adminCookie,
    ),
    post("/api/admin/content", { ...draft, id: record.id }, editorCookie),
  ]);
  assert.equal(publishing.status, 200);
  assert.ok([200, 403].includes(editing.status));
  assert.equal(
    (
      await client.query('SELECT status FROM "Content" WHERE id=$1', [
        record.id,
      ])
    ).rows[0].status,
    "PUBLISHED",
    "a racing draft save cannot withdraw an administrator's publication",
  );
  response = await post(
    "/api/admin/content",
    { ...draft, id: record.id, slug: renamed, status: "PUBLISHED" },
    adminCookie,
  );
  assert.equal(response.status, 200);
  const moved = await fetch(base + "/blog/" + slug, { redirect: "manual" });
  assert.equal(
    (await client.query('SELECT scope FROM "Faq" WHERE id=$1', [renamedFaqId]))
      .rows[0].scope,
    "blog/" + renamed,
    "FAQ follows a renamed content page",
  );
  assert.ok([307, 308].includes(moved.status), "slug change redirects");
  assert.equal(
    (await fetch(base + "/blog/" + renamed)).status,
    200,
    "Persian slug destination",
  );
  response = await post(
    "/api/admin/content",
    { ...draft, id: record.id, status: "PUBLISHED" },
    adminCookie,
  );
  assert.equal(response.status, 200);
  assert.equal(
    (await fetch(base + "/blog/" + renamed)).status,
    200,
    "rename back without a redirect cycle",
  );
  response = await post(
    "/api/admin/content",
    { ...draft, id: record.id, slug: renamed, status: "PUBLISHED" },
    adminCookie,
  );
  assert.equal(response.status, 200);
  const redirectedSitemap = load(
    await (await fetch(base + "/sitemap.xml")).text(),
    { xml: true },
  );
  assert.equal(
    redirectedSitemap("loc")
      .toArray()
      .some(
        (node) => redirectedSitemap(node).text() === base + "/blog/" + slug,
      ),
    false,
    "redirect sources are excluded from sitemap",
  );
  response = await post(
    "/api/admin/content",
    { ...draft, id: record.id, slug: renamed, status: "ARCHIVED" },
    adminCookie,
  );
  assert.equal(response.status, 200);
  assert.equal(
    (await fetch(base + "/blog/" + renamed)).status,
    404,
    "archive withdrawal",
  );
  const withdrawnBlog = load(await (await fetch(base + "/blog")).text());
  assert.equal(
    withdrawnBlog("[data-blog-card][data-article-id='" + record.id + "']")
      .length,
    0,
    "withdrawn articles leave the listing",
  );
  const scheduled = {
    ...draft,
    slug: slug + "-scheduled",
    status: "SCHEDULED",
    scheduledAt: new Date(Date.now() + 60000).toISOString(),
  };
  response = await post("/api/admin/content", scheduled, adminCookie);
  assert.equal(response.status, 200);
  record = (
    await client.query('SELECT id FROM "Content" WHERE slug=$1', [
      scheduled.slug,
    ])
  ).rows[0];
  contentIds.push(record.id);
  assert.equal((await fetch(base + "/blog/" + scheduled.slug)).status, 404);
  const blogCategory = "qa-blog-" + slug;
  let lastBlogId;
  for (let index = 0; index < 13; index++) {
    const fixture = await post(
      "/api/admin/content",
      {
        ...draft,
        slug: slug + "-blog-" + index,
        status: "PUBLISHED",
        category: blogCategory,
        position: index,
      },
      adminCookie,
    );
    assert.equal(fixture.status, 200);
    const data = await fixture.json();
    contentIds.push(data.id);
    lastBlogId = data.id;
  }
  const filteredBlog = load(
    await (await fetch(base + "/blog?category=" + blogCategory)).text(),
  );
  assert.equal(
    filteredBlog("[data-blog-card]").length,
    12,
    "filtered articles keep reference cards",
  );
  assert.ok(filteredBlog("nav a[href*='page=2']").length > 0);
  const secondBlog = load(
    await (await fetch(base + "/blog?page=2&category=" + blogCategory)).text(),
  );
  assert.equal(secondBlog("[data-blog-card]").length, 1);
  assert.equal(
    secondBlog("[data-blog-card]").attr("data-article-id"),
    lastBlogId,
  );
  assert.equal(
    secondBlog("[data-framer-name='Blog Section']").length,
    1,
    "pagination retains reference layout",
  );
  // Exercise both pages of a real project listing; noIndex controls indexing, not visibility.
  for (let index = 0; index < 13; index++) {
    const result = await post(
      "/api/admin/content",
      {
        ...draft,
        kind: "PROJECT",
        slug: slug + "-project-" + index,
        status: "PUBLISHED",
        noIndex: index === 12,
        position: index,
        translations: [
          { ...draft.translations[0], title: "آزمون پروژه " + index },
        ],
      },
      adminCookie,
    );
    assert.equal(result.status, 200, "project fixture");
    contentIds.push((await result.json()).id);
  }
  const projects = load(await (await fetch(base + "/work")).text());
  assert.ok(
    projects("a[href='/work?page=2']").length > 0,
    "projects paginate within work",
  );
  const secondProjects = load(
    await (await fetch(base + "/work?page=2")).text(),
  );
  assert.ok(
    secondProjects("a[href='/work/" + slug + "-project-12']").length > 0,
    "second page includes noIndex published project",
  );
  assert.equal(
    secondProjects("link[rel='canonical']").attr("href"),
    base + "/work?page=2",
  );
  const projectSitemap = await (await fetch(base + "/sitemap.xml")).text();
  assert.ok(
    !projectSitemap.includes(slug + "-project-12"),
    "noIndex project excluded from sitemap",
  );
  const noIndexPage = load(
    await (await fetch(base + "/work/" + slug + "-project-12")).text(),
  );
  assert.match(noIndexPage("meta[name='robots']").attr("content"), /noindex/);
  const policy = await post(
    "/api/admin/content",
    {
      ...draft,
      kind: "PAGE",
      slug: "privacy",
      status: "PUBLISHED",
      noIndex: true,
      translations: [
        {
          ...draft.translations[0],
          title: "حریم خصوصی آزمایشی",
          seoTitle: "عنوان سئوی آزمایشی",
          seoDescription: "توضیحات سئوی سیاست حریم خصوصی آزمایشی",
        },
      ],
    },
    adminCookie,
  );
  assert.equal(policy.status, 200);
  contentIds.push((await policy.json()).id);
  const privacy = load(await (await fetch(base + "/privacy")).text());
  assert.match(privacy("title").text(), /عنوان سئوی آزمایشی/);
  assert.equal(
    privacy("meta[name='description']").attr("content"),
    "توضیحات سئوی سیاست حریم خصوصی آزمایشی",
  );
  assert.match(privacy("meta[name='robots']").attr("content"), /noindex/);
  assert.equal(
    privacy("a[href='/pages']").length,
    0,
    "policy breadcrumb has no missing parent",
  );
  assert.equal(
    (await fetch(base + "/en/privacy")).status,
    404,
    "unapproved English policy is a real 404",
  );
  const limitKey = createHmac("sha256", process.env.BETTER_AUTH_SECRET)
    .update("leads:local")
    .digest("hex");
  await client.query('DELETE FROM "RateLimit" WHERE key=$1', [limitKey]);
  const inquiry = {
    name: "QA inquiry",
    email: "qa@rycode.invalid",
    phone: "۰۹۹۸۱۲۲۲۰۲۲",
    message: "This inquiry verifies real persistence and safe retries.",
    locale: "fa",
    sourcePath: "/contact",
    requestKey: randomUUID(),
    startedAt: Date.now() - 3000,
  };
  response = await post("/api/leads", inquiry);
  assert.equal(response.status, 201);
  const saved = await response.json();
  assert.match(saved.receipt, /^RY-/);
  response = await post("/api/leads", inquiry);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).receipt, saved.receipt);
  response = await post("/api/leads", {
    ...inquiry,
    startedAt: Date.now() - 2 * 86400000,
  });
  assert.equal(
    response.status,
    200,
    "a delayed retry still returns its original receipt",
  );
  assert.equal((await response.json()).receipt, saved.receipt);
  assert.equal(
    Number(
      (
        await client.query(
          'SELECT COUNT(*) FROM "Lead" WHERE "requestKey"=$1',
          [inquiry.requestKey],
        )
      ).rows[0].count,
    ),
    1,
  );
  const analyticsInput = { name: "page_view", path: analyticsPath };
  for (const extra of [
    { session: randomUUID() },
    { referrerHost: "example.com" },
    { campaign: "private-token" },
    { path: analyticsPath + "?email=qa@example.com" },
  ])
    assert.equal(
      (await post("/api/analytics", { ...analyticsInput, ...extra })).status,
      400,
      "analytics rejects identifiers, referral data and URL parameters",
    );
  assert.equal(
    (await post("/api/analytics", analyticsInput, "", "https://other.invalid"))
      .status,
    403,
    "analytics rejects cross-origin requests",
  );
  const counters = await Promise.all(
    Array.from({ length: 24 }, () => post("/api/analytics", analyticsInput)),
  );
  for (const counter of counters) {
    assert.equal(
      counter.status,
      204,
      "anonymous counters need no consent or ID",
    );
    assert.equal(
      counter.headers.get("set-cookie"),
      null,
      "no analytics cookie",
    );
  }
  assert.equal(
    (
      await post("/api/analytics", {
        ...analyticsInput,
        path: "/fa" + analyticsPath + "/",
      })
    ).status,
    204,
    "canonical locale and trailing slash share a counter",
  );
  const aggregate = await client.query(
    'SELECT "day", "count" FROM "AnalyticsDaily" WHERE "name"=$1 AND "path"=$2',
    [analyticsInput.name, analyticsPath],
  );
  assert.equal(
    aggregate.rows.length,
    1,
    "one daily aggregate, not per-visit records",
  );
  assert.equal(
    aggregate.rows[0].count,
    25,
    "concurrent increments lose no visits",
  );
  assert.equal(
    (
      await client.query(
        "SELECT to_regclass('public.\"AnalyticsEvent\"') AS old",
      )
    ).rows[0].old,
    null,
    "individual event storage has been removed",
  );
  for (const privatePath of [
    "/admin",
    "/en/admin",
    "/api/health",
    "/preview/test",
  ])
    assert.equal(
      (await post("/api/analytics", { ...analyticsInput, path: privatePath }))
        .status,
      204,
    );
  assert.equal(
    Number(
      (
        await client.query(
          'SELECT COUNT(*) FROM "AnalyticsDaily" WHERE "path"=ANY($1::text[])',
          [["/admin", "/en/admin", "/api/health", "/preview/test"]],
        )
      ).rows[0].count,
    ),
    0,
    "private paths are not counted",
  );
  const report = await fetch(base + "/api/admin/analytics", {
    headers: { Cookie: adminCookie },
  });
  assert.equal(report.status, 200);
  assert.equal(
    (await report.json()).paths.find((row) => row.path === analyticsPath)
      ?._count,
    25,
    "admin reports sums of increments, not numbers of daily rows",
  );
  const input = new FormData();
  input.set(
    "file",
    new Blob(
      [
        await sharp({
          create: { width: 20, height: 20, channels: 3, background: "#ff1a05" },
        })
          .png()
          .toBuffer(),
      ],
      { type: "image/png" },
    ),
    "test.png",
  );
  response = await fetch(base + "/api/media", {
    method: "POST",
    headers: { Cookie: adminCookie, Origin: base },
    body: input,
  });
  assert.equal(
    response.status,
    201,
    "valid image upload: " + (await response.clone().text()),
  );
  const uploaded = await response.json();
  mediaIds.push(uploaded.id);
  const media = await fetch(base + "/media/" + uploaded.id);
  assert.equal(media.status, 200);
  assert.equal(media.headers.get("content-type"), "image/webp");
  if (process.env.PERSIST_MEDIA_SMOKE === "1") {
    keptMedia = uploaded.id;
    await mkdir("test-results", { recursive: true });
    await writeFile(
      "test-results/media-smoke.json",
      JSON.stringify({
        id: uploaded.id,
        alt: uploaded.alt,
        sha256: createHash("sha256")
          .update(Buffer.from(await media.arrayBuffer()))
          .digest("hex"),
      }),
    );
  }
  const mediaRoot = resolve(process.env.MEDIA_ROOT || "storage/media");
  const beforeFiles = (await readdir(mediaRoot)).sort();
  const beforeMedia = await client.query('SELECT COUNT(*) FROM "Media"');
  // Reject the audit insert in the dedicated test database to verify full rollback.
  await client.query(
    `CREATE FUNCTION ${failureTrigger}() RETURNS trigger LANGUAGE plpgsql AS $$ BEGIN IF NEW.action = 'media.created' AND NEW."actorId" = TG_ARGV[0] THEN RAISE EXCEPTION 'QA forced audit failure'; END IF; RETURN NEW; END $$`,
  );
  await client.query(
    `CREATE TRIGGER ${failureTrigger} BEFORE INSERT ON "AuditLog" FOR EACH ROW EXECUTE FUNCTION ${failureTrigger}('${userIds[0]}')`,
  );
  try {
    const rejected = await fetch(base + "/api/media", {
      method: "POST",
      headers: { Cookie: adminCookie, Origin: base },
      body: input,
    });
    assert.equal(
      rejected.status,
      503,
      "storage failures are not reported as invalid images",
    );
    assert.equal(
      (await client.query('SELECT COUNT(*) FROM "Media"')).rows[0].count,
      beforeMedia.rows[0].count,
      "failed audit rolls back the media row",
    );
    assert.deepEqual(
      (await readdir(mediaRoot)).sort(),
      beforeFiles,
      "failed transaction removes its uploaded file",
    );
  } finally {
    await client.query(
      `DROP TRIGGER IF EXISTS ${failureTrigger} ON "AuditLog"`,
    );
    await client.query(`DROP FUNCTION IF EXISTS ${failureTrigger}()`);
  }
  const invalid = new FormData();
  invalid.set(
    "file",
    new Blob(
      [
        '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>',
      ],
      { type: "image/png" },
    ),
    "fake.png",
  );
  response = await fetch(base + "/api/media", {
    method: "POST",
    headers: { Cookie: adminCookie, Origin: base },
    body: invalid,
  });
  assert.equal(response.status, 422, "invalid image signature rejected");
  assert.equal(
    (
      await post(
        "/api/admin/redirects",
        { source: "/test-external", destination: "https://evil.invalid" },
        adminCookie,
      )
    ).status,
    400,
  );
  response = await post(
    "/api/admin/redirects",
    { source: "/test-cycle-a", destination: "/test-cycle-b" },
    adminCookie,
  );
  assert.equal(response.status, 200);
  assert.equal(
    (
      await post(
        "/api/admin/redirects",
        { source: "/test-cycle-b", destination: "/test-cycle-a" },
        adminCookie,
      )
    ).status,
    422,
  );
  console.log(
    "PASS: staff login, disabled signup, server permissions, CSRF, draft/preview/publish/schedule/archive, Persian-only publishing, slug redirects, idempotent inquiries, anonymous aggregate counters, safe uploads and redirect cycles",
  );
} finally {
  await client.query('DELETE FROM "AnalyticsDaily" WHERE "path"=$1', [
    analyticsPath,
  ]);
  await client.query('DELETE FROM "Faq" WHERE id=$1', [renamedFaqId]);
  await client.query(`DROP TRIGGER IF EXISTS ${failureTrigger} ON "AuditLog"`);
  await client.query(`DROP FUNCTION IF EXISTS ${failureTrigger}()`);
  await client.query('DELETE FROM "Content" WHERE id=ANY($1::text[])', [
    contentIds,
  ]);
  await client.query('DELETE FROM "AuditLog" WHERE "actorId"=ANY($1::text[])', [
    userIds,
  ]);
  await client.query('DELETE FROM "User" WHERE id=ANY($1::text[])', [userIds]);
  await client.query('DELETE FROM "Lead" WHERE email=$1', [
    "qa@rycode.invalid",
  ]);
  await client.query(
    'DELETE FROM "Redirect" WHERE source LIKE $1 OR source LIKE $2',
    ["%http-test-%", "/test-%"],
  );
  await client.query('DELETE FROM "Media" WHERE id=ANY($1::text[])', [
    mediaIds.filter((id) => id !== keptMedia),
  ]);
  for (const id of mediaIds)
    if (id !== keptMedia)
      await unlink(
        join(resolve(process.env.MEDIA_ROOT || "storage/media"), id + ".webp"),
      ).catch(() => {});
  await client.end();
}
