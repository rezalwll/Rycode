import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";
import pg from "pg";

const url = new URL(process.env.DATABASE_URL || "");
assert.equal(process.env.RUN_INTEGRATION, "1");
assert.match(
  url.pathname.slice(1),
  /^rycode_(test|ci)/,
  "isolated test database required",
);
const fixture = JSON.parse(
  await readFile("test-results/media-smoke.json", "utf8"),
);
assert.match(fixture.id, /^[a-f0-9-]{36}$/);
const client = new pg.Client({ connectionString: url.href });
await client.connect();
try {
  if (process.argv[2] === "corrupt") {
    await client.query('UPDATE "Media" SET alt=$1 WHERE id=$2', [
      "QA intentionally changed after backup",
      fixture.id,
    ]);
    await writeFile(
      join(resolve(process.env.MEDIA_ROOT), fixture.id + ".webp"),
      "QA intentionally changed after backup",
    );
    console.log(
      "Changed only the test fixture to verify recovery from backup.",
    );
  } else {
    const base = process.env.VERIFY_URL;
    let healthy = false;
    for (let attempt = 0; attempt < 60; attempt++) {
      if (
        await fetch(base + "/api/health")
          .then((r) => r.ok)
          .catch(() => false)
      ) {
        healthy = true;
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    assert.ok(healthy, "application recovers after restart/restore");
    const response = await fetch(base + "/media/" + fixture.id);
    assert.equal(response.status, 200);
    assert.equal(
      createHash("sha256")
        .update(Buffer.from(await response.arrayBuffer()))
        .digest("hex"),
      fixture.sha256,
      "uploaded bytes survive restart and restore",
    );
    assert.equal(
      (await client.query('SELECT alt FROM "Media" WHERE id=$1', [fixture.id]))
        .rows[0]?.alt,
      fixture.alt,
      "media metadata restored",
    );
    console.log(
      "PASS: persisted media bytes and database metadata match the original upload.",
    );
  }
} finally {
  await client.end();
}
