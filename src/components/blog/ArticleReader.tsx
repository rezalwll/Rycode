"use client";
import { useEffect, useState } from "react";
import { List } from "lucide-react";
import styles from "./Reader.module.css";

export function ArticleReader({
  headings,
  fa,
}: {
  headings: { id: string; title: string; level: number }[];
  fa: boolean;
}) {
  const [active, setActive] = useState(headings[0]?.id || "");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const body = document.getElementById("article-content");
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((e): e is HTMLElement => e !== null);
    const update = () => {
      frame = 0;
      if (!body) return;
      const rect = body.getBoundingClientRect();
      const available = Math.max(1, rect.height - (innerHeight - 140));
      setProgress(
        Math.round(
          Math.max(0, Math.min(1, (140 - rect.top) / available)) * 100,
        ),
      );
      let id = elements[0]?.id || "";
      for (const element of elements)
        if (element.getBoundingClientRect().top <= 170) id = element.id;
      setActive(id);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    if (body) observer.observe(body);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [headings]);
  const links = (
    <ol>
      {headings.map((h) => (
        <li key={h.id} className={h.level === 3 ? styles.subheading : ""}>
          <a
            href={"#" + h.id}
            aria-current={active === h.id ? "location" : undefined}
            onClick={() => setActive(h.id)}
          >
            {h.title}
          </a>
        </li>
      ))}
    </ol>
  );
  return (
    <aside className={styles.reader}>
      <div
        className={styles.progress}
        role="progressbar"
        aria-label={fa ? "پیشرفت مطالعه" : "Reading progress"}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: progress + "%" }} />
      </div>
      {headings.length > 0 && (
        <>
          <nav
            className={styles.desktopToc}
            aria-label={fa ? "فهرست مطالب" : "Table of contents"}
          >
            <h2>
              <List size={17} aria-hidden />
              {fa ? "در این مقاله" : "On this page"}
            </h2>
            {links}
            <p>
              {progress.toLocaleString(fa ? "fa-IR" : "en-US")}
              {fa ? "٪ خوانده‌شده" : "% read"}
            </p>
          </nav>
          <details className={styles.mobileToc}>
            <summary>
              <List size={17} aria-hidden />
              {fa ? "فهرست مطالب" : "Table of contents"}
            </summary>
            <nav
              aria-label={
                fa ? "فهرست مطالب موبایل" : "Mobile table of contents"
              }
            >
              {links}
            </nav>
          </details>
        </>
      )}
    </aside>
  );
}
