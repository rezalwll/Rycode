import { notFound } from "next/navigation";
import { requireStaff } from "@/server/auth";
import { database } from "@/server/db";
import { lookupContent } from "@/server/content";
import { ContentDetail } from "@/components/content/ContentDetail";
export default async function Preview({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ locale?: string }>;
}) {
  await requireStaff();
  const { id } = await params;
  const locale = (await searchParams).locale === "en" ? "en" : "fa";
  const record = await database().content.findUnique({
    where: { id },
    select: { kind: true, slug: true },
  });
  if (!record) notFound();
  const { content } = await lookupContent(
    record.kind,
    record.slug,
    locale,
    true,
  );
  if (!content) notFound();
  return <ContentDetail content={content} locale={locale} preview />;
}
