"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  Clock,
  Globe2,
  Layers3,
  MousePointer2,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { devices, insightsZone, sources } from "@/lib/insights";
import type { InsightGroup } from "@/server/insights";
import type {
  SearchConsoleReport,
  SearchMetric,
} from "@/server/search-console";
import styles from "./InsightsDashboard.module.css";
import { BrandTableLoading } from "@/components/BrandLoading";

const numbers = new Intl.NumberFormat("fa-IR");
const whole = (value: number) => numbers.format(value);
const shortDate = new Intl.DateTimeFormat("fa-IR", {
  month: "short",
  day: "numeric",
  timeZone: insightsZone,
});
const logDate = new Intl.DateTimeFormat("fa-IR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: insightsZone,
});
const percent = new Intl.NumberFormat("fa-IR", {
  style: "percent",
  maximumFractionDigits: 1,
});
const labels: Record<string, string> = {
  mobile: "موبایل",
  tablet: "تبلت",
  desktop: "دسکتاپ",
  unknown: "نامشخص",
  android: "اندروید",
  ios: "iOS / iPadOS",
  windows: "ویندوز",
  macos: "macOS",
  linux: "لینوکس",
  chrome: "Chrome",
  safari: "Safari",
  firefox: "Firefox",
  edge: "Edge",
  samsung: "Samsung Internet",
  compact: "کمتر از ۶۴۰ پیکسل",
  medium: "۶۴۰ تا ۱۰۲۳ پیکسل",
  large: "۱۰۲۴ پیکسل و بیشتر",
  google: "گوگل",
  bing: "بینگ",
  instagram: "اینستاگرام",
  telegram: "تلگرام",
  bale: "بله",
  other: "سایر",
  "other-search": "سایر موتورهای جست‌وجو",
  "other-social": "سایر شبکه‌های اجتماعی",
  referral: "ارجاع از سایت دیگر",
  tagged: "ورودی برچسب‌دار",
  hero: "بخش اول صفحه",
  services: "خدمات",
  portfolio: "نمونه‌کارها",
  process: "روند همکاری",
  blog: "بلاگ",
  faq: "پرسش‌های متداول",
  "contact-banner": "بنر تماس",
  article: "متن مقاله",
  header: "سربرگ",
  footer: "فوتر",
  form: "فرم تماس",
  phone: "تلفن",
  email: "ایمیل",
  name: "نام",
  message: "شرح پروژه",
  network: "ارتباط شبکه",
  script: "اسکریپت",
  promise: "پردازش ناهمگام",
  resource: "بارگذاری فایل",
  server: "سرور",
  auth: "ورود",
  media: "رسانه",
  backup: "بکاپ",
  deploy: "انتشار",
  error: "خطا",
  warning: "هشدار",
  info: "اطلاع",
  page_view: "بازدید صفحه",
  page_entry: "ورود به سایت",
  page_exit: "خروج ثبت‌شده",
  contact_click: "کلیک تماس",
  form_view: "مشاهده فرم",
  form_start: "شروع فرم",
  form_submit: "تلاش برای ارسال",
  lead_saved: "درخواست ثبت‌شده",
  section_view: "دیده‌شدن",
  section_click: "تعامل",
  active_time: "حضور فعال",
  scroll_depth: "اسکرول",
};
const groups: Record<string, string> = {
  summary: "خلاصه",
  days: "روزها",
  heat: "روز و ساعت",
  pages: "صفحه‌ها",
  landings: "صفحه فرود",
  sources: "منبع",
  devices: "دستگاه",
  browsers: "مرورگر",
  platforms: "سیستم‌عامل",
  viewports: "عرض صفحه",
  sections: "سکشن‌ها",
  campaigns: "کمپین",
  journeys: "مسیرها",
  links: "لینک‌ها",
  contact: "تماس",
  engagement: "تعامل",
  "form-errors": "خطای فرم",
  "browser-errors": "خطای مرورگر",
  "web-vitals": "کیفیت تجربه صفحه",
};
const tabs = [
  { id: "overview", title: "نمای کلی", icon: BarChart3 },
  { id: "pages", title: "صفحه‌ها و تعامل", icon: Layers3 },
  { id: "audience", title: "مخاطب و ورودی", icon: Smartphone },
  { id: "search", title: "جست‌وجوی گوگل", icon: Search },
  { id: "logs", title: "لاگ و سلامت", icon: ShieldCheck },
] as const;

type Summary = { rows: InsightGroup[]; days: number; date: string };
type Values = Record<string, number>;
type Row = { label: string; values: Values };
type Filters = {
  days: string;
  device: string;
  source: string;
  locale: string;
  page: string;
};
const initialFilters: Filters = {
  days: "30",
  device: "",
  source: "",
  locale: "",
  page: "",
};

function dataGroup(rows: InsightGroup[], kind: string) {
  const mapped = new Map<string, Values>();
  for (const row of rows) {
    if (row.kind !== kind) continue;
    const values = mapped.get(row.label) || {};
    values[row.metric] = row.total;
    mapped.set(row.label, values);
  }
  return mapped;
}

function timeSeries(date: string, days: number, rows: InsightGroup[]) {
  const values = dataGroup(rows, "days");
  return Array.from({ length: days }, (_, index) => {
    const iso = new Date(
      Date.parse(date + "T12:00:00Z") - (days - 1 - index) * 86400_000,
    )
      .toISOString()
      .slice(0, 10);
    return { iso, ...values.get(iso) } as {
      iso: string;
      page_view?: number;
      lead_saved?: number;
    };
  });
}

async function fetchReport<T>(url: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(url, { cache: "no-store", signal });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "گزارش در دسترس نیست.");
  return payload;
}

function Panel({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.panel}>
      <h2>{title}</h2>
      {caption && <p className={styles.caption}>{caption}</p>}
      {children}
    </section>
  );
}

function Empty({
  children = "برای این بازه هنوز داده‌ای ثبت نشده.",
}: {
  children?: ReactNode;
}) {
  return <div className={styles.empty}>{children}</div>;
}

function DataTable({
  headings,
  children,
}: {
  headings: string[];
  children: ReactNode;
}) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headings.map((title) => (
              <th key={title} scope="col">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function displayKey(key: string) {
  return labels[key] || key;
}

function pathKey(key: string) {
  return (
    <bdi className={styles.path} dir="ltr" title={key}>
      {key}
    </bdi>
  );
}

function listRows(data: Map<string, Values>, order: string) {
  return [...data]
    .map(([label, values]): Row => ({ label, values }))
    .sort(
      (a, b) =>
        (b.values[order] || 0) - (a.values[order] || 0) ||
        (b.values.lead_saved || 0) - (a.values.lead_saved || 0) ||
        a.label.localeCompare(b.label),
    )
    .slice(0, 20);
}

function Ranking({
  title,
  data,
  first,
  second,
  caption,
  format = displayKey,
}: {
  title: string;
  data: Map<string, Values>;
  first: string;
  second?: string;
  caption?: string;
  format?: (key: string) => ReactNode;
}) {
  const rows = listRows(data, first);
  const max = Math.max(1, ...rows.map((row) => row.values[first] || 0));
  return (
    <Panel title={title} caption={caption}>
      {rows.length ? (
        <div className={styles.ranking}>
          {rows.map(({ label, values }) => (
            <div className={styles.rank} key={label}>
              <span>{format(label)}</span>
              <strong>{whole(values[first] || 0)}</strong>
              <span className={styles.track}>
                <i
                  style={{ width: `${(100 * (values[first] || 0)) / max}%` }}
                />
              </span>
              {second && (
                <small>
                  {whole(values[second] || 0)} {labels[second] || second}
                </small>
              )}
            </div>
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </Panel>
  );
}

function ActivityChart({ data }: { data: Summary }) {
  const series = timeSeries(data.date, data.days, data.rows);
  const max = Math.max(
    1,
    ...series.map((day) => day.page_view || 0),
    ...series.map((day) => day.lead_saved || 0),
  );
  return (
    <Panel
      title="روند بازدید و درخواست"
      caption="شمارش روزانه بر اساس ساعت تهران"
    >
      {max === 1 && !series.some((day) => day.page_view || day.lead_saved) ? (
        <Empty />
      ) : (
        <>
          <div
            className={styles.chart}
            aria-label="نمودار بازدید و درخواست در بازه انتخاب‌شده"
          >
            {series.map((day) => {
              const title = `${shortDate.format(new Date(day.iso + "T12:00:00Z"))}، ${whole(day.page_view || 0)} بازدید و ${whole(day.lead_saved || 0)} درخواست`;
              return (
                <div key={day.iso} title={title} aria-label={title} role="img">
                  <i
                    className={styles.viewBar}
                    style={{ height: `${((day.page_view || 0) / max) * 100}%` }}
                  />
                  <i
                    className={styles.leadBar}
                    style={{
                      height: `${((day.lead_saved || 0) / max) * 100}%`,
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.chartDates} aria-hidden="true">
            {[
              series[0],
              series[Math.floor(series.length / 2)],
              series.at(-1),
            ].map(
              (day) =>
                day && (
                  <span key={day.iso}>
                    {shortDate.format(new Date(day.iso + "T12:00:00Z"))}
                  </span>
                ),
            )}
          </div>
          <div className={styles.chartLegend}>
            <span>بازدید صفحه</span>
            <span>درخواست ثبت‌شده</span>
          </div>
        </>
      )}
    </Panel>
  );
}

const week = [
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
  "یکشنبه",
];
function Heatmap({ values }: { values: Map<string, Values> }) {
  const [metric, setMetric] = useState("page_entry");
  const peak = listRows(values, metric)[0];
  const max = peak?.values[metric] || 1;
  const [peakDay, peakHour] = (peak?.label || "").split(":").map(Number);
  return (
    <Panel title="چه ساعتی شلوغ‌تره؟" caption="روز هفته و ساعت محلی تهران">
      <label className={styles.heatSelect}>
        نمایش{" "}
        <select
          value={metric}
          onChange={(event) => setMetric(event.target.value)}
        >
          <option value="page_entry">ورود به سایت</option>
          <option value="lead_saved">درخواست ثبت‌شده</option>
        </select>
      </label>
      {Boolean(peak?.values[metric]) && (
        <p className={styles.peak}>
          بیشترین {labels[metric]} در بازه · {week[peakDay]}، ساعت{" "}
          {whole(peakHour)} تا {whole((peakHour + 1) % 24)} · {whole(max)} مورد
        </p>
      )}
      <div className={styles.tableScroll}>
        <table className={styles.heatmap}>
          <thead>
            <tr>
              <th scope="col">روز</th>
              {Array.from({ length: 24 }, (_, hour) => (
                <th key={hour} scope="col">
                  {hour % 3 === 0 ? (
                    whole(hour)
                  ) : (
                    <span className={styles.sr}>{whole(hour)}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {week.map((name, day) => (
              <tr key={name}>
                <th scope="row">{name}</th>
                {Array.from({ length: 24 }, (_, hour) => {
                  const count = values.get(`${day}:${hour}`)?.[metric] || 0;
                  const text = `${name}، ساعت ${whole(hour)}، ${whole(count)} ${labels[metric]}`;
                  return (
                    <td
                      key={hour}
                      title={text}
                      style={
                        count
                          ? {
                              backgroundColor: `rgb(24 114 176 / ${0.2 + (count / max) * 0.8})`,
                            }
                          : undefined
                      }
                    >
                      <span className={styles.sr}>{text}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

const funnel = [
  "page_entry",
  "form_view",
  "form_start",
  "form_submit",
  "lead_saved",
];
function Funnel({ values }: { values: Values }) {
  const max = Math.max(1, ...funnel.map((metric) => values[metric] || 0));
  return (
    <Panel
      title="مسیر رسیدن به درخواست"
      caption="تعداد رویدادهای هر مرحله در بازه انتخاب‌شده"
    >
      <div className={styles.ranking}>
        {funnel.map((metric) => (
          <div className={styles.rank} key={metric}>
            <span>{labels[metric]}</span>
            <strong>{whole(values[metric] || 0)}</strong>
            <span className={styles.track}>
              <i style={{ width: `${((values[metric] || 0) / max) * 100}%` }} />
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function SitePages({ data }: { data: Summary }) {
  const pages = listRows(dataGroup(data.rows, "pages"), "page_view");
  const sections = listRows(dataGroup(data.rows, "sections"), "section_view");
  const journeys = listRows(dataGroup(data.rows, "journeys"), "navigate");
  const links = listRows(dataGroup(data.rows, "links"), "link_click");
  const vitals = listRows(dataGroup(data.rows, "web-vitals"), "poor");
  return (
    <>
      <Panel
        title="عملکرد صفحه‌ها"
        caption="خروج ثبت‌شده از رویداد خروج مرورگر به دست میاد."
      >
        {pages.length ? (
          <DataTable
            headings={[
              "صفحه",
              "بازدید",
              "ورود",
              "خروج",
              "کلیک تماس",
              "۴۵ ثانیه فعال",
              "اسکرول ۷۵٪",
              "ثبت فرم در صفحه",
            ]}
          >
            {pages.map(({ label, values }) => (
              <tr key={label}>
                <th scope="row">{pathKey(label)}</th>
                {[
                  "page_view",
                  "page_entry",
                  "page_exit",
                  "contact_click",
                  "active_time",
                  "scroll_depth",
                  "lead_saved",
                ].map((key) => (
                  <td key={key}>{whole(values[key] || 0)}</td>
                ))}
              </tr>
            ))}
          </DataTable>
        ) : (
          <Empty />
        )}
      </Panel>
      <Panel
        title="دیده‌شدن و تعامل سکشن‌ها"
        caption="هر دیده‌شدن و هر تعامل با یک بخش، یک بار در بازدید همان صفحه شمرده می‌شه."
      >
        {sections.length ? (
          <DataTable
            headings={[
              "بخش",
              "صفحه",
              "دیده‌شدن",
              "تعامل",
              "نسبت تعامل به دیده‌شدن",
            ]}
          >
            {sections.map(({ label, values }) => {
              const [path, section] = label.split("|");
              const views = values.section_view || 0;
              const clicks = values.section_click || 0;
              return (
                <tr key={label}>
                  <th scope="row">{displayKey(section)}</th>
                  <td>{pathKey(path)}</td>
                  <td>{whole(views)}</td>
                  <td>{whole(clicks)}</td>
                  <td>
                    {views >= 10 && clicks <= views
                      ? percent.format(clicks / views)
                      : "—"}
                  </td>
                </tr>
              );
            })}
          </DataTable>
        ) : (
          <Empty />
        )}
      </Panel>
      <Panel title="لینک‌ها و کارت‌های پُرکلیک">
        {links.length ? (
          <DataTable headings={["صفحه", "بخش", "مقصد", "کلیک"]}>
            {links.map(({ label, values }) => {
              const [path, section, target] = label.split("|");
              return (
                <tr key={label}>
                  <th scope="row">{pathKey(path)}</th>
                  <td>{displayKey(section)}</td>
                  <td>{pathKey(target)}</td>
                  <td>{whole(values.link_click || 0)}</td>
                </tr>
              );
            })}
          </DataTable>
        ) : (
          <Empty />
        )}
      </Panel>
      <Panel title="مسیرهای پرتکرار بین صفحه‌ها">
        {journeys.length ? (
          <DataTable headings={["از صفحه", "به صفحه", "تعداد"]}>
            {journeys.map(({ label, values }) => {
              const [from, to] = label.split("|");
              return (
                <tr key={label}>
                  <th scope="row">{pathKey(from)}</th>
                  <td>{pathKey(to)}</td>
                  <td>{whole(values.navigate || 0)}</td>
                </tr>
              );
            })}
          </DataTable>
        ) : (
          <Empty />
        )}
      </Panel>
      <Panel
        title="سرعت و پایداری صفحه‌ها"
        caption="اندازه‌گیری از مرورگر بازدیدکننده. هر شاخص تعداد نمونه خودش رو داره."
      >
        {vitals.length ? (
          <DataTable
            headings={["صفحه", "شاخص", "خوب", "نیازمند بهبود", "ضعیف"]}
          >
            {vitals.map(({ label, values }) => {
              const [path, metric] = label.split("|");
              return (
                <tr key={label}>
                  <th scope="row">{pathKey(path)}</th>
                  <td>
                    <bdi>{metric}</bdi>
                  </td>
                  {["good", "needs-improvement", "poor"].map((key) => (
                    <td key={key}>{whole(values[key] || 0)}</td>
                  ))}
                </tr>
              );
            })}
          </DataTable>
        ) : (
          <Empty />
        )}
      </Panel>
    </>
  );
}

function Audience({ data }: { data: Summary }) {
  const campaigns = listRows(dataGroup(data.rows, "campaigns"), "page_entry");
  return (
    <>
      <div className={styles.two}>
        <Ranking
          title="منبع ورودی"
          data={dataGroup(data.rows, "sources")}
          first="page_entry"
          second="lead_saved"
        />
        <Ranking
          title="صفحه‌های فرود"
          data={dataGroup(data.rows, "landings")}
          first="page_entry"
          second="lead_saved"
          format={pathKey}
        />
        <Ranking
          title="دستگاه"
          data={dataGroup(data.rows, "devices")}
          first="page_view"
          second="lead_saved"
        />
        <Ranking
          title="مرورگر"
          data={dataGroup(data.rows, "browsers")}
          first="page_view"
          second="lead_saved"
        />
        <Ranking
          title="سیستم‌عامل"
          data={dataGroup(data.rows, "platforms")}
          first="page_view"
          second="lead_saved"
        />
        <Ranking
          title="عرض صفحه"
          data={dataGroup(data.rows, "viewports")}
          first="page_view"
        />
      </div>
      <Panel
        title="ورودی لینک‌های کمپین"
        caption="از برچسب‌های utm_source، utm_campaign و utm_content خوانده می‌شه."
      >
        {campaigns.length ? (
          <DataTable
            headings={["منبع", "کمپین", "نسخه لینک", "ورود", "درخواست"]}
          >
            {campaigns.map(({ label, values }) => {
              const [source, campaign, creative] = label.split("|");
              return (
                <tr key={label}>
                  <th scope="row">{displayKey(source)}</th>
                  <td>
                    <bdi>{campaign}</bdi>
                  </td>
                  <td>
                    <bdi>{creative || "—"}</bdi>
                  </td>
                  <td>{whole(values.page_entry || 0)}</td>
                  <td>{whole(values.lead_saved || 0)}</td>
                </tr>
              );
            })}
          </DataTable>
        ) : (
          <Empty />
        )}
      </Panel>
    </>
  );
}

function csv(data: Summary) {
  const cell = (value: string | number) => {
    const text = String(value);
    return (
      '"' +
      (/^[=+\-@\t\r]/.test(text) ? "'" : "") +
      text.replace(/"/g, '""') +
      '"'
    );
  };
  const lines = [
    ["گزارش", "مقدار فیلتر", "شاخص", "تعداد"],
    ...data.rows.map((row) => [
      groups[row.kind] || row.kind,
      row.label,
      labels[row.metric] || row.metric,
      row.total,
    ]),
  ];
  const url = URL.createObjectURL(
    new Blob(
      ["\ufeff", lines.map((line) => line.map(cell).join(",")).join("\r\n")],
      { type: "text/csv;charset=utf-8" },
    ),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = `rycode-insights-${data.date}.csv`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function SearchTable({
  title,
  first,
  items,
}: {
  title: string;
  first: string;
  items: SearchMetric[];
}) {
  return (
    <Panel title={title}>
      {items.length ? (
        <DataTable
          headings={[first, "کلیک", "نمایش", "نرخ کلیک", "میانگین رتبه"]}
        >
          {items.map((item) => (
            <tr key={item.keys.join("|")}>
              <th scope="row">
                <bdi>{item.keys[0]}</bdi>
              </th>
              <td>{whole(item.clicks)}</td>
              <td>{whole(item.impressions)}</td>
              <td>{percent.format(item.ctr)}</td>
              <td>
                {new Intl.NumberFormat("fa-IR", {
                  maximumFractionDigits: 1,
                }).format(item.position)}
              </td>
            </tr>
          ))}
        </DataTable>
      ) : (
        <Empty>گوگل برای این بازه هنوز داده‌ای برنگردونده.</Empty>
      )}
    </Panel>
  );
}

function GoogleSearch() {
  const [report, setReport] = useState<SearchConsoleReport | null>(null);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetchReport<SearchConsoleReport>(
      "/api/admin/insights/search",
      controller.signal,
    )
      .then((payload) => {
        setReport(payload);
        setError("");
      })
      .catch((failure: Error) => {
        if (!controller.signal.aborted) setError(failure.message);
      });
    return () => controller.abort();
  }, [reload]);
  if (error)
    return (
      <Panel title="جست‌وجوی گوگل">
        <p role="alert">{error}</p>
        <button onClick={() => setReload((n) => n + 1)}>تلاش دوباره</button>
      </Panel>
    );
  if (!report)
    return (
      <Panel title="جست‌وجوی گوگل">
        <BrandTableLoading label="در حال دریافت گزارش جست‌وجو…" />
      </Panel>
    );
  if (report.state !== "connected")
    return (
      <Panel
        title="اتصال سرچ کنسول"
        caption={
          report.state === "unconfigured"
            ? "آماده اتصال به دامنه نهایی رایکد"
            : "گوگل فعلاً گزارش رو برنگردوند"
        }
      >
        <ol className={styles.steps}>
          <li>مالکیت دامنه را در Search Console با DNS تأیید کن.</li>
          <li>
            نقشه سایت را با مسیر <bdi>/sitemap.xml</bdi> ثبت کن.
          </li>
          <li>
            دسترسی فقط‌خواندنی را برای حساب سرویس روی همان دامنه تنظیم کن.
          </li>
        </ol>
        <a
          className={styles.textLink}
          href="https://search.google.com/search-console"
          target="_blank"
          rel="noreferrer"
        >
          باز کردن Search Console <ArrowUpRight size={16} />
        </a>
        {report.state === "unavailable" && (
          <button onClick={() => setReload((n) => n + 1)}>تلاش دوباره</button>
        )}
      </Panel>
    );
  const clicks = report.days.reduce((count, row) => count + row.clicks, 0);
  const impressions = report.days.reduce(
    (count, row) => count + row.impressions,
    0,
  );
  return (
    <>
      <Panel
        title="عملکرد جست‌وجوی گوگل"
        caption="۲۸ روز اخیر، بر اساس داده نهایی گوگل"
      >
        <div className={styles.searchTotals}>
          <span>
            <strong>{whole(clicks)}</strong> کلیک
          </span>
          <span>
            <strong>{whole(impressions)}</strong> نمایش
          </span>
          <span>
            <strong>
              {impressions ? percent.format(clicks / impressions) : "—"}
            </strong>{" "}
            نرخ کلیک
          </span>
        </div>
        <small>
          آخرین دریافت: {logDate.format(new Date(report.updatedAt))}
        </small>
      </Panel>
      <SearchTable
        title="عبارت‌های جست‌وجو"
        first="عبارت"
        items={report.queries}
      />
      <SearchTable
        title="صفحه‌های پربازدید از گوگل"
        first="صفحه"
        items={report.pages}
      />
    </>
  );
}

type LogItem = {
  id: string;
  area: string;
  path: string;
  code: string;
  level: string;
  elapsedMs: number | null;
  release: string | null;
  createdAt: string;
};
type LogReport = {
  items: LogItem[];
  total: number;
  page: number;
  recentErrors: number;
  databaseMs: number;
  memoryMb: number;
  uptimeMinutes: number;
  mediaFreeGb: number | null;
  release: string | null;
  backup: LogItem | null;
  deploy: LogItem | null;
  backupNeedsAttention: boolean;
};

function OperationalLogs({ data }: { data: Summary | null }) {
  const [report, setReport] = useState<LogReport | null>(null);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({ area: "", level: "", q: "", page: 1 });
  const [reload, setReload] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    const query = new URLSearchParams({ ...filter, page: String(filter.page) });
    fetchReport<LogReport>(
      "/api/admin/insights/logs?" + query,
      controller.signal,
    )
      .then((payload) => {
        setReport(payload);
        setError("");
      })
      .catch((failure: Error) => {
        if (!controller.signal.aborted) setError(failure.message);
      });
    return () => controller.abort();
  }, [filter, reload]);
  return (
    <>
      <div className={styles.two}>
        <Panel title="سلامت سایت و دیتابیس" caption="نتیجه همین بررسی در پنل">
          {report && !error ? (
            <>
              <p className={styles.status}>
                دیتابیس در دسترس · {whole(report.databaseMs)} میلی‌ثانیه
              </p>
              <p>{whole(report.recentErrors)} خطای فنی در ۲۴ ساعت گذشته</p>
              <p>
                {whole(report.memoryMb)} مگابایت حافظه برنامه ·{" "}
                {whole(report.uptimeMinutes)} دقیقه از راه‌اندازی
              </p>
              {report.mediaFreeGb !== null && (
                <p>{whole(report.mediaFreeGb)} گیگابایت فضای آزاد رسانه</p>
              )}
            </>
          ) : (
            <p>{error || "در حال بررسی…"}</p>
          )}
          <button type="button" onClick={() => setReload((n) => n + 1)}>
            <RefreshCw size={15} /> بررسی دوباره
          </button>
        </Panel>
        <Panel title="انتشار و بکاپ">
          <p>
            نسخه فعال <bdi>{report?.release || "ثبت نشده"}</bdi>
          </p>
          <p>
            راه‌اندازی نسخه{" "}
            {report?.deploy
              ? logDate.format(new Date(report.deploy.createdAt))
              : "ثبت نشده"}
          </p>
          <p>
            آخرین بکاپ{" "}
            {report?.backup ? (
              <>
                <span className={styles.badge} data-level={report.backup.level}>
                  {report.backup.level === "error" ? "ناموفق" : "موفق"}
                </span>{" "}
                · {logDate.format(new Date(report.backup.createdAt))}
              </>
            ) : (
              "ثبت نشده"
            )}
          </p>
          {report?.backupNeedsAttention && (
            <p role="alert" className={styles.banner}>
              وضعیت بکاپ نیاز به بررسی داره.
            </p>
          )}
        </Panel>
      </div>
      <Panel title="رویدادهای فنی و ورود به پنل">
        <form
          className={styles.filters}
          onSubmit={(event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            setFilter({
              area: String(form.get("area")),
              level: String(form.get("level")),
              q: String(form.get("q")),
              page: 1,
            });
          }}
        >
          <label>
            گروه{" "}
            <select name="area">
              <option value="">همه</option>
              {["form", "auth", "server", "media", "backup", "deploy"].map(
                (area) => (
                  <option key={area} value={area}>
                    {labels[area]}
                  </option>
                ),
              )}
            </select>
          </label>
          <label>
            شدت{" "}
            <select name="level">
              <option value="">همه</option>
              {["info", "warning", "error"].map((level) => (
                <option key={level} value={level}>
                  {labels[level]}
                </option>
              ))}
            </select>
          </label>
          <label>
            مسیر، رویداد یا شناسه <input name="q" maxLength={100} />
          </label>
          <button type="submit">
            <Search size={16} /> جست‌وجو
          </button>
        </form>
        {error ? (
          <p role="alert">{error}</p>
        ) : report ? (
          report.items.length ? (
            <>
              <DataTable
                headings={[
                  "زمان",
                  "بخش",
                  "رویداد و شناسه",
                  "مسیر",
                  "شدت",
                  "زمان پاسخ",
                  "نسخه",
                ]}
              >
                {report.items.map((item) => (
                  <tr key={item.id}>
                    <td>{logDate.format(new Date(item.createdAt))}</td>
                    <td>{displayKey(item.area)}</td>
                    <th scope="row">
                      <bdi>{item.code}</bdi>
                      <small className={styles.logId}>
                        <bdi>{item.id}</bdi>
                      </small>
                    </th>
                    <td>{pathKey(item.path)}</td>
                    <td>
                      <span className={styles.badge} data-level={item.level}>
                        {displayKey(item.level)}
                      </span>
                    </td>
                    <td>
                      {item.elapsedMs == null
                        ? "—"
                        : whole(item.elapsedMs) + " ms"}
                    </td>
                    <td>
                      <bdi>{item.release || "—"}</bdi>
                    </td>
                  </tr>
                ))}
              </DataTable>
              <div className={styles.pagination}>
                <button
                  disabled={report.page <= 1}
                  onClick={() =>
                    setFilter((value) => ({ ...value, page: value.page - 1 }))
                  }
                >
                  قبلی
                </button>
                <small>
                  صفحه {whole(report.page)} · {whole(report.total)} رویداد
                </small>
                <button
                  disabled={report.page * 30 >= report.total}
                  onClick={() =>
                    setFilter((value) => ({ ...value, page: value.page + 1 }))
                  }
                >
                  بعدی
                </button>
              </div>
            </>
          ) : (
            <Empty>رویدادی با این فیلتر ثبت نشده.</Empty>
          )
        ) : (
          <BrandTableLoading label="در حال دریافت لاگ‌ها…" />
        )}
      </Panel>
      {data && (
        <div className={styles.two}>
          <Ranking
            title="خطاهای مرورگر"
            data={dataGroup(data.rows, "browser-errors")}
            first="browser_error"
            format={(key) => {
              const [path, code] = key.split("|");
              return (
                <>
                  {displayKey(code)} · {pathKey(path)}
                </>
              );
            }}
          />
          <Panel
            title="صفحه پیدا نشد"
            caption="بازدید صفحه ۴۰۴ در بازه انتخاب‌شده"
          >
            <strong className={styles.largeNumber}>
              {whole(
                dataGroup(data.rows, "summary").get("current")
                  ?.page_not_found || 0,
              )}
            </strong>
            <p>
              <Link className={styles.textLink} href="/admin/audit">
                سابقه عملیات مدیرها <ArrowUpRight size={16} />
              </Link>
            </p>
          </Panel>
        </div>
      )}
    </>
  );
}

export function InsightsDashboard() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("overview");
  const [filters, setFilters] = useState(initialFilters);
  const [report, setReport] = useState<Summary | null>(null);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(0);
  const [loaded, setLoaded] = useState("");
  const query = useMemo(
    () => new URLSearchParams(filters).toString(),
    [filters],
  );
  const requestKey = query + "#" + reload;
  useEffect(() => {
    const controller = new AbortController();
    fetchReport<Summary>(
      "/api/admin/insights/summary?" + query,
      controller.signal,
    )
      .then((payload) => {
        setReport(payload);
        setError("");
        setLoaded(requestKey);
      })
      .catch((failure: Error) => {
        if (!controller.signal.aborted) {
          setError(failure.message);
          setLoaded(requestKey);
        }
      });
    return () => controller.abort();
  }, [query, requestKey]);
  const loading = loaded !== requestKey;
  const data = loaded === requestKey && !error ? report : null;
  const current = dataGroup(data?.rows || [], "summary").get("current") || {};
  const previous = dataGroup(data?.rows || [], "summary").get("previous") || {};
  return (
    <div className={styles.dashboard}>
      <header className={styles.hero}>
        <div className={styles.heroIcon}>
          <Activity size={28} aria-hidden="true" />
        </div>
        <div>
          <h1>آمار و لاگ‌های رایکد</h1>
          <p>بازدید، تعامل، درخواست و سلامت سایت</p>
        </div>
        <button
          type="button"
          disabled={!data}
          onClick={() => data && csv(data)}
        >
          <ArrowDownToLine size={17} /> خروجی CSV
        </button>
      </header>
      <nav className={styles.tabs} aria-label="بخش‌های گزارش">
        {tabs.map(({ id, title, icon: Icon }) => (
          <button
            type="button"
            key={id}
            aria-pressed={id === tab}
            onClick={() => setTab(id)}
          >
            <Icon size={17} aria-hidden="true" />
            {title}
          </button>
        ))}
      </nav>
      {tab !== "search" && (
        <form
          className={styles.filters}
          aria-label="فیلتر آمار"
          onSubmit={(event) => {
            event.preventDefault();
            const fields = new FormData(event.currentTarget);
            setFilters({
              days: String(fields.get("days")),
              locale: String(fields.get("locale")),
              device: String(fields.get("device")),
              source: String(fields.get("source")),
              page: String(fields.get("page")).trim(),
            });
            setReload((n) => n + 1);
          }}
          key={JSON.stringify(filters)}
        >
          <label>
            بازه{" "}
            <select name="days" defaultValue={filters.days}>
              <option value="7">۷ روز</option>
              <option value="30">۳۰ روز</option>
              <option value="90">۹۰ روز</option>
            </select>
          </label>
          <label>
            دستگاه{" "}
            <select name="device" defaultValue={filters.device}>
              <option value="">همه</option>
              {devices.map((device) => (
                <option key={device} value={device}>
                  {labels[device]}
                </option>
              ))}
            </select>
          </label>
          <label>
            منبع{" "}
            <select name="source" defaultValue={filters.source}>
              <option value="">همه</option>
              {sources.map((source) => (
                <option key={source} value={source}>
                  {labels[source]}
                </option>
              ))}
            </select>
          </label>
          <label>
            زبان{" "}
            <select name="locale" defaultValue={filters.locale}>
              <option value="">همه</option>
              <option value="fa">فارسی</option>
              <option value="en">انگلیسی</option>
            </select>
          </label>
          <label>
            مسیر صفحه{" "}
            <input
              name="page"
              placeholder="/services"
              defaultValue={filters.page}
              dir="ltr"
              maxLength={240}
            />
          </label>
          <button type="submit">
            <RefreshCw size={16} aria-hidden="true" /> اعمال
          </button>
        </form>
      )}
      {tab !== "search" && tab !== "logs" && loading && (
        <BrandTableLoading label="در حال دریافت آمار…" />
      )}
      {tab !== "search" && !loading && error && (
        <p role="alert" className={styles.banner}>
          {error}
        </p>
      )}
      {tab === "overview" && data && (
        <>
          <div className={styles.metrics}>
            {[
              { key: "page_view", icon: Activity },
              { key: "page_entry", icon: Globe2 },
              { key: "contact_click", icon: MousePointer2 },
              { key: "lead_saved", icon: Send },
            ].map(({ key, icon: Icon }) => {
              const value = current[key] || 0;
              const comparison = previous[key] || 0;
              return (
                <article className={styles.metric} key={key}>
                  <span className={styles.metricIcon}>
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span>{labels[key]}</span>
                  <strong>{whole(value)}</strong>
                  <small>
                    {comparison
                      ? `${percent.format((value - comparison) / comparison)} نسبت به بازه قبل`
                      : `در ${whole(data.days)} روز اخیر`}
                  </small>
                </article>
              );
            })}
          </div>
          <ActivityChart data={data} />
          <Heatmap values={dataGroup(data.rows, "heat")} />
          <div className={styles.two}>
            <Funnel values={current} />
            <Ranking
              title="راه‌های تماس"
              data={dataGroup(data.rows, "contact")}
              first="contact_click"
              caption="تعداد کلیک روی هر راه ارتباطی"
            />
            <Ranking
              title="خطاهای تکمیل فرم"
              data={dataGroup(data.rows, "form-errors")}
              first="form_invalid"
            />
            <Ranking
              title="عمق اسکرول"
              data={
                new Map(
                  [...dataGroup(data.rows, "engagement")].filter(
                    ([, values]) => values.scroll_depth,
                  ),
                )
              }
              first="scroll_depth"
              format={(value) => percent.format(Number(value) / 100)}
            />
          </div>
          <p className={styles.note}>
            <Clock size={16} /> جزئیات دستگاه، ساعت، منبع و تعامل از زمان
            فعال‌شدن این گزارش ثبت می‌شن.
          </p>
        </>
      )}
      {tab === "pages" && data && <SitePages data={data} />}
      {tab === "audience" && data && <Audience data={data} />}
      {tab === "search" && <GoogleSearch />}
      {tab === "logs" && <OperationalLogs data={data} />}
    </div>
  );
}
