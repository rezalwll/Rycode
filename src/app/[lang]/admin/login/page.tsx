import { redirect } from "next/navigation";
import { currentStaff } from "@/server/auth";
import { AdminLogin } from "@/components/admin/AdminSession";
export default async function LoginPage() {
  if (await currentStaff()) redirect("/admin");
  return <AdminLogin next="/admin" />;
}
