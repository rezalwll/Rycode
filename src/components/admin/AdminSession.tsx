"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpLeft, Eye, EyeOff, LogOut } from "lucide-react";
import styles from "./Admin.module.css";
import { BrandLogo } from "@/components/BrandLogo";
import { BrandLoadingMark } from "@/components/BrandLoading";
export function AdminLogin({ next }: { next: string }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>
        <aside className={styles.loginBrand}>
          <Link className={styles.brand} href="/" aria-label="سایت رایکد">
            <BrandLogo />
          </Link>
          <div>
            <p>پنل مدیریت رایکد</p>
            <span>درخواست‌های همکاری، نوشته‌ها و دیدگاه‌های بلاگ</span>
          </div>
        </aside>
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
          <Link className={styles.backLink} href="/">
            <ArrowRight size={15} aria-hidden="true" /> بازگشت به سایت
          </Link>
          <h1>ورود به پنل</h1>
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
          <div className={styles.passwordField}>
            <label htmlFor="admin-password">رمز عبور</label>
            <div>
              <input
                id="admin-password"
                name="password"
                type={showPassword ? "text" : "password"}
                dir="ltr"
                required
                autoComplete="current-password"
                minLength={12}
                maxLength={128}
              />
              <button
                type="button"
                aria-label={
                  showPassword ? "پنهان کردن رمز عبور" : "نمایش رمز عبور"
                }
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? (
                  <EyeOff size={17} aria-hidden="true" />
                ) : (
                  <Eye size={17} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <button className={styles.primary} disabled={busy}>
            {busy ? "در حال ورود…" : "ورود"}
            {busy ? <BrandLoadingMark /> : <ArrowUpLeft size={17} aria-hidden="true" />}
          </button>
          {message && (
            <p role="alert" className={styles.message}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
export function AdminLogout() {
  const router = useRouter();
  return (
    <button
      aria-label="خروج"
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
      <LogOut size={16} aria-hidden="true" /> <span>خروج</span>
    </button>
  );
}
