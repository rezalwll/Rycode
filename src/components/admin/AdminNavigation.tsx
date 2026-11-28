"use client";

import { ProgressLink as Link } from "@/components/ProgressLink";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import {
  Activity,
  ArrowLeftRight,
  BriefcaseBusiness,
  ClipboardList,
  FileText,
  Gauge,
  HelpCircle,
  Images,
  PanelsTopLeft,
  Inbox,
  Menu,
  MessageSquare,
  Settings2,
  Shield,
  X,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import styles from "./Admin.module.css";

const groups = [
  {
    label: "میز کار",
    items: [
      { path: "", title: "نمای کلی", Icon: Gauge },
      { path: "/leads", title: "درخواست‌ها", Icon: Inbox, adminOnly: true },
    ],
  },
  {
    label: "محتوای سایت",
    items: [
      { path: "/content", title: "نوشته‌های بلاگ", Icon: FileText },
      { path: "/projects", title: "صفحه نمونه‌کارها", Icon: BriefcaseBusiness },
      { path: "/home-projects", title: "نمونه‌کارهای صفحه اصلی", Icon: PanelsTopLeft },
      {
        path: "/comments",
        title: "دیدگاه‌ها",
        Icon: MessageSquare,
        adminOnly: true,
      },
      { path: "/media", title: "رسانه‌ها", Icon: Images },
      { path: "/faqs", title: "پرسش‌های متداول", Icon: HelpCircle },
    ],
  },
  {
    label: "مدیریت سایت",
    items: [
      {
        path: "/analytics",
        title: "آمار و لاگ‌ها",
        Icon: Activity,
        adminOnly: true,
      },
      {
        path: "/settings",
        title: "تنظیمات سایت",
        Icon: Settings2,
        adminOnly: true,
      },
      {
        path: "/redirects",
        title: "ریدایرکت‌ها",
        Icon: ArrowLeftRight,
        adminOnly: true,
      },
      { path: "/users", title: "دسترسی‌ها", Icon: Shield, adminOnly: true },
      {
        path: "/audit",
        title: "سابقه عملیات",
        Icon: ClipboardList,
        adminOnly: true,
      },
    ],
  },
];

export function AdminNavigation({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname().replace(/^\/en(?=\/)|^\/fa(?=\/)/, "");

  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const open = openedAt === pathname;
  return (
    <>
      <div className={styles.sidebarTop}>
        <Link
          href="/admin"
          loadingLocale="fa"
          className={styles.brand}
          aria-label="داشبورد رایکد"
          onClick={() => setOpenedAt(null)}
        >
          <BrandLogo />
        </Link>
        <button
          type="button"
          ref={toggle}
          className={styles.mobileToggle}
          aria-controls="admin-navigation"
          aria-expanded={open}
          onClick={() => setOpenedAt(open ? null : pathname)}
        >
          {open ? (
            <X size={17} aria-hidden="true" />
          ) : (
            <Menu size={17} aria-hidden="true" />
          )}
          {open ? "بستن" : "منو"}
        </button>
      </div>
      <nav
        id="admin-navigation"
        aria-label="مدیریت رایکد"
        className={styles.navigation}
        data-open={open}
        onKeyDown={(event) => {
          if (open && event.key === "Escape") {
            setOpenedAt(null);
            toggle.current?.focus();
          }
        }}
      >
        {groups.map(({ label, items }) => {
          const visible = items.filter((item) => isAdmin || !item.adminOnly);
          if (!visible.length) return null;

          return (
            <div className={styles.navGroup} key={label}>
              <p>{label}</p>
              {visible.map(({ path, title, Icon }) => {
                const href = "/admin" + path;
                const current = pathname === href;
                return (
                  <Link
                    href={href}
                    loadingLocale="fa"
                    key={path}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpenedAt(null)}
                  >
                    <Icon aria-hidden="true" size={17} />
                    {title}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>
    </>
  );
}
