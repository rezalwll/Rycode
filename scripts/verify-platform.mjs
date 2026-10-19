import assert from "node:assert/strict";
import { randomUUID, randomBytes, createHmac } from "node:crypto";
import { unlink } from "node:fs/promises";
import { resolve, join } from "node:path";
import pg from "pg";
import nextEnv from "@next/env";
import { hashPassword } from "better-auth/crypto";
import sharp from "sharp";
import { load } from "cheerio";
nextEnv.loadEnvConfig(process.cwd());
const base = process.env.VERIFY_URL || "http://127.0.0.1:3014";
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
let adminCookie = "",
  editorCookie = "";
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
  assert.equal(
    (await fetch(base + "/en/blog/" + slug)).status,
    404,
    "untranslated English article must not fall back to Persian",
  );
  const renamed = slug + "-فارسی";
  response = await post(
    "/api/admin/content",
    { ...draft, id: record.id, slug: renamed, status: "PUBLISHED" },
    adminCookie,
  );
  assert.equal(response.status, 200);
  const moved = await fetch(base + "/blog/" + slug, { redirect: "manual" });
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
  assert.equal(
    (
      await post("/api/analytics", {
        name: "page_view",
        path: "/contact",
        session: randomUUID(),
        consent: false,
      })
    ).status,
    400,
    "consent required",
  );
  assert.equal(
    (
      await post("/api/analytics", {
        name: "page_view",
        path: "/contact",
        session: randomUUID(),
        consent: true,
      })
    ).status,
    204,
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
    "PASS: staff login, disabled signup, server permissions, CSRF, draft/preview/publish/schedule/archive, Persian-only publishing, slug redirects, idempotent inquiries, analytics consent, safe uploads and redirect cycles",
  );
} finally {
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
    mediaIds,
  ]);
  for (const id of mediaIds)
    await unlink(
      join(resolve(process.env.MEDIA_ROOT || "storage/media"), id + ".webp"),
    ).catch(() => {});
  await client.end();
}
