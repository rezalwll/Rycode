import Link from "next/link";
import { redirect } from "next/navigation";
import { currentStaff } from "@/server/auth";
import { AdminLogout } from "@/components/admin/AdminSession";
import styles from "@/components/admin/Admin.module.css";
import { BrandLogo } from "@/components/BrandLogo";
const sections = [
  ["", "نمای کلی"],
  ["leads", "درخواست‌ها"],
  ["content", "محتوا و انتشار"],
  ["media", "رسانه‌ها"],
  ["faqs", "پرسش‌های متداول"],
  ["settings", "تنظیمات سایت"],
  ["redirects", "ریدایرکت‌ها"],
  ["analytics", "گزارش‌ها"],
  ["users", "دسترسی‌ها"],
  ["audit", "سابقهٔ عملیات"],
];
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const staff = await currentStaff();
  if (!staff) redirect("/admin/login");
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.brand}>
          <BrandLogo />
        </Link>
        <nav aria-label="مدیریت">
          {sections
            .filter(
              ([key]) =>
                staff.role === "ADMIN" ||
                ["", "content", "media", "faqs"].includes(key),
            )
            .map(([key, title]) => (
              <Link key={key} href={"/admin" + (key ? "/" + key : "")}>
                {title}
              </Link>
            ))}
        </nav>
        <p>{staff.name}</p>
        <small>{staff.email}</small>
        <div className={styles.actions}>
          <AdminLogout />
        </div>
        <Link href="/">مشاهدهٔ سایت ↗</Link>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
