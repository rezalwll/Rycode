"use client";
import Link from "next/link";
import { ProjectCardArtwork } from "@/components/content/ProjectCardArtwork";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Inbox, Plus, Search, X } from "lucide-react";
import type { RichNode } from "@/lib/content-rules";
import { contentImagePath, normalizeDigits, normalizeSlug, projectClientLimit, textDocument } from "@/lib/content-rules";
import { RichEditor } from "./RichEditor";
import { MediaLibrary } from "./MediaLibrary";
import { PortfolioDisplayFields } from "./PortfolioDisplayFields";
import { ProjectGalleryFields } from "./ProjectGalleryFields";
import { AdminComments } from "./AdminComments";
import {
  BrandLoading,
  BrandLoadingMark,
  BrandTableLoading,
} from "@/components/BrandLoading";
import {
  articleStatuses,
  leadStatuses,
  statusLabels as statuses,
} from "./admin-labels";
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
  projectYear?: number | null;
  projectClient?: string;
  projectGallery?: string[];
  author?: string;
  category?: string;
  tags?: string[];
  relatedIds?: string[];
  serviceId?: string;
  sourceKey?: string | null;
  noIndex?: boolean;
  featured?: boolean;
  sample?: boolean;
  position?: number;
  scheduledAt?: string;
  translations: Translation[];
  revisions?: { id: string; createdAt: string; snapshot: ContentRow }[];
};
const titles: Record<string, string> = {
  leads: "درخواست‌های همکاری",
  comments: "دیدگاه‌های بلاگ",
  content: "نوشته‌های بلاگ",
  projects: "صفحه نمونه‌کارها",
  media: "کتابخانه رسانه",
  faqs: "پرسش‌های متداول",
  settings: "تنظیمات سایت",
  redirects: "ریدایرکت‌ها",
  users: "دسترسی مدیران",
  audit: "سابقه عملیات",
};
const kinds: Record<string, string> = {
  ARTICLE: "مقاله",
  SERVICE: "خدمت",
  PROJECT: "نمونه‌کار",
  PAGE: "صفحه",
};
const blankArticle: ContentRow = {
  kind: "ARTICLE",
  slug: "",
  status: "DRAFT",
  translations: [],
};
const blankProject: ContentRow = { ...blankArticle, kind: "PROJECT" };
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
  onChange,
}: {
  label: string;
  name: string;
  value?: string | number;
  type?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}) {
  return (
    <label>
      {label}
      <input
        name={name}
        defaultValue={value || ""}
        type={type}
        required={required}
        onChange={
          onChange ? (event) => onChange(event.target.value) : undefined
        }
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
  const isProject = initial.kind === "PROJECT";
  const resource = isProject ? "projects" : "content";
  const [projectSlug, setProjectSlug] = useState(initial.slug);
  const [slugEdited, setSlugEdited] = useState(Boolean(initial.slug));
  const [image, setImage] = useState(initial.featuredImage || "");
  const [projectGallery, setProjectGallery] = useState(initial.projectGallery ?? []);
  const [projectCopy, setProjectCopy] = useState<Partial<Record<Translation["locale"], Partial<Pick<Translation, "title" | "summary">>>>>({});
  const cover = contentImagePath.safeParse(image.trim());
  function updateProjectCopy(locale: Translation["locale"], field: "title" | "summary", value: string) {
    setProjectCopy((current) => ({
      ...current,
      [locale]: { ...current[locale], [field]: value },
    }));
  }
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [revision, setRevision] = useState(0);
  const [choices, setChoices] = useState<ContentRow[]>([]);
  const editorPanel = useRef<HTMLElement>(null);
  useEffect(() => {
    editorPanel.current?.focus();
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
    <section className={styles.panel} ref={editorPanel} tabIndex={-1}>
      <div className={styles.actions}>
        <h2>
          {isProject
            ? record.id
              ? "ویرایش نمونه‌کار"
              : "نمونه‌کار جدید"
            : record.id
              ? "ویرایش نوشته"
              : "نوشته جدید"}
        </h2>
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
        {isProject && record.id && (
          <Link
            className={styles.button}
            href={"/admin/home-projects?project=" + record.id}
          >
            ویرایش کارت صفحه اصلی
          </Link>
        )}
        {isProject && record.status === "PUBLISHED" && (
          <Link
            className={styles.button}
            href={"/work/" + encodeURIComponent(record.slug)}
            target="_blank"
            rel="noreferrer"
          >
            مشاهده در سایت ↗
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
            const saved = await api(resource, {
              ...(record.id ? { id: record.id } : {}),
              kind: initial.kind,
              slug: f.get("slug"),
              status: f.get("status"),
              ...(image.trim() ? { featuredImage: image.trim() } : {}),
              ...(isProject && {
                projectYear: f.get("projectYear") ? Number(normalizeDigits(String(f.get("projectYear")))) : null,
                projectClient: f.get("projectClient"),
                projectGallery,
              }),
              author: f.get("author"),
              category: f.get("category"),
              tags: String(f.get("tags") || "")
                .split(/[,،]/)
                .map((x) => x.trim())
                .filter(Boolean),
              relatedIds: f.getAll("relatedIds").map(String),
              serviceId: String(f.get("serviceId") || ""),
              noIndex: f.get("noIndex") === "on",
              ...(!isProject && { featured: f.get("featured") === "on" }),
              sample: f.get("sample") === "on",
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
            const updated = await api(resource + "?id=" + saved.id);
            setRecord(updated);
            if (isProject) {
              setProjectSlug(updated.slug);
              setSlugEdited(true);
            }
            setMessage(isProject ? "نمونه‌کار ذخیره شد" : "نوشته ذخیره شد");
            onSaved();
          } catch (e) {
            setMessage((e as Error).message);
          } finally {
            setBusy(false);
          }
        }}
      >
        <div className={styles.grid}>
          {isProject ? (
            <label>
              نشانی صفحه نمونه‌کار
              <input
                name="slug"
                value={projectSlug}
                maxLength={150}
                dir="auto"
                required
                onChange={(event) => {
                  setProjectSlug(event.target.value);
                  setSlugEdited(Boolean(event.target.value));
                }}
              />
            </label>
          ) : (
            <Input
              label="نشانی (Slug)"
              name="slug"
              value={record.slug}
              required
            />
          )}
          <label>
            وضعیت
            <select name="status" defaultValue={record.status}>
              {(role === "ADMIN" ? articleStatuses : ["DRAFT"]).map((value) => (
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
          <Input label={isProject ? "حوزه پروژه (دسته‌بندی)" : "دسته‌بندی"} name="category" value={record.category} />
          {isProject && (
            <>
              <label>
                سال اجرای پروژه
                <input name="projectYear" inputMode="numeric" maxLength={4} defaultValue={record.projectYear ?? ""} />
              </label>
              <label>
                نام کارفرما
                <input name="projectClient" maxLength={projectClientLimit} defaultValue={record.projectClient ?? ""} />
              </label>
            </>
          )}
          <Input
            label="برچسب‌ها، با کاما جدا کنید"
            name="tags"
            value={record.tags?.join(", ")}
          />
          <label>
            خدمت مرتبط
            <select
              key={choices.length}
              name="serviceId"
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
            label={isProject ? "ترتیب در صفحه نمونه‌کارها" : "ترتیب نمایش"}
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
          {!isProject && (
            <label className={styles.check}>
              <input name="featured" type="checkbox" defaultChecked={record.featured} />
              مقاله منتخب بلاگ
            </label>
          )}
          <label className={styles.check}>
            <input
              name="sample"
              type="checkbox"
              defaultChecked={record.sample}
            />
            {isProject
              ? "نمونه آزمایشی (خارج از فهرست عمومی)"
              : "محتوای نمونه (برچسب نمونه و عدم ایندکس)"}
          </label>
          <label>
            {isProject ? "تصویر شاخص نمونه‌کار" : "تصویر شاخص"}
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
        {isProject && <ProjectGalleryFields images={projectGallery} onChange={setProjectGallery} />}
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
                  label={
                    locale === "fa"
                      ? isProject
                        ? "عنوان پروژه"
                        : "عنوان"
                      : "Title"
                  }
                  name={locale + "Title"}
                  value={text?.title}
                  required={locale === "fa"}
                  onChange={
                    isProject
                      ? (title) => {
                          updateProjectCopy(locale, "title", title);
                          if (locale === "fa" && !slugEdited) {
                            setProjectSlug(normalizeSlug(title).slice(0, 150));
                          }
                        }
                      : undefined
                  }
                />
                <Input
                  label={locale === "fa" ? "توضیح تصویر" : "Image description"}
                  name={locale + "ImageAlt"}
                  value={text?.imageAlt}
                />
                <label className={styles.wide}>
                  {locale === "fa"
                    ? isProject
                      ? "خلاصه برای کارت نمونه‌کار"
                      : "خلاصه"
                    : "Summary"}
                  <textarea
                    name={locale + "Summary"}
                    defaultValue={text?.summary || ""}
                    onChange={isProject ? (event) => updateProjectCopy(locale, "summary", event.target.value) : undefined}
                    maxLength={700}
                  />
                </label>
                {isProject && (
                  <div className={styles.wide}>
                    <p className={styles.muted}>{locale === "fa" ? "پیش‌نمایش کارت در فهرست نمونه‌کارها" : "Portfolio listing card preview"}</p>
                    <ProjectCardArtwork
                      image={cover.success ? cover.data : null}
                      title={(projectCopy[locale]?.title ?? text?.title)?.trim() || (locale === "fa" ? "عنوان پروژه" : "Project title")}
                      summary={(projectCopy[locale]?.summary ?? text?.summary ?? "").trim()}
                      number={locale === "fa" ? "۰۱" : "01"}
                      locale={locale}
                      preview
                    />
                  </div>
                )}
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
                    ? "این نسخه آماده انتشار است"
                    : "Translation approved for publication"}
                </label>
              </div>
            </section>
          );
        })}
        <button className={styles.primary} disabled={busy}>
          {busy && <BrandLoadingMark />}
          {busy
            ? "در حال ذخیره…"
            : isProject
              ? "ذخیره نمونه‌کار"
              : "ذخیره نوشته"}
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
                  setProjectGallery(r.snapshot.projectGallery ?? []);
                  setProjectCopy({});
                  if (isProject) {
                    setProjectSlug(r.snapshot.slug);
                    setSlugEdited(true);
                  }
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
  initialStatus,
  initialItem,
  newEntry,
  workExamplesSetting,
}: {
  section: string;
  role: string;
  initialStatus: string;
  initialItem?: string;
  newEntry: boolean;
  workExamplesSetting?: boolean;
}) {
  const router = useRouter();
  const isProject = section === "projects";
  const isContent = section === "content" || isProject;
  const blankEntry = isProject ? blankProject : blankArticle;
  const [result, setResult] = useState<{
    key: string;
    data?: unknown;
    error?: string;
  } | null>(null);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(initialStatus);
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(0);
  const [selected, setSelected] = useState<Row | null>(null);
  const [openingLead, setOpeningLead] = useState<string | null>(
    section === "leads" ? initialItem || null : null,
  );
  const [editing, setEditing] = useState<ContentRow | null>(
    newEntry ? blankEntry : null,
  );
  const [openingEntry, setOpeningEntry] = useState(
    Boolean(initialItem && isContent),
  );
  const fetchList = section !== "media" && section !== "comments";
  const requestUrl =
    section +
    "?" +
    new URLSearchParams({
      page: String(page),
      q: query,
      ...(filter ? { status: filter } : {}),
    });
  const requestKey = requestUrl + ":" + reload;
  const currentResult = result?.key === requestKey ? result : null;
  const loading = fetchList && !currentResult;
  const listError = currentResult?.error;
  const data = currentResult?.data ?? null;
  const leadDetail = useRef<HTMLElement>(null);
  const leadTrigger = useRef<HTMLButtonElement>(null);
  const refresh = () => setReload((n) => n + 1);
  useEffect(() => {
    if (selected && section === "leads") leadDetail.current?.focus();
  }, [selected, section]);
  useEffect(() => {
    if (!fetchList) return;
    let active = true;
    api(requestUrl)
      .then((data) => {
        if (active) setResult({ key: requestKey, data });
      })
      .catch((error: Error) => {
        if (active) setResult({ key: requestKey, error: error.message });
      });
    return () => {
      active = false;
    };
  }, [fetchList, requestKey, requestUrl]);
  useEffect(() => {
    if (!initialItem) return;
    let active = true;
    api(section + "?id=" + initialItem)
      .then((item) => {
        if (!active) return;
        if (section === "leads") setSelected(item);
        else setEditing(item);
      })
      .catch((error: Error) => {
        if (active) setMessage(error.message);
      })
      .finally(() => {
        if (active) {
          setOpeningLead(null);
          setOpeningEntry(false);
        }
      });
    return () => {
      active = false;
    };
  }, [initialItem, section]);
  const rows = (
    Array.isArray(data) ? data : (data as { items?: Row[] } | null)?.items || []
  ) as Row[];
  async function openLead(id: string, trigger: HTMLButtonElement) {
    setOpeningLead(id);
    leadTrigger.current = trigger;
    try {
      const lead = await api("leads?id=" + id);
      if (!lead) throw new Error("درخواست پیدا نشد.");
      setSelected(lead);
      setMessage("");
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setOpeningLead(null);
    }
  }
  function closeLead() {
    setSelected(null);
    if (initialItem) router.replace("/admin/leads", { scroll: false });
    leadTrigger.current?.focus();
  }
  const submit = async (
    event: FormEvent<HTMLFormElement>,
    payload: (f: FormData) => unknown,
  ) => {
    event.preventDefault();
    try {
      await api(section, payload(new FormData(event.currentTarget)));
      setMessage("ذخیره شد");
      if (section === "leads") closeLead();
      else setSelected(null);
      refresh();
    } catch (error) {
      setMessage((error as Error).message);
    }
  };
  return (
    <>
      <header className={styles.pageHeading}>
        <h1>{titles[section]}</h1>
        {section === "leads" && (
          <p className={styles.muted}>
            پیام‌های فرم تماس را بخوانید و وضعیت پیگیری را ثبت کنید.
          </p>
        )}
        {isProject && (
          <p className={styles.muted}>
            کاور، ترتیب فهرست، مشخصات و گالری صفحهٔ هر پروژه را اینجا مدیریت کنید.
          </p>
        )}
      </header>
      {workExamplesSetting !== undefined && !editing && (
        <PortfolioDisplayFields setting="portfolio.workExamples" enabled={workExamplesSetting} />
      )}
      {section === "comments" && <AdminComments />}
      {listError && (
        <p role="alert" className={styles.message}>
          {listError}
        </p>
      )}
      {loading && !isContent && section !== "leads" && (
        <BrandTableLoading label="در حال دریافت اطلاعات…" />
      )}
      {openingEntry && (
        <BrandLoading
          label={
            isProject ? "در حال باز کردن نمونه‌کار…" : "در حال باز کردن نوشته…"
          }
        />
      )}
      {message && (
        <p role="status" className={styles.message}>
          {message}
        </p>
      )}
      {editing && isContent && (
        <ContentEditor
          key={editing.id || "new"}
          initial={editing}
          role={role}
          onClose={() => {
            setEditing(null);
            if (initialItem || newEntry) {
              router.replace("/admin/" + section, { scroll: false });
            }
          }}
          onSaved={refresh}
        />
      )}
      {(isContent || section === "leads") && (
        <>
          <div className={styles.toolbar}>
            <div className={styles.searchField}>
              <Search size={18} aria-hidden="true" />
              <input
                aria-label="جست‌وجو"
                placeholder={
                  section === "leads"
                    ? "نام، شماره تماس یا کد پیگیری…"
                    : isProject
                      ? "جست‌وجوی نمونه‌کار…"
                      : "جست‌وجوی نوشته…"
                }
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <select
              aria-label="وضعیت"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
            >
              <option value="">همه</option>
              {(isContent ? articleStatuses : leadStatuses).map((value) => (
                <option value={value} key={value}>
                  {statuses[value]}
                </option>
              ))}
            </select>
            {isContent && (
              <button
                className={styles.primary}
                onClick={() => setEditing(blankEntry)}
              >
                <Plus size={17} aria-hidden="true" />{" "}
                {isProject ? "نمونه‌کار جدید" : "نوشته جدید"}
              </button>
            )}
          </div>
          {section === "leads" ? (
            <div className={styles.inbox} data-open={Boolean(selected)}>
              <div className={styles.inboxList}>
                {loading ? (
                  <BrandTableLoading label="در حال دریافت درخواست‌ها…" />
                ) : rows.length ? (
                  <ul className={styles.leadList}>
                    {rows.map((row) => (
                      <li key={String(row.id)}>
                        <button
                          type="button"
                          className={styles.leadRow}
                          aria-expanded={selected?.id === row.id}
                          disabled={openingLead !== null}
                          onClick={(event) =>
                            void openLead(String(row.id), event.currentTarget)
                          }
                        >
                          <span className={styles.leadAvatar}>
                            <Inbox size={17} aria-hidden="true" />
                          </span>
                          <span className={styles.leadIdentity}>
                            <strong dir="auto">{String(row.name)}</strong>
                            <small dir="ltr">{String(row.receipt)}</small>
                            <small dir="ltr">
                              {String(row.phone || row.email || "—")}
                            </small>
                          </span>
                          <span className={styles.leadMeta}>
                            <span
                              className={styles.badge}
                              data-status={String(row.status)}
                            >
                              {statuses[String(row.status)]}
                            </span>
                            <time dateTime={String(row.createdAt)}>
                              {new Date(
                                String(row.createdAt),
                              ).toLocaleDateString("fa-IR")}
                            </time>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  !listError && (
                    <p className={styles.empty}>درخواستی پیدا نشد.</p>
                  )
                )}
              </div>
              {openingLead ? (
                <BrandTableLoading label="در حال باز کردن درخواست…" />
              ) : selected ? (
                <section
                  className={styles.leadDetail}
                  tabIndex={-1}
                  ref={leadDetail}
                  key={String(selected.id)}
                >
                  <div className={styles.detailHeading}>
                    <div>
                      <small dir="ltr">{String(selected.receipt)}</small>
                      <h2>{String(selected.name)}</h2>
                    </div>
                    <button
                      onClick={closeLead}
                      aria-label="بستن جزئیات درخواست"
                    >
                      <X size={17} aria-hidden="true" />
                    </button>
                  </div>
                  <div className={styles.contactDetails}>
                    {typeof selected.phone === "string" &&
                      /^\+?[0-9]+$/.test(selected.phone) && (
                        <a href={"tel:" + selected.phone} dir="ltr">
                          {selected.phone}
                        </a>
                      )}
                    {typeof selected.email === "string" && selected.email && (
                      <a href={"mailto:" + selected.email} dir="ltr">
                        {selected.email}
                      </a>
                    )}
                  </div>
                  <small>
                    خدمت: {String(selected.service || "—")} · صفحه:{" "}
                    {String(selected.sourcePath)}
                  </small>
                  {selected.attribution != null &&
                    (() => {
                      const attribution = selected.attribution as Record<
                        string,
                        string
                      >;
                      return (
                        <div className={styles.note}>
                          <small>
                            صفحه ورود <bdi>{attribution.landing || "—"}</bdi>
                          </small>
                          <small>
                            منبع{" "}
                            <bdi>
                              {attribution.source === "unknown"
                                ? "نامشخص"
                                : attribution.source}
                            </bdi>
                          </small>
                          {attribution.campaign && (
                            <small>
                              کمپین <bdi>{attribution.campaign}</bdi>
                            </small>
                          )}
                        </div>
                      );
                    })()}
                  <div className={styles.leadMessage}>
                    <h3>متن پیام</h3>
                    <p dir="auto">{String(selected.message)}</p>
                  </div>
                  <form
                    className={styles.leadFollowup}
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
                      <select
                        name="status"
                        defaultValue={String(selected.status)}
                      >
                        {leadStatuses.map((status) => (
                          <option key={status} value={status}>
                            {statuses[status]}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      یادداشت داخلی
                      <textarea name="note" maxLength={5000} />
                    </label>
                    <button className={styles.primary}>ذخیره پیگیری</button>
                  </form>
                  {((selected.history as Row[]) || []).map((entry) => {
                    const change = entry.change as { from: string; to: string };
                    return (
                      <div className={styles.note} key={String(entry.id)}>
                        <p>
                          {statuses[change.from]} ← {statuses[change.to]}
                        </p>
                        <small>
                          {String(entry.actor || "مدیر")} ·{" "}
                          {new Date(String(entry.createdAt)).toLocaleString(
                            "fa-IR",
                          )}
                        </small>
                      </div>
                    );
                  })}
                  {((selected.notes as Row[]) || []).map((note) => (
                    <div key={String(note.id)} className={styles.note}>
                      <p>{String(note.body)}</p>
                      <small>
                        {new Date(String(note.createdAt)).toLocaleString(
                          "fa-IR",
                        )}
                      </small>
                    </div>
                  ))}
                </section>
              ) : (
                <div className={styles.inboxHint}>
                  <Inbox size={25} aria-hidden="true" />
                  <p>برای خواندن پیام، یک درخواست را انتخاب کنید.</p>
                </div>
              )}
            </div>
          ) : loading ? (
            <BrandTableLoading
              label={
                isProject
                  ? "در حال دریافت نمونه‌کارها…"
                  : "در حال دریافت نوشته‌ها…"
              }
            />
          ) : (
            !listError && (
              <Table
                head={["عنوان", "وضعیت", "نشانی", "عملیات"]}
                rows={rows.map((row) => [
                  (row.translations as Translation[])?.find(
                    (t) => t.locale === "fa",
                  )?.title || String(row.slug),
                  <span
                    key="status"
                    className={styles.badge}
                    data-status={String(row.status)}
                  >
                    {statuses[String(row.status)]}
                  </span>,
                  <bdi key="slug" dir="ltr">
                    {String(row.slug)}
                  </bdi>,
                  <button
                    key="edit"
                    disabled={openingEntry}
                    onClick={async () => {
                      setOpeningEntry(true);
                      try {
                        setEditing(await api(section + "?id=" + row.id));
                      } catch (e) {
                        setMessage((e as Error).message);
                      } finally {
                        setOpeningEntry(false);
                      }
                    }}
                  >
                    ویرایش
                  </button>,
                ])}
              />
            )
          )}
          <div className={styles.actions}>
            <button
              disabled={loading || page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              قبلی
            </button>
            <span>{page}</span>
            <button
              disabled={
                loading ||
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
      {section === "media" && <MediaLibrary />}
      {!loading && !listError && section === "settings" && (
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
      {!loading && !listError && section === "redirects" && (
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
            <button className={styles.primary}>ذخیره انتقال</button>
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
      {!loading && !listError && section === "faqs" && (
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
            <button className={styles.primary}>ذخیره پرسش</button>
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
      {!loading && !listError && section === "users" && (
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
      {!loading && !listError && section === "audit" && (
        <>
          <Table
            head={["عملیات", "شناسه رکورد", "مدیر", "زمان"]}
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
