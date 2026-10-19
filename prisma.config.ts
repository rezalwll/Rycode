import { defineConfig } from "prisma/config";
import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations", seed: "tsx scripts/seed.ts" },
  datasource: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://rycode:local-only@127.0.0.1:5434/rycode",
  },
});
