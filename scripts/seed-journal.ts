import nextEnv from "@next/env";
import { database } from "../src/server/db";
import { seedBusinessJournal } from "./lib/seed-business-journal";
nextEnv.loadEnvConfig(process.cwd());
const db = database();
try {
  const result = await seedBusinessJournal(db);
  console.log(
    `Created ${result.created} business guides, updated ${result.updated} untouched guides and archived ${result.archived} untouched seed articles.`,
  );
} finally {
  await db.$disconnect();
}
