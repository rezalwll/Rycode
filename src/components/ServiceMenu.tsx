"use client";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { localizedHref, type Locale } from "@/lib/i18n";
import styles from "./ServiceMenu.module.css";

type MenuService = { id: string; title: string };

export function ServiceMenu({
  locale,
  mobile,
  services,
}: {
  locale: Locale;
  mobile: boolean;
  services: MenuService[];
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const fa = locale === "fa";
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);
  return (
    <div
      ref={root}
      className={styles.root}
      data-mobile={mobile}
      onPointerEnter={(event) => {
        if (!mobile && event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (
          !mobile &&
          event.pointerType === "mouse" &&
          !root.current?.contains(document.activeElement)
        )
          setOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.stopPropagation();
          event.preventDefault();
          setOpen(false);
          trigger.current?.focus();
        }
        if (event.target === trigger.current && event.key === "ArrowDown") {
          event.preventDefault();
          setOpen(true);
          requestAnimationFrame(() =>
            root.current?.querySelector<HTMLAnchorElement>("a")?.focus(),
          );
        }
      }}
    >
      <button
        ref={trigger}
        className={styles.trigger}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={(event) => {
          // Mouse entry already opens the desktop panel before the click fires.
          const mouseClick =
            !mobile &&
            event.detail > 0 &&
            window.matchMedia("(hover: hover) and (pointer: fine)").matches;
          setOpen((value) => (mouseClick ? true : !value));
        }}
      >
        {fa ? "خدمات" : "Services"}
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m4 6 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={styles.panel}
        id={panelId}
        hidden={!open}
        data-lenis-prevent="true"
      >
        <div className={styles.inner}>
          <p className={styles.caption}>
            <span aria-hidden="true">✦</span>
            {fa
              ? "راه‌حل مناسب پروژه‌ات را پیدا کن"
              : "Find the right way forward"}
          </p>
          <ul className={styles.list}>
            {services.map((service, index) => (
              <li key={service.id}>
                <Link
                  href={localizedHref("/services/" + service.id, locale)}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.number}>
                    {(index + 1).toLocaleString(locale, {
                      minimumIntegerDigits: 2,
                    })}
                  </span>
                  <span>{service.title}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    {fa ? "↖" : "↗"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className={styles.all}
            href={localizedHref("/services", locale)}
            onClick={() => setOpen(false)}
          >
            <span>{fa ? "همهٔ خدمات رایکد" : "Explore all services"}</span>
            <span aria-hidden="true">{fa ? "←" : "→"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
