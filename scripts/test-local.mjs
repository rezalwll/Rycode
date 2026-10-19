import nextEnv from "@next/env";
import { spawnSync } from "node:child_process";
nextEnv.loadEnvConfig(process.cwd());
const url = new URL(process.env.DATABASE_URL || "");
if (
  url.hostname !== "127.0.0.1" ||
  url.port !== "5434" ||
  !url.pathname.startsWith("/rycode_dev")
)
  throw new Error("Use the dedicated local development database helper");
url.pathname = url.pathname.replace("rycode_dev", "rycode_test");
const env = { ...process.env, DATABASE_URL: url.href, RUN_INTEGRATION: "1" };
for (const args of [
  ["node_modules/prisma/build/index.js", "migrate", "deploy"],
  [
    "node_modules/vitest/vitest.mjs",
    "run",
    "--config",
    "vitest.integration.config.ts",
  ],
]) {
  const result = spawnSync(process.execPath, args, { env, stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
}
