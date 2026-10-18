"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type LineTraceProps = {
  className: string;
  axis: "x" | "y";
  distance: number;
  tabletDistance?: number;
  mobileDistance?: number;
};

/** The reference's 16px red segment; the existing class owns its track geometry. */
export function LineTrace({
  className,
  axis,
  distance,
  tabletDistance = distance,
  mobileDistance = tabletDistance,
}: LineTraceProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const segment = ref.current;
    if (!segment) return;

    // Observe the stationary track, so a moving segment cannot pause itself
    // permanently when it travels beyond the viewport.
    const track = segment.offsetParent;
    if (!track) return;
    let inView = false;
    const update = () => {
      segment.dataset.running = String(inView && !document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(track);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-line-trace={axis}
      data-running="false"
      aria-hidden="true"
      style={
        {
          "--trace-desktop": `${distance}px`,
          "--trace-tablet": `${tabletDistance}px`,
          "--trace-mobile": `${mobileDistance}px`,
        } as CSSProperties
      }
    />
  );
}
