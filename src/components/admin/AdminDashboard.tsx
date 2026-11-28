import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowUpLeft,
  CalendarDays,
  ChevronLeft,
  CircleCheck,
  FilePenLine,
  FileText,
  Images,
  Inbox,
  MessageSquare,
  Plus,
} from "lucide-react";
import type { ReactNode } from "react";
import type { AdminOverview } from "@/server/admin-overview";
import { insightsZone } from "@/lib/insights";
import { statusLabels } from "./admin-labels";
import formStyles from "./Admin.module.css";
import styles from "./AdminDashboard.module.css";

const formatNumber = new Intl.NumberFormat("fa-IR").format;
const percent = new Intl.NumberFormat("fa-IR", {
  style: "percent",
  signDisplay: "exceptZero",
  maximumFractionDigits: 0,
});
const shortDate = new Intl.DateTimeFormat("fa-IR", {
  day: "numeric",
  month: "short",
  timeZone: insightsZone,
});
const fullDate = new Intl.DateTimeFormat("fa-IR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: insightsZone,
});

function dateAtNoon(date: string) {
  return new Date(date + "T12:00:00Z");
}

function Panel({
  title,
  href,
  action,
  children,
  className = "",
}: {
  title: string;
  href?: string;
  action?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={styles.card + " " + className}>
      <header className={styles.cardHeader}>
        <h2>{title}</h2>
        {href && (
          <Link href={href} className={styles.inlineLink}>
            {action || "مشاهده همه"} <ArrowLeft size={15} aria-hidden="true" />
          </Link>
        )}
      </header>
      {children}
    </section>
  );
}

function Traffic({
  insights,
  days,
}: {
  insights: NonNullable<AdminOverview["admin"]>["insights"];
  days: 7 | 30;
}) {
  const countsByDay = new Map(
    insights.rows
      .filter((row) => row.kind === "days" && row.metric === "page_view")
      .map((row) => [row.label, row.total]),
  );
  const last = dateAtNoon(insights.date).getTime();
  const graph = Array.from({ length: days }, (_, index) => {
    const date = new Date(last - (days - 1 - index) * 86400_000);
    return {
      date,
      total: countsByDay.get(date.toISOString().slice(0, 10)) || 0,
    };
  });
  const max = Math.max(1, ...graph.map((day) => day.total));
  const total = graph.reduce((sum, day) => sum + day.total, 0);
  const previous =
    insights.rows.find(
      (row) =>
        row.kind === "summary" &&
        row.label === "previous" &&
        row.metric === "page_view",
    )?.total || 0;

  return (
    <Panel title="روند بازدید سایت" href="/admin/analytics" action="گزارش کامل">
      <div className={styles.chartHeader}>
        <div className={styles.chartSummary}>
          <strong>{formatNumber(total)}</strong>
          <span>بازدید صفحه</span>
          {previous > 0 && (
            <small data-trend={total < previous ? "down" : "up"}>
              {percent.format((total - previous) / previous)} نسبت به بازه قبل
            </small>
          )}
        </div>
        <nav className={styles.range} aria-label="بازه گزارش بازدید">
          <Link
            href="/admin"
            scroll={false}
            prefetch={false}
            aria-current={days === 7 ? "true" : undefined}
          >
            ۷ روز
          </Link>
          <Link
            href="/admin?days=30"
            scroll={false}
            prefetch={false}
            aria-current={days === 30 ? "true" : undefined}
          >
            ۳۰ روز
          </Link>
        </nav>
      </div>
      {total > 0 ? (
        <>
          <div
            className={styles.chart}
            role="group"
            aria-label="بازدید روزانه به وقت تهران"
          >
            {graph.map(({ date, total }, index) => {
              const label = `${shortDate.format(date)}، ${formatNumber(total)} بازدید`;
              return (
                <div
                  key={date.toISOString()}
                  role="img"
                  aria-label={label}
                  title={label}
                >
                  <span
                    data-latest={index === graph.length - 1}
                    style={{
                      height: `${total ? Math.max(3, (total / max) * 100) : 1}%`,
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.chartDates} aria-hidden="true">
            {[graph[0], graph[Math.floor(days / 2)], graph[days - 1]].map(
              ({ date }) => (
                <span key={date.toISOString()}>{shortDate.format(date)}</span>
              ),
            )}
          </div>
        </>
      ) : (
        <div className={styles.chartEmpty}>
          <Activity size={26} aria-hidden="true" /> در این بازه هنوز بازدیدی ثبت
          نشده.
        </div>
      )}
    </Panel>
  );
}

function Status({ status }: { status: string }) {
  return (
    <span className={formStyles.badge} data-status={status}>
      {statusLabels[status] || status}
    </span>
  );
}

export function AdminDashboard({
  data,
  days,
}: {
  data: AdminOverview;
  days: 7 | 30;
}) {
  const { admin, articles, articleTotals } = data;
  const published = articleTotals.PUBLISHED || 0;
  const drafts = articleTotals.DRAFT || 0;
  const scheduled = articleTotals.SCHEDULED || 0;
  const current =
    admin?.insights.rows.filter(
      (row) => row.kind === "summary" && row.label === "current",
    ) || [];
  const metric = (name: string) =>
    current.find((row) => row.metric === name)?.total || 0;
  const stats = admin
    ? [
        {
          title: "بازدید صفحه‌ها",
          value: metric("page_view"),
          caption: `${formatNumber(days)} روز اخیر`,
          Icon: Activity,
          href: "/admin/analytics",
          tone: "blue",
        },
        {
          title: "درخواست‌های ثبت‌شده",
          value: metric("lead_saved"),
          caption: `${formatNumber(days)} روز اخیر`,
          Icon: Inbox,
          href: "/admin/leads",
          tone: "mint",
        },
        {
          title: "نوشته‌های منتشرشده",
          value: published,
          caption: "بلاگ رایکد",
          Icon: FileText,
          href: "/admin/content?status=PUBLISHED",
          tone: "purple",
        },
        {
          title: "پیش‌نویس‌ها",
          value: drafts,
          caption: "آماده ادامه ویرایش",
          Icon: FilePenLine,
          href: "/admin/content?status=DRAFT",
          tone: "peach",
        },
      ]
    : [
        {
          title: "نوشته‌های منتشرشده",
          value: published,
          caption: "بلاگ رایکد",
          Icon: FileText,
          href: "/admin/content?status=PUBLISHED",
          tone: "purple",
        },
        {
          title: "پیش‌نویس‌ها",
          value: drafts,
          caption: "آماده ادامه ویرایش",
          Icon: FilePenLine,
          href: "/admin/content?status=DRAFT",
          tone: "peach",
        },
        {
          title: "زمان‌بندی‌شده",
          value: scheduled,
          caption: "در صف انتشار",
          Icon: CalendarDays,
          href: "/admin/content?status=SCHEDULED",
          tone: "blue",
        },
      ];
  const tasks = admin
    ? [
        {
          label: "درخواست تازه",
          count: admin.newLeads,
          to: "/admin/leads?status=NEW",
          Icon: Inbox,
          tone: "blue",
        },
        {
          label: "دیدگاه در انتظار بررسی",
          count: admin.pendingComments,
          to: "/admin/comments",
          Icon: MessageSquare,
          tone: "peach",
        },
        {
          label: "پیش‌نویس بلاگ",
          count: drafts,
          to: "/admin/content?status=DRAFT",
          Icon: FilePenLine,
          tone: "purple",
        },
      ]
    : [
        {
          label: "پیش‌نویس بلاگ",
          count: drafts,
          to: "/admin/content?status=DRAFT",
          Icon: FilePenLine,
          tone: "purple",
        },
        {
          label: "کتابخانه رسانه",
          to: "/admin/media",
          Icon: Images,
          tone: "blue",
        },
      ];

  return (
    <div className={styles.dashboard}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.date}>
            <CalendarDays size={16} aria-hidden="true" />{" "}
            {fullDate.format(new Date())}
          </span>
          <h1>داشبورد رایکد</h1>
          <p>
            {admin
              ? "درخواست‌ها، بلاگ و عملکرد سایت در یک نگاه"
              : "نوشته‌های بلاگ و پیش‌نویس‌های آماده ویرایش"}
          </p>
          <div className={styles.heroActions}>
            <Link href="/admin/content?new=1" className={formStyles.primary}>
              <Plus size={17} aria-hidden="true" /> نوشته جدید
            </Link>
            <Link
              href={admin ? "/admin/leads" : "/admin/content"}
              className={formStyles.button}
            >
              {admin ? "صندوق درخواست‌ها" : "نوشته‌های بلاگ"}{" "}
              <ArrowUpLeft size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <aside className={styles.queue}>
          <h2>{admin ? "در انتظار پیگیری" : "ادامه کار"}</h2>
          <ul>
            {tasks.map(({ label, count, to, Icon, tone }) => (
              <li key={to}>
                <Link href={to} prefetch={false}>
                  <span className={styles.icon} data-tone={tone}>
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span>{label}</span>
                  {count !== undefined && (
                    <strong>{formatNumber(count)}</strong>
                  )}
                  <ChevronLeft
                    size={14}
                    aria-hidden="true"
                    className={styles.chevron}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </header>

      <div className={styles.metrics} aria-label="خلاصه فعالیت">
        {stats.map(({ title, value, caption, Icon, href, tone }) => (
          <Link
            className={styles.metric}
            href={href}
            key={title}
            prefetch={false}
          >
            <span className={styles.icon} data-tone={tone}>
              <Icon size={20} aria-hidden="true" />
            </span>
            <ArrowUpLeft
              className={styles.metricArrow}
              size={17}
              aria-hidden="true"
            />
            <span className={styles.metricLabel}>{title}</span>
            <strong>{formatNumber(value)}</strong>
            <small>{caption}</small>
          </Link>
        ))}
      </div>

      {admin && (
        <div className={styles.activity}>
          <Traffic insights={admin.insights} days={days} />
          <Panel title="درخواست‌های اخیر" href="/admin/leads">
            {admin.leads.length ? (
              <ul className={styles.list}>
                {admin.leads.map((lead) => (
                  <li key={lead.id}>
                    <Link
                      href={`/admin/leads?request=${lead.id}`}
                      prefetch={false}
                    >
                      <span className={styles.icon} data-tone="blue">
                        <Inbox size={17} aria-hidden="true" />
                      </span>
                      <span className={styles.rowText}>
                        <strong dir="auto">{lead.name}</strong>
                        <small>
                          <bdi>{lead.receipt}</bdi> ·{" "}
                          {shortDate.format(lead.createdAt)}
                        </small>
                      </span>
                      <Status status={lead.status} />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.empty}>
                <Inbox size={24} aria-hidden="true" /> هنوز درخواستی ثبت نشده.
              </div>
            )}
          </Panel>
        </div>
      )}

      <div className={styles.editorial}>
        <Panel title="آخرین نوشته‌ها" href="/admin/content">
          {articles.length ? (
            <ul className={styles.list}>
              {articles.map((entry) => (
                <li key={entry.id}>
                  <Link
                    href={`/admin/content?article=${entry.id}`}
                    prefetch={false}
                  >
                    <span className={styles.icon} data-tone="purple">
                      <FileText size={17} aria-hidden="true" />
                    </span>
                    <span className={styles.rowText}>
                      <strong dir="auto">
                        {entry.translations[0]?.title || entry.slug}
                      </strong>
                      <small>
                        آخرین ویرایش {shortDate.format(entry.updatedAt)}
                      </small>
                    </span>
                    <Status status={entry.status} />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>
              <FileText size={24} aria-hidden="true" /> هنوز نوشته‌ای ثبت نشده.
            </div>
          )}
        </Panel>
        <Panel title="وضعیت بلاگ">
          <ul className={styles.publication}>
            {[
              {
                status: "PUBLISHED",
                count: published,
                Icon: CircleCheck,
                tone: "mint",
              },
              {
                status: "DRAFT",
                count: drafts,
                Icon: FilePenLine,
                tone: "purple",
              },
              {
                status: "SCHEDULED",
                count: scheduled,
                Icon: CalendarDays,
                tone: "blue",
              },
            ].map(({ status, count, Icon, tone }) => (
              <li key={status}>
                <Link href={`/admin/content?status=${status}`}>
                  <span className={styles.icon} data-tone={tone}>
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span>{statusLabels[status]}</span>
                  <strong>{formatNumber(count)}</strong>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/admin/media" className={styles.inlineLink}>
            کتابخانه رسانه <ArrowLeft size={15} aria-hidden="true" />
          </Link>
        </Panel>
      </div>
    </div>
  );
}
