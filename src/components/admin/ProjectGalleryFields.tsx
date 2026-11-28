"use client";

import { ArrowDown, ArrowUp, Trash2 } from "lucide-react";
import { useState } from "react";
import { projectGalleryLimit } from "@/lib/content-rules";
import { MediaLibrary } from "./MediaLibrary";
import styles from "./Admin.module.css";

export function ProjectGalleryFields({
  images,
  onChange,
}: {
  images: string[];
  onChange: (images: string[]) => void;
}) {
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [message, setMessage] = useState("");

  function move(index: number, offset: number) {
    const next = [...images];
    const destination = index + offset;
    [next[index], next[destination]] = [next[destination], next[index]];
    onChange(next);
    setMessage("ترتیب تصاویر تغییر کرد");
  }

  return (
    <fieldset className={styles.homeCardFields}>
      <legend>گالری تصاویر پروژه</legend>
      <p className={styles.muted}>
        تا {projectGalleryLimit.toLocaleString("fa-IR")} تصویر برای صفحهٔ جزئیات
        اضافه کنید و ترتیب نمایش‌شون رو تعیین کنید.
      </p>
      {images.length > 0 && (
        <ol className={styles.projectGalleryFields}>
          {images.map((url, index) => (
            <li key={url + ":" + index}>
              <img
                src={url}
                alt={"تصویر " + (index + 1).toLocaleString("fa-IR")}
                loading="lazy"
              />
              <div>
                <button
                  type="button"
                  aria-label={"بالا بردن تصویر " + (index + 1)}
                  disabled={index === 0}
                  onClick={() => move(index, -1)}
                >
                  <ArrowUp size={16} />
                </button>
                <button
                  type="button"
                  aria-label={"پایین بردن تصویر " + (index + 1)}
                  disabled={index === images.length - 1}
                  onClick={() => move(index, 1)}
                >
                  <ArrowDown size={16} />
                </button>
                <button
                  type="button"
                  aria-label={"حذف تصویر " + (index + 1)}
                  onClick={() => {
                    onChange(images.filter((_, i) => i !== index));
                    setMessage("تصویر از گالری برداشته شد");
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
      {images.length < projectGalleryLimit && (
        <details onToggle={(event) => setLibraryOpen(event.currentTarget.open)}>
          <summary>آپلود یا انتخاب تصویر گالری</summary>
          {libraryOpen && (
            <MediaLibrary
              onSelect={(url) => {
                if (images.includes(url)) {
                  setMessage("این تصویر قبلاً در گالری اضافه شده است");
                  return;
                }
                onChange([...images, url]);
                setMessage("تصویر به گالری اضافه شد");
              }}
            />
          )}
        </details>
      )}
      {message && (
        <p role="status" className={styles.message}>
          {message}
        </p>
      )}
    </fieldset>
  );
}
