"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import styles from "./BlogHero.module.css";

/** The featured articles share one four-second image/progress cycle. */
export function BlogHero({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !visible ||
      focused ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = setInterval(() => {
      if (!document.hidden) setActive((value) => (value + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, [visible, focused]);

  return (
    <section
      {...props}
      ref={ref}
      className={`${className} ${styles.hero}`}
      data-blog-active={active}
      data-blog-running={visible && !focused}
      onFocusCapture={(event) => {
        const link = (event.target as Element).closest("a");
        const links = [...event.currentTarget.querySelectorAll("a")];
        const index = link ? links.indexOf(link) : -1;
        if (index >= 0) setActive(index);
        setFocused(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      {children}
    </section>
  );
}
