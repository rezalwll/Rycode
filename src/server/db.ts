import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalDatabase = globalThis as unknown as { rycodeDb?: PrismaClient };
export const databaseConfigured = () => Boolean(process.env.DATABASE_URL);
export function database() {
  if (!process.env.DATABASE_URL)
    throw new Error("DATABASE_URL is required for this operation");
  if (!globalDatabase.rycodeDb)
    globalDatabase.rycodeDb = new PrismaClient({
      adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL,
        max: 8,
      }),
    });
  return globalDatabase.rycodeDb;
}
