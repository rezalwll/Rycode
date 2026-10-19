import nextEnv from "@next/env";
import { randomUUID } from "node:crypto";
import { hashPassword } from "better-auth/crypto";
import { database } from "../src/server/db";
nextEnv.loadEnvConfig(process.cwd());
const email = process.env.BOOTSTRAP_ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.BOOTSTRAP_ADMIN_PASSWORD;
const role = process.env.BOOTSTRAP_ADMIN_ROLE || "ADMIN";
if (role !== "ADMIN" && role !== "EDITOR")
  throw new Error("Choose ADMIN or EDITOR");
if (
  !email ||
  !/^\S+@\S+\.\S+$/.test(email) ||
  !password ||
  password.length < 16 ||
  !/[a-z]/.test(password) ||
  !/[A-Z]/.test(password) ||
  !/[0-9]/.test(password)
)
  throw new Error(
    "Set BOOTSTRAP_ADMIN_EMAIL and a strong BOOTSTRAP_ADMIN_PASSWORD (16+ characters, upper/lowercase and numbers)",
  );
const db = database();
if (await db.user.findUnique({ where: { email } }))
  throw new Error(
    "Account already exists; bootstrap never changes an existing password or role",
  );
const id = randomUUID();
const hashed = await hashPassword(password);
await db.user.create({
  data: {
    id,
    name: process.env.BOOTSTRAP_ADMIN_NAME || "مدیر رایکد",
    email,
    emailVerified: true,
    role,
    accounts: {
      create: {
        id: randomUUID(),
        accountId: id,
        providerId: "credential",
        password: hashed,
      },
    },
  },
});
console.log(
  "Administrator created. Remove the bootstrap variables from the environment.",
);
await db.$disconnect();
