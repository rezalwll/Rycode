import { notFound, redirect } from "next/navigation";
import { z } from "zod";
import { requireStaffPage } from "@/server/auth";
import { AdminWorkspace } from "@/components/admin/AdminWorkspace";
import { InsightsDashboard } from "@/components/admin/InsightsDashboard";
import { articleStatuses, leadStatuses } from "@/components/admin/admin-labels";
export default async function AdminSection({
  params,
  searchParams,
}: {
  params: Promise<{ section: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { section } = await params;
  if (
    ![
      "leads",
      "comments",
      "content",
      "projects",
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
  if (
    staff.role !== "ADMIN" &&
    !["content", "projects", "media", "faqs"].includes(section)
  )
    redirect("/admin");
  if (section === "analytics") return <InsightsDashboard />;
  const query = await searchParams;
  const isProject = section === "projects";
  const isContent = section === "content" || isProject;
  const isLeads = section === "leads";
  const statuses = isContent ? articleStatuses : isLeads ? leadStatuses : [];
  const status =
    typeof query.status === "string" && statuses.includes(query.status)
      ? query.status
      : "";
  const item = z
    .uuid()
    .safeParse(
      isProject
        ? query.project
        : isContent
          ? query.article
          : isLeads
            ? query.request
            : undefined,
    );
  const initialItem = item.success ? item.data : undefined;
  const newEntry = isContent && !initialItem && query.new === "1";
  return (
    <AdminWorkspace
      key={`${section}:${status}:${initialItem || ""}:${newEntry}`}
      section={section}
      role={staff.role}
      initialStatus={status}
      initialItem={initialItem}
      newEntry={newEntry}
    />
  );
}
