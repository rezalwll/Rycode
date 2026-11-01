"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { TableKit } from "@tiptap/extension-table";
import { useState } from "react";
import type { RichNode } from "@/lib/content-rules";
import styles from "./Admin.module.css";
export function RichEditor({
  name,
  initial,
}: {
  name: string;
  initial: RichNode;
}) {
  const [value, setValue] = useState(JSON.stringify(initial));
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        codeBlock: { enableTabIndentation: true, tabSize: 2 },
      }),
      Image.configure({ allowBase64: false }),
      TableKit,
    ],
    content: initial,
    immediatelyRender: false,
    onUpdate: ({ editor }) => setValue(JSON.stringify(editor.getJSON())),
  });
  return (
    <div className={styles.editor}>
      <input type="hidden" name={name} value={value} />
      <div
        className={styles.editorToolbar}
        role="toolbar"
        aria-label="ویرایش متن"
      >
        <button
          type="button"
          aria-pressed={editor?.isActive("bold") || false}
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          پررنگ
        </button>
        <button
          type="button"
          aria-pressed={editor?.isActive("italic") || false}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          مورب
        </button>
        <button
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          تیتر ۲
        </button>
        <button
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          تیتر ۳
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
        >
          فهرست
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        >
          شماره‌دار
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        >
          نقل‌قول
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        >
          کد
        </button>
        <button
          type="button"
          aria-pressed={editor?.isActive("code") || false}
          onClick={() => editor?.chain().focus().toggleCode().run()}
        >
          کد درون‌متنی
        </button>
        {editor?.isActive("codeBlock") && (
          <select
            aria-label="زبان بلوک کد"
            value={String(editor.getAttributes("codeBlock").language || "text")}
            onChange={(event) =>
              editor
                .chain()
                .focus()
                .updateAttributes("codeBlock", { language: event.target.value })
                .run()
            }
          >
            {[
              "text",
              "javascript",
              "typescript",
              "tsx",
              "python",
              "bash",
              "json",
              "html",
              "css",
              "sql",
            ].map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        )}
        <button
          type="button"
          onClick={() =>
            editor
              ?.chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
        >
          جدول
        </button>
        {editor?.isActive("table") && (
          <>
            <button
              type="button"
              onClick={() => editor.chain().focus().addRowAfter().run()}
            >
              ردیف جدید
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().addColumnAfter().run()}
            >
              ستون جدید
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().deleteTable().run()}
            >
              حذف جدول
            </button>
          </>
        )}
        <button
          type="button"
          onClick={() => {
            const href = prompt(
              "نشانی لینک (https:// یا مسیر داخلی)",
              editor?.getAttributes("link").href || "https://",
            );
            if (href)
              editor
                ?.chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href })
                .run();
            else if (href === "") editor?.chain().focus().unsetLink().run();
          }}
        >
          پیوند
        </button>
        <button
          type="button"
          onClick={() => {
            const src = prompt("مسیر تصویر از کتابخانهٔ رسانه (/media/…)");
            if (src && /^\/media\/[a-f0-9-]+$/.test(src))
              editor
                ?.chain()
                .focus()
                .setImage({ src, alt: prompt("توضیح تصویر") || "" })
                .run();
          }}
        >
          تصویر
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().undo().run()}
        >
          واگرد
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().redo().run()}
        >
          بازگرد
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
