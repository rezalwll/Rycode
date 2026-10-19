"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import styles from "./WorkArtwork.module.css";

export function WorkArtwork({
  className,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let entered = false;
    let animation: Animation | undefined;
    let visible = false;
    const update = () => {
      root.dataset.running = String(visible && !document.hidden && !reduced);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
      if (!visible || entered) return;
      entered = true;
      root.style.opacity = "1";
      if (!reduced)
        animation = root.animate(
          [
            { opacity: 0, transform: "translateY(300px)" },
            { opacity: 1, transform: "none" },
          ],
          {
            duration: 1200,
            delay: 200,
            easing: "cubic-bezier(.16,1,.3,1)",
            fill: "backwards",
          },
        );
    });
    observer.observe(root);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      animation?.cancel();
    };
  }, []);
  return (
    <div
      {...props}
      ref={ref}
      data-running="false"
      className={`${className} ${styles.artwork}`}
      style={{ ...style, transform: "none" }}
    />
  );
}
