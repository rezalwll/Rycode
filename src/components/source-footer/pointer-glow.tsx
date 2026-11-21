"use client";

import { useEffect, useRef } from "react";

export function FooterPointerGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const footer = glow?.closest("footer");
    if (!glow || !footer) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      const bounds = footer.getBoundingClientRect();
      glow.style.setProperty("--footer-glow-x", `${x - bounds.left}px`);
      glow.style.setProperty("--footer-glow-y", `${y - bounds.top}px`);
      glow.dataset.active = "";
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches) return;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const hide = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      delete glow.dataset.active;
    };

    footer.addEventListener("pointermove", move, { passive: true });
    footer.addEventListener("pointerleave", hide);
    footer.addEventListener("pointercancel", hide);
    reducedMotion.addEventListener("change", hide);

    return () => {
      footer.removeEventListener("pointermove", move);
      footer.removeEventListener("pointerleave", hide);
      footer.removeEventListener("pointercancel", hide);
      reducedMotion.removeEventListener("change", hide);
      hide();
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="rycode-footer-pointer-glow"
      aria-hidden="true"
    />
  );
}
