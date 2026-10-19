"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
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
      StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
      Image.configure({ allowBase64: false }),
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
