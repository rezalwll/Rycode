import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { getTranslations } from "@/lib/i18n-server";
import { articleDate } from "@/lib/article-date";
import { articleImageSources } from "@/lib/article-images";
import { listPublishedContent } from "@/server/content";
import styles from "./HomeBlogPreview.module.css";

export async function HomeBlogPreview() {
  const { locale, href } = await getTranslations();
  const { items } = await listPublishedContent("ARTICLE", locale, {
    latestFirst: true,
  });
  const fa = locale === "fa";
  const articles = items.slice(0, 3);
  const Arrow = fa ? ArrowUpLeft : ArrowUpRight;
  const number = new Intl.NumberFormat(locale);

  return (
    <section
      id="blog-preview"
      className={styles.preview}
      dir={fa ? "rtl" : "ltr"}
      aria-labelledby="home-blog-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              <span aria-hidden="true">✦</span>
              {fa ? "یادداشت‌ها و راهنماها" : "NOTES & GUIDES"}
            </p>
            <h2 id="home-blog-title">
              {fa ? "مجلهٔ رایکد" : "RYCODE Journal"}
            </h2>
            <p className={styles.description}>
              {fa
                ? "دربارهٔ طراحی سایت، نرم‌افزار و راه‌های ساده‌تر کردن کارها."
                : "Practical ideas on websites, software and making everyday work simpler."}
            </p>
          </div>
          <Link className={styles.allArticles} href={href("/blog")}>
            {fa ? "همهٔ مقاله‌ها" : "All articles"}
            <Arrow size={17} aria-hidden="true" />
          </Link>
        </header>
        {articles.length > 0 ? (
          <ul className={styles.cards} data-count={articles.length}>
            {articles.map((article, index) => {
              const featured = index === 0;
              const titleId = `home-article-${article.id}`;
              return (
                <li
                  className={featured ? styles.featured : styles.compact}
                  key={article.id}
                >
                  <Link
                    className={styles.card}
                    href={href(`/blog/${article.slug}`)}
                    aria-labelledby={titleId}
                    data-blog-card
                    data-article-id={article.id}
                  >
                    <div className={styles.media}>
                      <img
                        src={article.image || "/brand/og-card.png"}
                        srcSet={articleImageSources(article.image)}
                        sizes={
                          featured
                            ? "(max-width: 799px) calc(100vw - 40px), 570px"
                            : "(max-width: 480px) 90px, 200px"
                        }
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      {featured && (
                        <span className={styles.latest}>
                          {fa ? "تازه‌ترین مقاله" : "Latest article"}
                        </span>
                      )}
                    </div>
                    <div className={styles.body}>
                      <div className={styles.meta}>
                        <time dateTime={article.publishedAt}>
                          {articleDate(article.publishedAt, locale)}
                        </time>
                        <span className={styles.dot} aria-hidden="true" />
                        <span>
                          {fa
                            ? `${number.format(article.readingTime)} دقیقه مطالعه`
                            : `${number.format(article.readingTime)} min read`}
                        </span>
                      </div>
                      <h3 id={titleId} dir="auto">
                        {article.title}
                      </h3>
                      {featured && (
                        <p className={styles.summary}>{article.summary}</p>
                      )}
                      <span className={styles.read} aria-hidden="true">
                        {fa ? "خواندن مقاله" : "Read article"}
                        <Arrow size={16} />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
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
