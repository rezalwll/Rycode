import Link from "next/link";
import { redirect } from "next/navigation";
import { currentStaff } from "@/server/auth";
import { AdminLogout } from "@/components/admin/AdminSession";
import { AdminNavigation } from "@/components/admin/AdminNavigation";
import styles from "@/components/admin/Admin.module.css";
import { ArrowUpLeft, UserRound } from "lucide-react";
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
        <AdminNavigation isAdmin={staff.role === "ADMIN"} />
      </aside>
      <div className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.profile}>
            <span className={styles.profileIcon}>
              <UserRound size={17} aria-hidden="true" />
            </span>
            <div>
              <strong>{staff.name}</strong>
              <small>{staff.role === "ADMIN" ? "مدیر سایت" : "ویرایشگر"}</small>
            </div>
          </div>
          <div className={styles.topbarActions}>
            <Link href="/" className={styles.button} aria-label="مشاهده سایت">
              <span>مشاهده سایت</span>{" "}
              <ArrowUpLeft size={15} aria-hidden="true" />
            </Link>
            <AdminLogout />
          </div>
        </header>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
