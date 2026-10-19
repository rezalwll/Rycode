import { notFound } from "next/navigation";
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}
export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "fa" && lang !== "en") notFound();
  return children;
}
