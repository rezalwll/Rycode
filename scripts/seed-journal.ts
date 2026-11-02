import nextEnv from "@next/env";
import { database } from "../src/server/db";
import { seedBusinessJournal } from "./lib/seed-business-journal";
nextEnv.loadEnvConfig(process.cwd());
const db = database();
try {
  const result = await seedBusinessJournal(db);
  console.log(
    `Created ${result.created} business guides; archived ${result.archived} untouched seed articles. Existing editorial changes were preserved.`,
  );
} finally {
  await db.$disconnect();
}
