"use client";

import { useEffect, useRef } from "react";
import type { FluidColor, FooterFluidController } from "./footer-fluid-engine";

/** A footer-local fluid canvas that responds to a fine pointer. */
export function FooterFluid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.closest("footer");
    if (!canvas || !host) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let inView = false;
    let disposed = false;
    let loading = false;
    let controller: FooterFluidController | null = null;

    const sync = () => {
      if (disposed) return;
      if (!inView || document.hidden || reducedMotion.matches || !finePointer.matches) {
        controller?.pause();
        return;
      }
      if (controller) {
        controller.resume();
        return;
      }
      if (loading) return;
      loading = true;
      void import("./footer-fluid-engine")
        .then(({ startFluidSimulation }) => {
          if (disposed) return;
          if (!inView || document.hidden || reducedMotion.matches || !finePointer.matches) {
            loading = false;
            return;
          }
          const palette: FluidColor[] = [
            { r: 102 / 255, g: 192 / 255, b: 1 },
            { r: 109 / 255, g: 76 / 255, b: 219 / 255 },
            { r: 1, g: 156 / 255, b: 82 / 255 },
          ];
          controller = startFluidSimulation(canvas, host, palette);
          if (inView && !document.hidden && !reducedMotion.matches && finePointer.matches) {
            controller?.resume();
          }
        })
        .catch(() => {
          // If WebGL is unavailable, the footer keeps its normal background.
        });
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry?.isIntersecting ?? false;
      sync();
    });
    observer.observe(host);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);
    finePointer.addEventListener("change", sync);

    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
      finePointer.removeEventListener("change", sync);
      controller?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="rycode-footer-fluid-canvas" aria-hidden="true" tabIndex={-1} />;
}
