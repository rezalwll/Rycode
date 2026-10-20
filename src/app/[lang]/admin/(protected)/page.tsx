import { requireStaffPage } from "@/server/auth";
import { AdminWorkspace } from "@/components/admin/AdminWorkspace";
export default async function AdminPage() {
  const staff = await requireStaffPage();
  return <AdminWorkspace section="overview" role={staff.role} />;
}
