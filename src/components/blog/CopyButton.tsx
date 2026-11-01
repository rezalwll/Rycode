"use client";
import { useEffect, useRef, useState } from "react";
import { Check, Copy, Link2 } from "lucide-react";

export function CopyButton({
  text,
  fa,
  share = false,
  className,
}: {
  text?: string;
  fa: boolean;
  share?: boolean;
  className?: string;
}) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(
            share ? location.origin + location.pathname : text || "",
          );
          setState("copied");
        } catch {
          setState("error");
        }
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setState("idle"), 2500);
      }}
      aria-label={
        share
          ? fa
            ? "کپی لینک مقاله"
            : "Copy article link"
          : fa
            ? "کپی کد"
            : "Copy code"
      }
    >
      {state === "copied" ? (
        <Check size={15} aria-hidden />
      ) : share ? (
        <Link2 size={15} aria-hidden />
      ) : (
        <Copy size={15} aria-hidden />
      )}
      <span aria-live="polite">
        {state === "copied"
          ? fa
            ? "کپی شد"
            : "Copied"
          : state === "error"
            ? fa
              ? "کپی نشد؛ دوباره بزن"
              : "Copy failed; retry"
            : share
              ? fa
                ? "کپی لینک مقاله"
                : "Copy article link"
              : fa
                ? "کپی کد"
                : "Copy code"}
      </span>
    </button>
  );
}
