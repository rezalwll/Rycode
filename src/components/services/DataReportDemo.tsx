"use client";

import { useId, useState } from "react";
import {
  ArrowDownLeft,
  ChartNoAxesColumnIncreasing,
  FileSpreadsheet,
  Table2,
} from "lucide-react";
import styles from "./DataToolsPage.module.css";

const months = ["مهر", "آبان", "آذر"] as const;
const sales = [
  [
    ["چراغ مطالعه", 8],
    ["دفتر", 5],
    ["استند", 3],
  ],
  [
    ["چراغ مطالعه", 9],
    ["دفتر", 7],
    ["استند", 4],
  ],
  [
    ["چراغ مطالعه", 12],
    ["دفتر", 8],
    ["استند", 5],
  ],
] as const;
const number = new Intl.NumberFormat("fa-IR");

export function SampleTable({
  columns,
  rows,
  flagged,
}: {
  columns: readonly string[];
  rows: readonly (readonly string[])[];
  flagged?: number;
}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row[0]} data-flagged={index === flagged ? true : undefined}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                <bdi>{cell}</bdi>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ReportChart({ month }: { month: number }) {
  return (
    <ul className={styles.bars} aria-label={`تعداد فروش در ${months[month]}`}>
      {sales[month].map(([product, quantity]) => (
        <li key={product}>
          <span>{product}</span>
          <span className={styles.barTrack} aria-hidden="true">
            <span style={{ width: `${(quantity / 12) * 100}%` }} />
          </span>
          <strong>{number.format(quantity)}</strong>
        </li>
      ))}
    </ul>
  );
}

export function SalesPreview() {
  const [month, setMonth] = useState(2);
  return (
    <>
      <label className={styles.filter}>
        ماه گزارش
        <select
          value={month}
          onChange={(event) => setMonth(Number(event.target.value))}
        >
          {months.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <ReportChart month={month} />
    </>
  );
}

export function DataReportDemo() {
  const [view, setView] = useState<"files" | "report">("report");
  const [month, setMonth] = useState(2);
  const panelId = useId();
  const entries = sales[month];
  const isReport = view === "report";
  const total = entries.reduce((sum, [, quantity]) => sum + quantity, 0);

  return (
    <figure
      className={styles.demo}
      aria-label="گزارش فروش و یکپارچه‌سازی فایل‌ها"
    >
      <div className={styles.demoTop}>
        <span className={styles.demoTitle}>
          <ChartNoAxesColumnIncreasing size={19} aria-hidden="true" /> گزارش
          فروش
        </span>
      </div>
      <div className={styles.demoGrid}>
        <aside className={styles.sources} aria-label="فایل‌های ورودی">
          <span>فایل‌های ورودی</span>
          {["فروش.xlsx", "مشتریان.csv", "هزینه‌ها.xlsx"].map((file) => (
            <span key={file} className={styles.source}>
              <FileSpreadsheet size={16} aria-hidden="true" />
              <bdi>{file}</bdi>
            </span>
          ))}
          <span className={styles.join}>
            <ArrowDownLeft size={16} aria-hidden="true" /> یک ساختار مشترک
          </span>
        </aside>
        <div className={styles.dashboard}>
          <div className={styles.controlRow}>
            <div role="group" aria-label="نمای داده" className={styles.segment}>
              <button
                type="button"
                aria-controls={panelId}
                aria-pressed={!isReport}
                onClick={() => setView("files")}
              >
                فایل‌های پراکنده
              </button>
              <button
                type="button"
                aria-controls={panelId}
                aria-pressed={isReport}
                onClick={() => setView("report")}
              >
                گزارش مرتب
              </button>
            </div>
            <label className={styles.filter}>
              ماه
              <select
                value={month}
                onChange={(event) => setMonth(Number(event.target.value))}
              >
                {months.map((name, index) => (
                  <option key={name} value={index}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div id={panelId} className={styles.demoPanel} aria-live="polite">
            {isReport ? (
              <div className={styles.demoState} key="report">
                <div className={styles.metrics}>
                  <div>
                    <span>تعداد فروش</span>
                    <strong>{number.format(total)}</strong>
                  </div>
                  <div>
                    <span>پرفروش‌ترین محصول</span>
                    <strong>{entries[0][0]}</strong>
                  </div>
                </div>
                <div className={styles.chart}>
                  <p>فروش به تفکیک محصول</p>
                  <ReportChart month={month} />
                </div>
              </div>
            ) : (
              <div className={styles.demoState} key="files">
                <div className={styles.rawHeading}>
                  <Table2 size={16} aria-hidden="true" /> ردیف‌های فایل فروش
                </div>
                <SampleTable
                  columns={["نام ثبت‌شده", "تعداد", "وضعیت"]}
                  rows={[
                    [
                      "چراغ مطالعه",
                      number.format(entries[0][1] - 2),
                      "قابل استفاده",
                    ],
                    ["چراغ‌مطالعه", "۲", "نام ناهماهنگ"],
                    [
                      entries[1][0],
                      number.format(entries[1][1]),
                      "قابل استفاده",
                    ],
                    [
                      entries[2][0],
                      number.format(entries[2][1]),
                      "قابل استفاده",
                    ],
                  ]}
                  flagged={1}
                />
                <p className={styles.rawNote}>
                  دو نام برای یک محصول ثبت شده. بعد از بررسی، فروش هر دو ردیف با
                  هم جمع می‌شه.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </figure>
  );
}
