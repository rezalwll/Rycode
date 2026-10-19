import type { Metadata } from "next";
import styles from "@/components/admin/Admin.module.css";
export const metadata: Metadata = {
  title: "مدیریت رایکد",
  robots: { index: false, follow: false },
};
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.root}>{children}</div>;
}
