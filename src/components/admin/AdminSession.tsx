"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Admin.module.css";
import { BrandLogo } from "@/components/BrandLogo";
export function AdminLogin({ next }: { next: string }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.login}>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setBusy(true);
          setMessage("");
          const data = new FormData(event.currentTarget);
          try {
            const response = await fetch("/api/auth/sign-in/email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: data.get("email"),
                password: data.get("password"),
              }),
            });
            if (!response.ok)
              throw new Error("ورود انجام نشد؛ ایمیل و رمز را بررسی کنید");
            router.replace(next);
            router.refresh();
          } catch (error) {
            setMessage((error as Error).message);
          } finally {
            setBusy(false);
          }
        }}
      >
        <Link className={styles.brand} href="/">
          <BrandLogo />
        </Link>
        <h1>ورود به مدیریت</h1>
        <p className={styles.muted}>
          حساب مدیر از طریق ابزار راه‌اندازی ساخته می‌شود.
        </p>
        <label>
          ایمیل
          <input
            name="email"
            type="email"
            dir="ltr"
            required
            autoComplete="username"
            maxLength={254}
          />
        </label>
        <label>
          رمز عبور
          <input
            name="password"
            type="password"
            dir="ltr"
            required
            autoComplete="current-password"
            minLength={12}
            maxLength={128}
          />
        </label>
        <button className={styles.primary} disabled={busy}>
          {busy ? "در حال ورود…" : "ورود"}
        </button>
        {message && (
          <p role="alert" className={styles.message}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
export function AdminLogout() {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await fetch("/api/auth/sign-out", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: "{}",
        });
        router.replace("/admin/login");
        router.refresh();
      }}
    >
      خروج
    </button>
  );
}
