import { Suspense } from "react";
import { requireStaffPage } from "@/server/auth";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { BrandTableLoading } from "@/components/BrandLoading";
import { getAdminOverview } from "@/server/admin-overview";
import type { StaffRole } from "@/generated/prisma/client";

async function DashboardContent({
  role,
  days,
}: {
  role: StaffRole;
  days: 7 | 30;
}) {
  const data = await getAdminOverview(role, days);
  return <AdminDashboard data={data} days={days} />;
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ days?: string | string[] }>;
}) {
  const staff = await requireStaffPage();
  const days = (await searchParams).days === "30" ? 30 : 7;
  return (
    <Suspense
      fallback={<BrandTableLoading label="در حال آماده‌کردن داشبورد…" />}
    >
      <DashboardContent role={staff.role} days={days} />
    </Suspense>
  );
}
