import { notFound, redirect } from "next/navigation";
import { requireStaffPage } from "@/server/auth";
import { AdminWorkspace } from "@/components/admin/AdminWorkspace";
export default async function AdminSection({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (
    ![
      "leads",
      "content",
      "media",
      "faqs",
      "settings",
      "redirects",
      "analytics",
      "users",
      "audit",
    ].includes(section)
  )
    notFound();
  const staff = await requireStaffPage();
  if (staff.role !== "ADMIN" && !["content", "media", "faqs"].includes(section))
    redirect("/admin");
  return <AdminWorkspace section={section} role={staff.role} />;
}
