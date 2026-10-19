"use client";
import { useEffect, useState } from "react";
import styles from "./Admin.module.css";
type MediaItem = {
  id: string;
  filename: string;
  alt: string;
  width: number;
  height: number;
};
export function MediaLibrary({
  onSelect,
}: {
  onSelect?: (url: string) => void;
}) {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    fetch("/api/admin/media")
      .then(async (r) => {
        if (!r.ok) throw new Error("دریافت رسانه‌ها انجام نشد");
        return r.json();
      })
      .then((data) => {
        if (active) setItems(data);
      })
      .catch((e) => {
        if (active) setMessage(e.message);
      });
    return () => {
      active = false;
    };
  }, []);
  return (
    <div className={styles.panel}>
      <label>
        افزودن تصویر (JPEG، PNG یا WebP، حداکثر ۸ مگابایت)
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          disabled={busy}
          onChange={async (event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            setBusy(true);
            setMessage("");
            try {
              const form = new FormData();
              form.set("file", file);
              const response = await fetch("/api/media", {
                method: "POST",
                body: form,
              });
              const result = await response.json();
              if (!response.ok) throw new Error(result.error);
              setItems((previous) => [result, ...previous]);
              onSelect?.("/media/" + result.id);
              setMessage("تصویر ذخیره شد");
            } catch (e) {
              setMessage((e as Error).message);
            } finally {
              setBusy(false);
              event.target.value = "";
            }
          }}
        />
      </label>
      {message && (
        <p role="status" className={styles.message}>
          {message}
        </p>
      )}
      <div className={styles.mediaGrid}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (onSelect) onSelect("/media/" + item.id);
              else
                void navigator.clipboard
                  ?.writeText("/media/" + item.id)
                  .then(() => setMessage("مسیر تصویر کپی شد"));
            }}
            title="انتخاب یا کپی مسیر"
          >
            <img
              src={"/media/" + item.id}
              alt={item.alt || item.filename}
              loading="lazy"
            />
            <small>
              {item.width}×{item.height}
            </small>
            <small dir="ltr">/media/{item.id}</small>
          </button>
        ))}
      </div>
      {items.length === 0 && (
        <p className={styles.empty}>هنوز تصویری اضافه نشده است</p>
      )}
    </div>
  );
}
