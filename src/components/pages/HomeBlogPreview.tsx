import Link from "next/link";
import { getTranslations } from "@/lib/i18n-server";
import { listPublishedContent } from "@/server/content";
import { Reveal, SplitText } from "@/components/Motion";
import { BlogBlogSection } from "./BlogBlogSection";
import styles from "./HomeBlogPreview.module.css";

export async function HomeBlogPreview() {
  const { locale, href } = await getTranslations();
  const { items } = await listPublishedContent("ARTICLE", locale, {
    latestFirst: true,
  });
  const fa = locale === "fa";

  return (
    <section
      id="blog-preview"
      className={`${styles.preview} framer-ZFEwM`}
      dir={fa ? "rtl" : "ltr"}
      aria-labelledby="home-blog-title"
    >
      <div className={styles.inner}>
        <Reveal
          as="header"
          className={styles.header}
          from="translateY(24px)"
          duration={1100}
        >
          <div>
            <p className={styles.eyebrow}>
              <span aria-hidden="true">✦</span>
              {fa ? "بلاگ رایکد" : "RYCODE JOURNAL"}
            </p>
            <SplitText
              as="h2"
              id="home-blog-title"
              scrollLinked
              localizedText={
                fa
                  ? "پیش از قدم بعدی، آگاهانه انتخاب کن"
                  : "Make your next business decision with clarity"
              }
            />
          </div>
          <Link
            data-fill-button
            className={styles.allArticles}
            href={href("/blog")}
          >
            {fa ? "همهٔ مقاله‌ها" : "All articles"}
            <span aria-hidden="true">{fa ? "↖" : "↗"}</span>
          </Link>
        </Reveal>
        {items.length > 0 ? (
          <BlogBlogSection items={items.slice(0, 3)} />
        ) : (
          <p className={styles.empty}>
            {fa
              ? "مقاله‌های رایکد به‌زودی اینجا منتشر می‌شوند"
              : "New articles from RYCODE will appear here soon."}
          </p>
        )}
      </div>
    </section>
  );
}
