import { currentStaff } from "@/server/auth";
import { AdminWorkspace } from "@/components/admin/AdminWorkspace";
export default async function AdminPage() {
  const staff = await currentStaff();
  return <AdminWorkspace section="overview" role={staff!.role} />;
}
