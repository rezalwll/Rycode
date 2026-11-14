"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Play, Zap } from "lucide-react";
import { automationScenarios } from "./automation-copy";
import styles from "./AutomationServicePage.module.css";

export function AutomationMotion() {
  const scope = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const page = scope.current?.closest("[data-automation-page]");
    if (!page || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (!isIntersecting) continue;
          target.classList.add(styles.revealed);
          observer.unobserve(target);
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    const elements = page.querySelectorAll<HTMLElement>("[data-reveal]");
    for (const element of elements) observer.observe(element);
    page.classList.add(styles.motionReady);

    const finish = () => {
      if (!preference.matches) return;
      page.classList.remove(styles.motionReady);
      observer.disconnect();
    };
    preference.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", finish);
      page.classList.remove(styles.motionReady);
    };
  }, []);

  return <span ref={scope} hidden />;
}

export function AutomationDemo() {
  const [selected, setSelected] = useState(0);
  const [run, setRun] = useState(0);
  const scenario = automationScenarios[selected];

  return (
    <div className={styles.demo}>
      <div
        className={styles.demoControls}
        role="group"
        aria-label="مثال‌های خودکارسازی"
      >
        {automationScenarios.map(({ title }, index) => (
          <button
            key={title}
            type="button"
            aria-pressed={index === selected}
            onClick={() => {
              setSelected(index);
              setRun((value) => value + 1);
            }}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={styles.demoBody} key={run} aria-live="polite">
        <div className={styles.demoNode}>
          <span>رویداد شروع</span>
          <strong>{scenario.input}</strong>
        </div>
        <div className={styles.demoConnector} aria-hidden="true">
          <ArrowDown size={18} />
        </div>
        <div className={`${styles.demoNode} ${styles.demoAction}`}>
          <span>
            <Zap size={14} aria-hidden="true" /> پردازش
          </span>
          <strong>{scenario.action}</strong>
        </div>
        <div className={styles.demoConnector} aria-hidden="true">
          <ArrowDown size={18} />
        </div>
        <ul className={styles.demoResults} aria-label="خروجی‌ها">
          {scenario.outputs.map((output) => (
            <li key={output}>{output}</li>
          ))}
        </ul>
      </div>
      <div className={styles.demoFooter}>
        <p>
          نمونهٔ نمایشی. اجرای هر مسیر به سیستم‌ها و دسترسی‌های پروژه بستگی
          داره.
        </p>
        <button type="button" onClick={() => setRun((value) => value + 1)}>
          <Play size={15} aria-hidden="true" /> اجرای دوباره
        </button>
      </div>
    </div>
  );
}
