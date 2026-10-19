import nextEnv from "@next/env";
import EmbeddedPostgres from "embedded-postgres";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
nextEnv.loadEnvConfig(process.cwd());
if (process.env.NODE_ENV === "production")
  throw new Error("This helper is for local development only");
let password = process.env.DATABASE_URL
  ? new URL(process.env.DATABASE_URL).password
  : randomBytes(24).toString("hex");
if (!password) password = randomBytes(24).toString("hex");
if (!existsSync(".env.local"))
  writeFileSync(
    ".env.local",
    `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3014\nDATABASE_URL=postgresql://rycode:${password}@127.0.0.1:5434/rycode_dev\nBETTER_AUTH_SECRET=${randomBytes(48).toString("base64url")}\nMEDIA_ROOT=./storage/media\nTRUST_PROXY=false\n`,
    { mode: 0o600 },
  );
if (!readFileSync(".env.local", "utf8").includes("127.0.0.1:5434/rycode_dev"))
  throw new Error(
    "Use a separate local environment for the embedded development database",
  );
mkdirSync(".reference/postgres-dev", { recursive: true });
const pg = new EmbeddedPostgres({
  databaseDir: ".reference/postgres-dev",
  port: 5434,
  user: "rycode",
  password,
  authMethod: "scram-sha-256",
  persistent: true,
  initdbFlags: ["--encoding=UTF8", "--locale=C"],
  postgresFlags: ["-h", "127.0.0.1"],
  onLog: () => {},
  onError: (message) =>
    console.error(String(message).replaceAll(password, "[redacted]")),
});
if (!existsSync(".reference/postgres-dev/PG_VERSION")) await pg.initialise();
await pg.start();
const client = pg.getPgClient("postgres", "127.0.0.1");
await client.connect();
for (const database of ["rycode_dev", "rycode_test"]) {
  const result = await client.query(
    "SELECT 1 FROM pg_database WHERE datname=$1",
    [database],
  );
  if (result.rowCount === 0)
    await client.query(
      `CREATE DATABASE ${database} WITH TEMPLATE template0 ENCODING 'UTF8' LC_COLLATE 'C' LC_CTYPE 'C'`,
    );
}
await client.end();
console.log(
  "Local PostgreSQL ready on 127.0.0.1:5434 (rycode_dev and rycode_test)",
);
for (const signal of ["SIGTERM", "SIGINT"] as const)
  process.on(signal, () => void pg.stop().finally(() => process.exit(0)));
setInterval(() => {}, 60000);
