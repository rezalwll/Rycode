import nextEnv from "@next/env";
import { database } from "../src/server/db";
nextEnv.loadEnvConfig(process.cwd());
const db = database();
const now = new Date();
const results = await db.$transaction([
  db.session.deleteMany({ where: { expiresAt: { lt: now } } }),
  db.verification.deleteMany({ where: { expiresAt: { lt: now } } }),
  db.rateLimit.deleteMany({ where: { resetAt: { lt: now } } }),
  db.authRateLimit.deleteMany({
    where: { lastRequest: { lt: BigInt(Date.now() - 86400000) } },
  }),
  db.analyticsEvent.deleteMany({
    where: { createdAt: { lt: new Date(Date.now() - 90 * 86400000) } },
  }),
]);
console.log(
  "Expired sessions, verifications, rate buckets and 90-day analytics removed:",
  results.map((result) => result.count),
);
await db.$disconnect();
