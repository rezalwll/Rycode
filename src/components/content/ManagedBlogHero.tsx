import { listPublishedContent } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { BlogBlock0 } from "@/components/pages/BlogBlock0";
import { BlogBlock1 } from "@/components/pages/BlogBlock1";
import { BlogBlock2 } from "@/components/pages/BlogBlock2";
import { BlogBlock3 } from "@/components/pages/BlogBlock3";
export async function ManagedBlogHero() {
  const { locale } = await getTranslations();
  const { items } = await listPublishedContent("ARTICLE", locale);
  const articles = items.slice(0, 3);
  return (
    <>
      <BlogBlock0 />
      <BlogBlock1 articles={articles} />
      <BlogBlock2 articles={articles} />
      <BlogBlock3 articles={articles} />
    </>
  );
}
