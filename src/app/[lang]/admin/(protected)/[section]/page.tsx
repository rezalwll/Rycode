import { notFound, redirect } from "next/navigation";
import { z } from "zod";
import { locales } from "@/lib/content-rules";
import { database } from "@/server/db";
import { siteSettings } from "@/server/content";
import { PortfolioProjectsWorkspace } from "@/components/admin/PortfolioProjectsWorkspace";
import { PortfolioDisplayFields } from "@/components/admin/PortfolioDisplayFields";
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
      "home-projects",
      "website-projects",
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
    ![
      "content",
      "projects",
      "home-projects",
      "website-projects",
      "media",
      "faqs",
    ].includes(section)
  )
    redirect("/admin");
  if (section === "analytics") return <InsightsDashboard />;
  const query = await searchParams;
  const isAdmin = staff.role === "ADMIN";
  if (section === "home-projects" || section === "website-projects") {
    const isWebsite = section === "website-projects";
    const exampleKey = isWebsite
      ? "portfolio.websiteExamples"
      : "portfolio.homeExamples";
    const selected = z.uuid().safeParse(query.project);
    const [choices, project, settings] = await Promise.all([
      database().content.findMany({
        where: { kind: "PROJECT", legacy: false },
        select: {
          id: true,
          slug: true,
          status: true,
          featured: true,
          websiteFeatured: true,
          translations: { where: { locale: "fa" }, select: { title: true } },
        },
        orderBy: [
          isWebsite ? { websiteFeatured: "desc" } : { featured: "desc" },
          { updatedAt: "desc" },
        ],
      }),
      selected.success
        ? database().content.findUnique({
            where: { id: selected.data, kind: "PROJECT", legacy: false },
            select: {
              id: true,
              status: true,
              sample: true,
              featured: true,
              featuredImage: true,
              homeCardImage: true,
              homeCardPosition: true,
              websiteFeatured: true,
              websiteCardImage: true,
              websiteCardPosition: true,
              position: true,
              translations: {
                select: {
                  locale: true,
                  approved: true,
                  title: true,
                  summary: true,
                  homeCardTitle: true,
                  homeCardSummary: true,
                  websiteCardTitle: true,
                  websiteCardSummary: true,
                },
              },
            },
          })
        : null,
      siteSettings(),
    ]);
    if (selected.success && !project) notFound();
    return (
      <>
        <PortfolioProjectsWorkspace
          key={section + ":" + (project?.id ?? "")}
          section={section}
          project={
            project && {
              id: project.id,
              status: project.status,
              sample: project.sample,
              featuredImage: project.featuredImage,
              featured: isWebsite ? project.websiteFeatured : project.featured,
              cardImage: isWebsite
                ? project.websiteCardImage
                : project.homeCardImage,
              cardPosition:
                (isWebsite
                  ? project.websiteCardPosition
                  : project.homeCardPosition) ?? project.position,
              translations: locales.flatMap((locale) => {
                const text = project.translations.find(
                  (entry) => entry.locale === locale,
                );
                return text
                  ? [
                      {
                        locale,
                        approved: text.approved,
                        title: text.title,
                        summary: text.summary,
                        cardTitle: isWebsite
                          ? text.websiteCardTitle
                          : text.homeCardTitle,
                        cardSummary: isWebsite
                          ? text.websiteCardSummary
                          : text.homeCardSummary,
                      },
                    ]
                  : [];
              }),
            }
          }
          choices={choices.map(
            ({
              id,
              slug,
              status,
              featured,
              websiteFeatured,
              translations,
            }) => ({
              id,
              status,
              featured: isWebsite ? websiteFeatured : featured,
              title: translations[0]?.title || slug,
            }),
          )}
          isAdmin={isAdmin}
        />
        {isAdmin && (
          <PortfolioDisplayFields
            setting={exampleKey}
            enabled={settings[exampleKey] !== false}
          />
        )}
      </>
    );
  }
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
      workExamplesSetting={
        isProject && isAdmin
          ? (await siteSettings())["portfolio.workExamples"] !== false
          : undefined
      }
    />
  );
}
