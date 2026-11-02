"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageSquare, Send } from "lucide-react";
import type { CommentPage } from "@/lib/comments";
import { articleDate } from "@/lib/article";
import styles from "./Comments.module.css";

export function Comments({
  articleId,
  fa,
  initial,
}: {
  articleId: string;
  fa: boolean;
  initial: CommentPage | null;
}) {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(!initial);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  const submission = useRef({ startedAt: 0, requestKey: "" });
  const submitting = useRef(false);
  const locale = fa ? "fa" : "en";
  useEffect(() => {
    submission.current = {
      startedAt: Date.now(),
      requestKey: crypto.randomUUID(),
    };
  }, []);
  async function loadMore() {
    setLoading(true);
    try {
      const page = (data?.page || 0) + 1;
      const response = await fetch(
        "/api/comments?" +
          new URLSearchParams({ articleId, locale, page: String(page) }),
        { cache: "no-store" },
      );
      if (!response.ok) throw new Error();
      const next: CommentPage = await response.json();
      setData((current) => ({
        ...next,
        items: [
          ...new Map(
            [...(current?.items || []), ...next.items].map((item) => [
              item.id,
              item,
            ]),
          ).values(),
        ],
      }));
      setLoadError(false);
    } catch {
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }
  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    submitting.current = true;
    setSending(true);
    setResult(null);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articleId,
          locale,
          name: fields.get("name"),
          email: String(fields.get("email") || "").trim(),
          body: fields.get("body"),
          website: fields.get("website"),
          ...submission.current,
        }),
      });
      const responseBody = await response.json();
      if (!response.ok)
        throw new Error(
          responseBody.error ||
            (fa ? "ثبت دیدگاه انجام نشد" : "Could not submit comment"),
        );
      setResult({
        ok: true,
        text: fa
          ? "دیدگاهت ثبت شد؛ پس از تأیید رایکد همین‌جا نمایش داده می‌شود"
          : "Your comment was received. It will appear here after RYCODE approves it.",
      });
      form.reset();
      submission.current = {
        startedAt: Date.now(),
        requestKey: crypto.randomUUID(),
      };
    } catch (error) {
      setResult({
        ok: false,
        text:
          error instanceof Error
            ? error.message
            : fa
              ? "ارتباط برقرار نشد؛ دوباره تلاش کن"
              : "Connection failed. Please retry.",
      });
      // Refresh expired timing while keeping the idempotency key for safe retries.
      submission.current.startedAt = Date.now();
    } finally {
      setSending(false);
      submitting.current = false;
    }
  }
  return (
    <section
      className={styles.comments}
      id="comments"
      aria-labelledby="comments-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>
            <MessageSquare size={17} aria-hidden />
            {fa ? "گفت‌وگو ادامه دارد" : "JOIN THE CONVERSATION"}
          </p>
          <h2 id="comments-title">
            {fa ? "دیدگاه‌ها" : "Comments"}
            {data && (
              <span>{data.total.toLocaleString(fa ? "fa-IR" : "en-US")}</span>
            )}
          </h2>
        </div>
        <a href="#comment-form">
          {fa ? "دیدگاهت را بنویس" : "Leave a comment"} ↙
        </a>
      </div>
      <div className={styles.layout}>
        <div
          className={styles.discussion}
          aria-live="polite"
          aria-busy={loading}
        >
          {data && !data.items.length && (
            <div className={styles.empty}>
              <MessageSquare size={28} aria-hidden />
              <h3>
                {fa ? "اولین نفر این گفت‌وگو باش" : "Start the conversation"}
              </h3>
              <p>
                {fa
                  ? "سؤال یا تجربه‌ات دربارهٔ این مقاله را با ما به اشتراک بگذار"
                  : "Share a question or your experience with this article."}
              </p>
            </div>
          )}
          {data?.items.map((item) => (
            <article key={item.id} className={styles.comment}>
              <header>
                <span className={styles.avatar} aria-hidden>
                  {Array.from(item.name)[0]}
                </span>
                <strong>
                  <bdi>{item.name}</bdi>
                </strong>
                <time dateTime={item.createdAt}>
                  {articleDate(item.createdAt, locale)}
                </time>
              </header>
              <p dir="auto">{item.body}</p>
              {item.reply && (
                <div className={styles.reply}>
                  <strong>
                    RYCODE <span>{fa ? "پاسخ مدیر" : "Admin reply"}</span>
                  </strong>
                  <p dir="auto">{item.reply}</p>
                </div>
              )}
            </article>
          ))}
          {loadError && (
            <p role="alert">
              {fa ? "دریافت دیدگاه‌ها ممکن نشد" : "Could not load comments"}
            </p>
          )}
          {(loadError || (data && data.page * data.pageSize < data.total)) && (
            <button
              type="button"
              className={styles.more}
              disabled={loading}
              onClick={loadMore}
            >
              {loading
                ? fa
                  ? "در حال دریافت…"
                  : "Loading…"
                : loadError
                  ? fa
                    ? "تلاش دوباره"
                    : "Try again"
                  : fa
                    ? "دیدگاه‌های بیشتر"
                    : "More comments"}
            </button>
          )}
        </div>
        <form
          id="comment-form"
          className={styles.form}
          onSubmit={send}
          aria-label={fa ? "ارسال دیدگاه" : "Submit a comment"}
        >
          <h3>{fa ? "نوبت توست" : "Your turn"}</h3>
          <p>
            {fa
              ? "دیدگاه‌ها پس از بررسی و تأیید منتشر می‌شوند"
              : "Comments are published after review and approval."}
          </p>
          <fieldset disabled={sending}>
            <label htmlFor="comment-name">
              {fa ? "نام نمایشی" : "Display name"}
            </label>
            <input
              id="comment-name"
              name="name"
              autoComplete="name"
              dir="auto"
              required
              minLength={2}
              maxLength={80}
            />
            <label htmlFor="comment-email">
              {fa
                ? "ایمیل (اختیاری، منتشر نمی‌شود)"
                : "Email (optional, kept private)"}
            </label>
            <input
              id="comment-email"
              name="email"
              type="email"
              autoComplete="email"
              dir="ltr"
              maxLength={254}
            />
            <label htmlFor="comment-body">
              {fa ? "دیدگاه تو" : "Your comment"}
            </label>
            <textarea
              id="comment-body"
              name="body"
              dir="auto"
              required
              minLength={5}
              maxLength={3000}
              rows={5}
              placeholder={
                fa
                  ? "سؤال، پیشنهاد یا تجربه‌ات را بنویس…"
                  : "Write your question, suggestion or experience…"
              }
            />
            <div className={styles.honey} aria-hidden="true">
              <label htmlFor="comment-website">Website</label>
              <input
                id="comment-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <button className={styles.submit} type="submit">
              <span>
                {sending
                  ? fa
                    ? "در حال ارسال…"
                    : "Sending…"
                  : fa
                    ? "ارسال دیدگاه"
                    : "Submit comment"}
              </span>
              <Send size={17} aria-hidden />
            </button>
          </fieldset>
          {result && (
            <p
              className={result.ok ? styles.success : styles.error}
              role={result.ok ? "status" : "alert"}
            >
              {result.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
