import type { StaffRole } from "@/generated/prisma/client";
import { database } from "./db";
import { getInsights, insightFilters } from "./insights";

const article = { kind: "ARTICLE" } as const;
const articleSelect = {
  id: true,
  slug: true,
  status: true,
  updatedAt: true,
  translations: { where: { locale: "fa" }, select: { title: true } },
} as const;

async function adminOverview(days: 7 | 30) {
  const db = database();
  const [insights, leads, newLeads, pendingComments] = await Promise.all([
    getInsights(insightFilters(new URLSearchParams({ days: String(days) }))),
    db.lead.findMany({
      where: { status: { notIn: ["SPAM", "ARCHIVED"] } },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      take: 5,
      select: {
        id: true,
        name: true,
        receipt: true,
        status: true,
        createdAt: true,
      },
    }),
    db.lead.count({ where: { status: "NEW" } }),
    db.comment.count({ where: { status: "PENDING" } }),
  ]);
  return { insights, leads, newLeads, pendingComments };
}

export async function getAdminOverview(role: StaffRole, days: 7 | 30) {
  const db = database();
  const [articles, totals, admin] = await Promise.all([
    db.content.findMany({
      where: article,
      orderBy: [{ updatedAt: "desc" }, { id: "desc" }],
      take: 5,
      select: articleSelect,
    }),
    db.content.groupBy({ by: ["status"], where: article, _count: true }),
    role === "ADMIN" ? adminOverview(days) : null,
  ]);
  return {
    articles,
    articleTotals: Object.fromEntries(
      totals.map(({ status, _count }) => [status, _count]),
    ),
    admin,
  };
}

export type AdminOverview = Awaited<ReturnType<typeof getAdminOverview>>;
