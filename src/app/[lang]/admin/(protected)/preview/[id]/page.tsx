import { notFound } from "next/navigation";
import { z } from "zod";
import { requireStaffPage } from "@/server/auth";
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
  await requireStaffPage();
  const { id } = await params;
  if (!z.uuid().safeParse(id).success) notFound();
  const locale = (await searchParams).locale === "en" ? "en" : "fa";
  const record = await database().content.findUnique({
    where: { id, kind: { in: ["ARTICLE", "PROJECT"] } },
    select: { slug: true, kind: true },
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
