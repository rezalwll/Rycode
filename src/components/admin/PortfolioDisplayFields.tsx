"use client";

import { useState } from "react";
import type { portfolioExampleKeys } from "@/lib/content-rules";
import styles from "./Admin.module.css";

export async function savePortfolioSettings(resource: string, data: unknown) {
  const response = await fetch("/api/admin/" + resource, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "ذخیره انجام نشد");
}

export function PortfolioDisplayFields({
  setting,
  enabled,
}: {
  setting: (typeof portfolioExampleKeys)[number];
  enabled: boolean;
}) {
  const home = setting === "portfolio.homeExamples";
  const [status, setStatus] = useState("");
  const [current, setCurrent] = useState(enabled);
  const [busy, setBusy] = useState(false);

  return (
    <form
      className={styles.panel}
      onSubmit={async (event) => {
        event.preventDefault();
        setBusy(true);
        setStatus("");
        try {
          await savePortfolioSettings("portfolio-display", {
            key: setting,
            value: current,
          });
          setStatus("تنظیم نمایش ذخیره شد");
        } catch (error) {
          setStatus((error as Error).message);
        } finally {
          setBusy(false);
        }
      }}
    >
      <label className={styles.check}>
        <input
          type="checkbox"
          checked={current}
          onChange={(event) => setCurrent(event.target.checked)}
        />
        {home
          ? "نمایش کارت‌های پیش‌فرض در صورت خالی بودن بخش"
          : "نمایش کارت‌های پیش‌فرض در فهرست نمونه‌کارها"}
      </label>
      <div className={styles.actions}>
        <button type="submit" disabled={busy}>
          {busy ? "در حال ذخیره…" : "ذخیره تنظیم نمایش"}
        </button>
        {status && (
          <p role="status" className={styles.message}>
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
