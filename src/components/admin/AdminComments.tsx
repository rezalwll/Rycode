"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { commentStatuses } from "@/lib/comments";
import styles from "./Admin.module.css";

type Row = {
  id: string;
  name: string;
  email: string | null;
  body: string;
  locale: string;
  status: keyof typeof commentStatuses;
  reply: string | null;
  createdAt: string;
  updatedAt: string;
  article: { slug: string; translations: { locale: string; title: string }[] };
};
type Results = { items: Row[]; total: number; pending: number };
export function AdminComments() {
  const [data, setData] = useState<Results | null>(null);
  const [filter, setFilter] = useState("PENDING");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({
      status: filter,
      q: query,
      page: String(page),
    });
    fetch("/api/admin/comments?" + params, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok)
          throw new Error(result.error || "دریافت دیدگاه‌ها ممکن نشد");
        setData(result);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, [filter, query, page, reload]);
  function refresh() {
    setLoading(true);
    setReload((value) => value + 1);
  }
  async function save(event: FormEvent<HTMLFormElement>, row: Row) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSaving(row.id);
    setMessage("");
    try {
      const response = await fetch("/api/admin/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: row.id,
          updatedAt: row.updatedAt,
          status: form.get("status"),
          reply: form.get("reply"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "ذخیره انجام نشد");
      setMessage("وضعیت و پاسخ ذخیره شد");
      refresh();
    } catch (err) {
      setMessage((err as Error).message);
    } finally {
      setSaving(null);
    }
  }
  return (
    <section aria-label="مدیریت دیدگاه‌ها">
      <p className={styles.muted}>
        دیدگاه‌های جدید تا زمان تأیید فقط در این پنل دیده می‌شوند. ایمیل
        ارسال‌کننده عمومی نیست.
      </p>
      <div className={styles.toolbar}>
        <input
          aria-label="جست‌وجوی دیدگاه یا مقاله"
          placeholder="جست‌وجوی نام، متن یا عنوان مقاله…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
            setLoading(true);
          }}
        />
        <select
          aria-label="وضعیت دیدگاه"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
            setLoading(true);
          }}
        >
          <option value="">همه وضعیت‌ها</option>
          {Object.entries(commentStatuses).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button onClick={refresh}>تازه‌سازی</button>
        {data && (
          <span>
            {data.pending.toLocaleString("fa-IR")} دیدگاه در انتظار تأیید
          </span>
        )}
      </div>
      {message && (
        <p role="status" className={styles.message}>
          {message}
        </p>
      )}
      {error && <p role="alert">{error}</p>}
      {loading ? (
        <p role="status">در حال دریافت…</p>
      ) : (
        !error && (
          <>
            {!data?.items.length && <p>دیدگاهی با این فیلتر پیدا نشد.</p>}
            {data?.items.map((row) => (
              <article key={row.id + row.updatedAt} className={styles.panel}>
                <div className={styles.actions}>
                  <strong>
                    <bdi>{row.name}</bdi>
                  </strong>
                  <span className={styles.badge}>
                    {commentStatuses[row.status]}
                  </span>
                  <time dateTime={row.createdAt}>
                    {new Date(row.createdAt).toLocaleString("fa-IR")}
                  </time>
                  <span>{row.locale === "fa" ? "فارسی" : "English"}</span>
                </div>
                <Link
                  href={
                    (row.locale === "en" ? "/en" : "") +
                    "/blog/" +
                    row.article.slug
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  مقاله:{" "}
                  {row.article.translations.find((t) => t.locale === row.locale)
                    ?.title || row.article.slug}{" "}
                  ↗
                </Link>
                {row.email && (
                  <p dir="ltr" className={styles.muted}>
                    {row.email}
                  </p>
                )}
                <p dir="auto" className={styles.commentText}>
                  {row.body}
                </p>
                <form
                  className={styles.grid}
                  onSubmit={(event) => save(event, row)}
                >
                  <label>
                    وضعیت
                    <select name="status" defaultValue={row.status}>
                      {Object.entries(commentStatuses).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={styles.wide}>
                    پاسخ رایکد (اختیاری)
                    <textarea
                      name="reply"
                      defaultValue={row.reply || ""}
                      maxLength={3000}
                      dir="auto"
                    />
                  </label>
                  <small className={styles.wide}>
                    پاسخ همراه دیدگاه تأییدشده نمایش داده می‌شود. برای برداشتن
                    دیدگاه از سایت، وضعیت را به «ردشده» تغییر دهید.
                  </small>
                  <button className={styles.primary} disabled={saving !== null}>
                    {saving === row.id
                      ? "در حال ذخیره…"
                      : "ذخیرهٔ وضعیت و پاسخ"}
                  </button>
                </form>
              </article>
            ))}
            <div className={styles.actions}>
              <button
                disabled={page === 1}
                onClick={() => {
                  setPage(page - 1);
                  setLoading(true);
                }}
              >
                قبلی
              </button>
              <span>
                صفحهٔ {page.toLocaleString("fa-IR")} · تعداد:{" "}
                {(data?.total || 0).toLocaleString("fa-IR")}
              </span>
              <button
                disabled={page * 30 >= (data?.total || 0)}
                onClick={() => {
                  setPage(page + 1);
                  setLoading(true);
                }}
              >
                بعدی
              </button>
            </div>
          </>
        )
      )}
    </section>
  );
}
