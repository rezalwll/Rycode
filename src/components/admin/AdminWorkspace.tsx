"use client";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import type { RichNode } from "@/lib/content-rules";
import { textDocument } from "@/lib/content-rules";
import { RichEditor } from "./RichEditor";
import { MediaLibrary } from "./MediaLibrary";
import styles from "./Admin.module.css";

type Row = Record<string, unknown>;
type Translation = {
  locale: "fa" | "en";
  title: string;
  summary: string;
  body: RichNode;
  approved: boolean;
  seoTitle?: string;
  seoDescription?: string;
  imageAlt?: string;
};
type ContentRow = {
  id?: string;
  kind: string;
  slug: string;
  status: string;
  featuredImage?: string;
  author?: string;
  category?: string;
  tags?: string[];
  relatedIds?: string[];
  serviceId?: string;
  sourceKey?: string | null;
  noIndex?: boolean;
  position?: number;
  scheduledAt?: string;
  translations: Translation[];
  revisions?: { id: string; createdAt: string; snapshot: ContentRow }[];
};
const titles: Record<string, string> = {
  overview: "مدیریت رایکد",
  leads: "درخواست‌های همکاری",
  content: "محتوا و انتشار",
  media: "کتابخانهٔ رسانه",
  faqs: "پرسش‌های متداول",
  settings: "تنظیمات سایت",
  redirects: "ریدایرکت‌ها",
  analytics: "گزارش ۳۰ روز اخیر",
  users: "دسترسی مدیران",
  audit: "سابقهٔ عملیات",
};
const statuses: Record<string, string> = {
  NEW: "جدید",
  CONTACTED: "تماس گرفته شد",
  QUALIFIED: "در حال بررسی",
  WON: "شروع همکاری",
  LOST: "ناموفق",
  SPAM: "اسپم",
  ARCHIVED: "آرشیو",
  DRAFT: "پیش‌نویس",
  PUBLISHED: "منتشرشده",
  SCHEDULED: "زمان‌بندی‌شده",
};
const kinds: Record<string, string> = {
  ARTICLE: "مقاله",
  SERVICE: "خدمت",
  PROJECT: "نمونه‌کار",
  PAGE: "صفحه",
};
async function api(resource: string, payload?: unknown) {
  const response = await fetch("/api/admin/" + resource, {
    ...(payload
      ? {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      : {}),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "عملیات انجام نشد");
  return result;
}
function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return rows.length ? (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, n) => (
                <td key={n}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className={styles.empty}>رکوردی پیدا نشد</p>
  );
}
function Input({
  label,
  name,
  value,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value?: string | number;
  type?: string;
  required?: boolean;
}) {
  return (
    <label>
      {label}
      <input
        name={name}
        defaultValue={value || ""}
        type={type}
        required={required}
      />
    </label>
  );
}
function ContentEditor({
  initial,
  role,
  onSaved,
  onClose,
}: {
  initial: ContentRow;
  role: string;
  onSaved: () => void;
  onClose: () => void;
}) {
  const [record, setRecord] = useState(initial);
  const [image, setImage] = useState(initial.featuredImage || "");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [revision, setRevision] = useState(0);
  const [choices, setChoices] = useState<ContentRow[]>([]);
  useEffect(() => {
    let active = true;
    api("content?choices=1")
      .then((result) => {
        if (active) setChoices(result);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);
  return (
    <section className={styles.panel}>
      <div className={styles.actions}>
        <h2>{record.id ? "ویرایش محتوا" : "محتوای جدید"}</h2>
        <button type="button" onClick={onClose}>
          بستن
        </button>
        {record.id && (
          <Link
            className={styles.button}
            href={"/admin/preview/" + record.id}
            target="_blank"
            rel="noreferrer"
          >
            پیش‌نمایش خصوصی ↗
          </Link>
        )}
      </div>
      <form
        key={revision}
        onSubmit={async (event) => {
          event.preventDefault();
          if (busy) return;
          setBusy(true);
          setMessage("");
          const f = new FormData(event.currentTarget);
          try {
            const translations: Translation[] = [];
            for (const locale of ["fa", "en"] as const) {
              const title = String(f.get(locale + "Title") || "").trim();
              if (!title) continue;
              translations.push({
                locale,
                title,
                summary: String(f.get(locale + "Summary") || ""),
                body: JSON.parse(String(f.get(locale + "Body"))),
                approved: f.get(locale + "Approved") === "on",
                seoTitle: String(f.get(locale + "SeoTitle") || ""),
                seoDescription: String(f.get(locale + "SeoDescription") || ""),
                imageAlt: String(f.get(locale + "ImageAlt") || ""),
              });
            }
            const saved = await api("content", {
              ...(record.id ? { id: record.id } : {}),
              kind: f.get("kind"),
              slug: f.get("slug"),
              status: f.get("status"),
              ...(image ? { featuredImage: image } : {}),
              author: f.get("author"),
              category: f.get("category"),
              tags: String(f.get("tags") || "")
                .split(/[,،]/)
                .map((x) => x.trim())
                .filter(Boolean),
              relatedIds: f.getAll("relatedIds").map(String),
              serviceId: String(f.get("serviceId") || ""),
              noIndex: f.get("noIndex") === "on",
              position: Number(f.get("position") || 0),
              ...(f.get("scheduledAt")
                ? {
                    scheduledAt: new Date(
                      String(f.get("scheduledAt")),
                    ).toISOString(),
                  }
                : {}),
              translations,
            });
            setRecord((current) => ({ ...current, id: saved.id }));
            const updated = await api("content?id=" + saved.id);
            setRecord(updated);
            setMessage("محتوا ذخیره شد");
            onSaved();
          } catch (e) {
            setMessage((e as Error).message);
          } finally {
            setBusy(false);
          }
        }}
      >
        <div className={styles.grid}>
          <label>
            نوع محتوا
            <select name="kind" defaultValue={record.kind}>
              {Object.entries(kinds).map(([value, label]) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <Input
            label="نشانی (Slug)"
            name="slug"
            value={record.slug}
            required
          />
          <label>
            وضعیت
            <select name="status" defaultValue={record.status}>
              {[
                "DRAFT",
                ...(role === "ADMIN"
                  ? ["PUBLISHED", "SCHEDULED", "ARCHIVED"]
                  : []),
              ].map((value) => (
                <option value={value} key={value}>
                  {statuses[value]}
                </option>
              ))}
            </select>
          </label>
          <Input
            label="زمان انتشار (زمان محلی دستگاه)"
            name="scheduledAt"
            type="datetime-local"
            value={
              record.scheduledAt
                ? new Date(
                    new Date(record.scheduledAt).getTime() -
                      new Date().getTimezoneOffset() * 60000,
                  )
                    .toISOString()
                    .slice(0, 16)
                : ""
            }
          />
          <Input
            label="نویسنده"
            name="author"
            value={record.author || "RYCODE"}
            required
          />
          <Input label="دسته‌بندی" name="category" value={record.category} />
          <Input
            label="برچسب‌ها، با کاما جدا کنید"
            name="tags"
            value={record.tags?.join(", ")}
          />
          <label>
            {record.kind === "SERVICE" ? "گروه خدمت" : "خدمت مرتبط"}
            {record.sourceKey?.startsWith("service:") && (
              <input
                type="hidden"
                name="serviceId"
                value={record.serviceId || ""}
              />
            )}
            <select
              key={choices.length}
              name="serviceId"
              disabled={record.sourceKey?.startsWith("service:")}
              defaultValue={record.serviceId || ""}
            >
              <option value="">بدون ارتباط</option>
              {choices
                .filter(
                  (item) =>
                    item.kind === "SERVICE" &&
                    !item.sourceKey?.startsWith("specialty:"),
                )
                .map((item) => (
                  <option key={item.id} value={item.serviceId || item.slug}>
                    {item.translations.find((t) => t.locale === "fa")?.title ||
                      item.slug}
                  </option>
                ))}
            </select>
          </label>
          <label>
            محتوای مرتبط (برای انتخاب چند مورد Ctrl را نگه دارید)
            <select
              name="relatedIds"
              key={choices.length}
              multiple
              defaultValue={record.relatedIds || []}
            >
              {choices
                .filter((item) => item.id !== record.id)
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {kinds[item.kind]} —{" "}
                    {item.translations.find((t) => t.locale === "fa")?.title ||
                      item.slug}
                  </option>
                ))}
            </select>
          </label>
          <Input
            label="ترتیب نمایش"
            name="position"
            type="number"
            value={record.position || 0}
          />
          <label className={styles.check}>
            <input
              name="noIndex"
              type="checkbox"
              defaultChecked={record.noIndex}
            />
            عدم ایندکس در موتورهای جست‌وجو
          </label>
          <label>
            تصویر شاخص
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="/media/… یا /assets/…"
              dir="ltr"
            />
          </label>
        </div>
        <details>
          <summary>انتخاب تصویر شاخص از کتابخانه</summary>
          <MediaLibrary onSelect={setImage} />
        </details>
        {(["fa", "en"] as const).map((locale) => {
          const text = record.translations.find((t) => t.locale === locale);
          return (
            <section
              key={locale}
              className={styles.panel}
              dir={locale === "fa" ? "rtl" : "ltr"}
            >
              <h2>
                {locale === "fa"
                  ? "محتوای فارسی"
                  : "English translation (optional)"}
              </h2>
              <div className={styles.grid}>
                <Input
                  label={locale === "fa" ? "عنوان" : "Title"}
                  name={locale + "Title"}
                  value={text?.title}
                  required={locale === "fa"}
                />
                <Input
                  label={locale === "fa" ? "توضیح تصویر" : "Image description"}
                  name={locale + "ImageAlt"}
                  value={text?.imageAlt}
                />
                <label className={styles.wide}>
                  {locale === "fa" ? "خلاصه" : "Summary"}
                  <textarea
                    name={locale + "Summary"}
                    defaultValue={text?.summary || ""}
                    maxLength={700}
                  />
                </label>
                <div className={styles.wide}>
                  <RichEditor
                    key={locale + revision}
                    name={locale + "Body"}
                    initial={text?.body || textDocument("")}
                  />
                </div>
                <Input
                  label="SEO Title"
                  name={locale + "SeoTitle"}
                  value={text?.seoTitle}
                />
                <Input
                  label="SEO Description"
                  name={locale + "SeoDescription"}
                  value={text?.seoDescription}
                />
                <label className={styles.check}>
                  <input
                    type="checkbox"
                    name={locale + "Approved"}
                    defaultChecked={text?.approved || false}
                  />
                  {locale === "fa"
                    ? "این نسخه آمادهٔ انتشار است"
                    : "Translation approved for publication"}
                </label>
              </div>
            </section>
          );
        })}
        <button className={styles.primary} disabled={busy}>
          {busy ? "در حال ذخیره…" : "ذخیرهٔ محتوا"}
        </button>
        {message && (
          <p className={styles.message} role="status">
            {message}
          </p>
        )}
      </form>
      {record.revisions && record.revisions.length > 0 && (
        <details>
          <summary>نسخه‌های ذخیره‌شده</summary>
          {record.revisions.map((r) => (
            <div key={r.id} className={styles.actions}>
              <time>{new Date(r.createdAt).toLocaleString("fa-IR")}</time>
              <button
                type="button"
                onClick={() => {
                  setRecord({
                    ...r.snapshot,
                    id: record.id,
                    revisions: record.revisions,
                  });
                  setImage(r.snapshot.featuredImage || "");
                  setRevision((n) => n + 1);
                  setMessage(
                    "نسخه در ویرایشگر بارگذاری شد؛ برای اعمال، ذخیره کنید",
                  );
                }}
              >
                بارگذاری این نسخه
              </button>
            </div>
          ))}
        </details>
      )}
    </section>
  );
}
export function AdminWorkspace({
  section,
  role,
}: {
  section: string;
  role: string;
}) {
  const [data, setData] = useState<unknown>(null);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(0);
  const [selected, setSelected] = useState<Row | null>(null);
  const [editing, setEditing] = useState<ContentRow | null>(null);
  const refresh = () => setReload((n) => n + 1);
  useEffect(() => {
    let active = true;
    const resource =
      section === "overview"
        ? role === "ADMIN"
          ? "analytics"
          : "content"
        : section;
    if (section === "media") return;
    const params = new URLSearchParams({
      page: String(page),
      q: query,
      ...(filter
        ? { [section === "content" ? "kind" : "status"]: filter }
        : {}),
    });
    api(resource + "?" + params)
      .then((result) => {
        if (active) {
          setData(result);
          setMessage("");
        }
      })
      .catch((error) => {
        if (active) setMessage(error.message);
      });
    return () => {
      active = false;
    };
  }, [section, role, page, query, filter, reload]);
  const rows = (
    Array.isArray(data) ? data : (data as { items?: Row[] } | null)?.items || []
  ) as Row[];
  const submit = async (
    event: FormEvent<HTMLFormElement>,
    payload: (f: FormData) => unknown,
  ) => {
    event.preventDefault();
    try {
      await api(section, payload(new FormData(event.currentTarget)));
      setMessage("ذخیره شد");
      setSelected(null);
      refresh();
    } catch (error) {
      setMessage((error as Error).message);
    }
  };
  return (
    <>
      <h1>{titles[section]}</h1>
      <p className={styles.muted}>سایت و درخواست‌ها را از اینجا مدیریت کنید.</p>
      {message && (
        <p role="status" className={styles.message}>
          {message}
        </p>
      )}
      {(section === "overview" || section === "analytics") && (
        <>
          <div className={styles.metrics}>
            {role === "ADMIN" ? (
              Object.entries({
                page_view: "بازدید صفحه‌ها",
                contact_click: "کلیک تماس",
                lead_saved: "ارسال موفق فرم",
              }).map(([name, label]) => (
                <article key={name}>
                  <span>{label}</span>
                  <strong>
                    {(
                      (
                        data as {
                          events?: { name: string; _count: number }[];
                        } | null
                      )?.events?.find((event) => event.name === name)?._count ||
                      0
                    ).toLocaleString("fa-IR")}
                  </strong>
                </article>
              ))
            ) : (
              <article>
                <Link href="/admin/content">نوشتن و مدیریت محتوا ↗</Link>
              </article>
            )}
          </div>
          {role === "ADMIN" && (
            <div className={styles.panel}>
              <h2>درخواست‌های ثبت‌شدهٔ واقعی</h2>
              <div className={styles.metrics}>
                {(
                  (
                    data as {
                      leads?: { status: string; _count: number }[];
                    } | null
                  )?.leads || []
                ).map((row) => (
                  <article key={row.status}>
                    <span>{statuses[row.status]}</span>
                    <strong>{row._count.toLocaleString("fa-IR")}</strong>
                  </article>
                ))}
              </div>
              <p className={styles.muted}>
                آمار بازدید، مجموع روزانهٔ رویدادهاست و تعداد افراد یکتا نیست؛
                درخواست‌ها مستقیماً از فرم‌های ذخیره‌شده خوانده می‌شود.
              </p>
            </div>
          )}
          <div className={styles.panel}>
            <h2>دسترسی سریع</h2>
            <div className={styles.actions}>
              <Link className={styles.button} href="/admin/content">
                محتوا
              </Link>
              <Link className={styles.button} href="/admin/media">
                رسانه‌ها
              </Link>
              {role === "ADMIN" && (
                <Link className={styles.button} href="/admin/leads">
                  درخواست‌های همکاری
                </Link>
              )}
            </div>
          </div>
          {role === "ADMIN" && (
            <Table
              head={["صفحه", "رویدادها"]}
              rows={(
                (data as { paths?: { path: string; _count: number }[] } | null)
                  ?.paths || []
              ).map((row) => [row.path, row._count])}
            />
          )}
        </>
      )}
      {(section === "content" || section === "leads") && (
        <>
          <div className={styles.toolbar}>
            <input
              aria-label="جست‌وجو"
              placeholder="جست‌وجو…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
            <select
              aria-label="فیلتر"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
            >
              <option value="">همه</option>
              {Object.entries(section === "content" ? kinds : statuses)
                .filter(
                  ([key]) =>
                    section === "content" ||
                    !["DRAFT", "PUBLISHED", "SCHEDULED"].includes(key),
                )
                .map(([value, label]) => (
                  <option value={value} key={value}>
                    {label}
                  </option>
                ))}
            </select>
            {section === "content" && (
              <button
                className={styles.primary}
                onClick={() =>
                  setEditing({
                    kind: "ARTICLE",
                    slug: "",
                    status: "DRAFT",
                    translations: [],
                  })
                }
              >
                + محتوای جدید
              </button>
            )}
          </div>
          <Table
            head={
              section === "content"
                ? ["عنوان", "نوع", "وضعیت", "نشانی", "عملیات"]
                : ["نام و کد پیگیری", "راه تماس", "وضعیت", "تاریخ", "عملیات"]
            }
            rows={rows.map((row) =>
              section === "content"
                ? [
                    (row.translations as Translation[])?.find(
                      (t) => t.locale === "fa",
                    )?.title || String(row.slug),
                    kinds[String(row.kind)],
                    statuses[String(row.status)],
                    String(row.slug),
                    <button
                      key="edit"
                      onClick={async () => {
                        try {
                          setEditing(await api("content?id=" + row.id));
                        } catch (e) {
                          setMessage((e as Error).message);
                        }
                      }}
                    >
                      ویرایش
                    </button>,
                  ]
                : [
                    <span key="name">
                      {String(row.name)}
                      <br />
                      <small dir="ltr">{String(row.receipt)}</small>
                    </span>,
                    <span key="contact" dir="ltr">
                      {String(row.phone || row.email || "—")}
                    </span>,
                    statuses[String(row.status)],
                    new Date(String(row.createdAt)).toLocaleDateString("fa-IR"),
                    <button
                      key="open"
                      onClick={async () => {
                        try {
                          setSelected(await api("leads?id=" + row.id));
                        } catch (e) {
                          setMessage((e as Error).message);
                        }
                      }}
                    >
                      بررسی
                    </button>,
                  ],
            )}
          />
          <div className={styles.actions}>
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              قبلی
            </button>
            <span>{page}</span>
            <button
              disabled={
                page * 30 >=
                Number((data as { total?: number } | null)?.total || 0)
              }
              onClick={() => setPage((p) => p + 1)}
            >
              بعدی
            </button>
            <small>
              تعداد: {Number((data as { total?: number } | null)?.total || 0)}
            </small>
          </div>
        </>
      )}
      {editing && section === "content" && (
        <ContentEditor
          key={editing.id || "new"}
          initial={editing}
          role={role}
          onClose={() => setEditing(null)}
          onSaved={refresh}
        />
      )}
      {selected && section === "leads" && (
        <div className={styles.panel}>
          <div className={styles.actions}>
            <h2>{String(selected.name)}</h2>
            <button onClick={() => setSelected(null)}>بستن</button>
          </div>
          <p dir="ltr">
            {String(selected.phone || "")} {String(selected.email || "")}
          </p>
          <small>
            خدمت: {String(selected.service || "—")} · صفحه:{" "}
            {String(selected.sourcePath)}
          </small>
          <p style={{ whiteSpace: "pre-wrap" }}>{String(selected.message)}</p>
          <form
            className={styles.grid}
            onSubmit={(e) =>
              submit(e, (f) => ({
                id: selected.id,
                status: f.get("status"),
                ...(String(f.get("note") || "").trim()
                  ? { note: f.get("note") }
                  : {}),
              }))
            }
          >
            <label>
              وضعیت
              <select name="status" defaultValue={String(selected.status)}>
                {Object.entries(statuses)
                  .filter(
                    ([s]) => !["DRAFT", "PUBLISHED", "SCHEDULED"].includes(s),
                  )
                  .map(([s, t]) => (
                    <option key={s} value={s}>
                      {t}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              یادداشت داخلی
              <textarea name="note" maxLength={5000} />
            </label>
            <button className={styles.primary}>ذخیرهٔ پیگیری</button>
          </form>
          {((selected.notes as Row[]) || []).map((note) => (
            <div key={String(note.id)} className={styles.note}>
              <p>{String(note.body)}</p>
              <small>
                {new Date(String(note.createdAt)).toLocaleString("fa-IR")}
              </small>
            </div>
          ))}
        </div>
      )}
      {section === "media" && <MediaLibrary />}
      {section === "settings" && (
        <div className={styles.panel}>
          {[
            "contact.phone",
            "contact.email",
            "contact.address.fa",
            "contact.address.en",
            "social.instagram",
            "social.telegram",
            "social.bale",
          ].map((key) => (
            <form
              key={key + reload}
              className={styles.toolbar}
              onSubmit={(e) =>
                submit(e, (f) => ({ key, value: f.get("value") }))
              }
            >
              <label style={{ flex: 1 }}>
                {key}
                <input
                  name="value"
                  dir={key.endsWith(".fa") ? "rtl" : "ltr"}
                  defaultValue={String(
                    rows.find((row) => row.key === key)?.value || "",
                  )}
                />
              </label>
              <button>ذخیره</button>
            </form>
          ))}
        </div>
      )}
      {section === "redirects" && (
        <>
          <form
            className={styles.panel + " " + styles.grid}
            onSubmit={(e) =>
              submit(e, (f) => ({
                source: f.get("source"),
                destination: f.get("destination"),
                permanent: f.get("permanent") === "on",
              }))
            }
          >
            <Input label="مسیر قدیمی (/old-path)" name="source" required />
            <Input label="مسیر جدید (/new-path)" name="destination" required />
            <label className={styles.check}>
              <input type="checkbox" name="permanent" defaultChecked />
              انتقال دائمی ۳۰۸
            </label>
            <button className={styles.primary}>ذخیرهٔ انتقال</button>
          </form>
          <Table
            head={["مبدأ", "مقصد", "نوع", "عملیات"]}
            rows={rows.map((row) => [
              String(row.source),
              String(row.destination),
              row.permanent ? "308" : "307",
              <button
                key="remove"
                onClick={async () => {
                  try {
                    await api("redirects", { action: "remove", id: row.id });
                    refresh();
                  } catch (error) {
                    setMessage((error as Error).message);
                  }
                }}
              >
                حذف انتقال
              </button>,
            ])}
          />
        </>
      )}
      {section === "faqs" && (
        <>
          <form
            key={String(selected?.id || "new")}
            className={styles.panel + " " + styles.grid}
            onSubmit={(e) =>
              submit(e, (f) => ({
                ...(selected ? { id: selected.id } : {}),
                scope: f.get("scope"),
                locale: f.get("locale"),
                question: f.get("question"),
                answer: f.get("answer"),
                published: f.get("published") === "on",
                position: Number(f.get("position")),
              }))
            }
          >
            <Input
              label="بخش (home یا services/build)"
              name="scope"
              value={String(selected?.scope || "home")}
              required
            />
            <label>
              زبان
              <select
                name="locale"
                defaultValue={String(selected?.locale || "fa")}
              >
                <option value="fa">فارسی</option>
                <option value="en">English</option>
              </select>
            </label>
            <Input
              label="سؤال"
              name="question"
              value={String(selected?.question || "")}
              required
            />
            <label>
              پاسخ
              <textarea
                name="answer"
                defaultValue={String(selected?.answer || "")}
                required
              />
            </label>
            <Input
              label="ترتیب"
              name="position"
              type="number"
              value={Number(selected?.position || 0)}
            />
            <label className={styles.check}>
              <input
                name="published"
                type="checkbox"
                defaultChecked={Boolean(selected?.published)}
              />
              منتشر شود
            </label>
            <button className={styles.primary}>ذخیرهٔ پرسش</button>
            {selected && (
              <button type="button" onClick={() => setSelected(null)}>
                پرسش جدید
              </button>
            )}
          </form>
          <Table
            head={["سؤال", "بخش", "زبان", "وضعیت", "ویرایش"]}
            rows={rows.map((row) => [
              String(row.question),
              String(row.scope),
              String(row.locale),
              row.published ? "منتشرشده" : "پیش‌نویس",
              <button key="edit" onClick={() => setSelected(row)}>
                ویرایش
              </button>,
            ])}
          />
        </>
      )}
      {section === "users" && (
        <Table
          head={["نام", "ایمیل", "نقش"]}
          rows={rows.map((row) => [
            String(row.name),
            String(row.email),
            <select
              key="role"
              aria-label={"نقش " + row.name}
              defaultValue={String(row.role)}
              onChange={async (event) => {
                try {
                  await api("users", { id: row.id, role: event.target.value });
                  setMessage("دسترسی به‌روز شد");
                  refresh();
                } catch (e) {
                  setMessage((e as Error).message);
                  refresh();
                }
              }}
            >
              <option value="ADMIN">مدیر</option>
              <option value="EDITOR">ویرایشگر</option>
            </select>,
          ])}
        />
      )}
      {section === "audit" && (
        <>
          <Table
            head={["عملیات", "شناسهٔ رکورد", "مدیر", "زمان"]}
            rows={rows.map((row) => [
              String(row.action),
              String(row.entityId),
              String(row.actorId),
              new Date(String(row.createdAt)).toLocaleString("fa-IR"),
            ])}
          />
          <div className={styles.actions}>
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              قبلی
            </button>
            <button
              disabled={rows.length < 30}
              onClick={() => setPage((p) => p + 1)}
            >
              بعدی
            </button>
          </div>
        </>
      )}
    </>
  );
}
