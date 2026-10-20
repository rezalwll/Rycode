import { betterAuth } from "better-auth/minimal";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { database } from "./db";
import { secret, HttpError } from "./security";

function createAuthentication() {
  return betterAuth({
    appName: "RYCODE Studio",
    baseURL:
      process.env.SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://127.0.0.1:3014",
    basePath: "/api/auth",
    secret: secret(),
    database: prismaAdapter(database(), { provider: "postgresql" }),
    emailAndPassword: {
      enabled: true,
      disableSignUp: true,
      minPasswordLength: 12,
    },
    session: { expiresIn: 60 * 60 * 12, updateAge: 60 * 30 },
    rateLimit: {
      enabled: true,
      storage: "database",
      modelName: "AuthRateLimit",
      window: 60,
      max: 40,
      customRules: { "/sign-in/email": { window: 300, max: 8 } },
    },
    advanced: {
      useSecureCookies: process.env.NODE_ENV === "production",
      cookiePrefix: "rycode",
    },
    telemetry: { enabled: false },
  });
}
let instance: ReturnType<typeof createAuthentication> | undefined;
export function authentication() {
  return (instance ??= createAuthentication());
}
export async function currentStaff() {
  if (!process.env.DATABASE_URL || !process.env.BETTER_AUTH_SECRET) return null;
  const session = await authentication().api.getSession({
    headers: await headers(),
  });
  if (!session) return null;
  return database().user.findUnique({
    where: { id: session.user.id },
    select: { id: true, name: true, email: true, role: true },
  });
}
export async function requireStaff(adminOnly = false) {
  const staff = await currentStaff();
  if (!staff) throw new HttpError(401, "Sign in required");
  if (adminOnly && staff.role !== "ADMIN")
    throw new HttpError(403, "Administrator access required");
  return staff;
}
export async function requireStaffPage() {
  const staff = await currentStaff();
  if (!staff) redirect("/admin/login");
  return staff;
}
