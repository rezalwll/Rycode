"use client";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type VideoHTMLAttributes,
} from "react";
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
type Tag =
  | "div"
  | "span"
  | "section"
  | "header"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "label"
  | "ul";
type MotionProps = HTMLAttributes<HTMLElement> & { as?: Tag };
export function Reveal({
  as: Tag = "div",
  from = "translateY(24px)",
  ...props
}: MotionProps & { from?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.style.opacity = "1";
          element.style.transform = "none";
          if (!reduced())
            animation = element.animate(
              [
                { opacity: 0, transform: from },
                { opacity: 1, transform: "none" },
              ],
              {
                duration: 900,
                easing: "cubic-bezier(.16,1,.3,1)",
                fill: "backwards",
              },
            );
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: `${Math.max(0, Number(from.match(/translateY\((-?[\d.]+)px\)/)?.[1] ?? 0))}px ${Math.max(0, Number(from.match(/translateX\((-?[\d.]+)px\)/)?.[1] ?? 0))}px`,
      },
    );
    if (reduced()) {
      element.style.opacity = "1";
      element.style.transform = "none";
    } else observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [from]);
  return (
    <Tag
      {...props}
      ref={(element: HTMLElement | null) => {
        ref.current = element;
      }}
    />
  );
}
export function SplitText({
  as: Tag = "div",
  scrollLinked = false,
  ...props
}: MotionProps & { scrollLinked?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const chars = root.querySelectorAll<HTMLElement>(
      'span[style*="opacity"],span[style*="filter"]',
    );
    let animations: Animation[] = [];
    if (scrollLinked) {
      let frame = 0;
      const update = () => {
        frame = 0;
        const box = root.getBoundingClientRect();
        const progress = reduced()
          ? 1
          : Math.max(
              0,
              Math.min(
                1,
                (innerHeight - box.top) / ((innerHeight + box.height) / 2),
              ),
            );
        const count = Math.ceil(progress * chars.length);
        chars.forEach((span, index) => {
          span.style.transition = reduced()
            ? "none"
            : "opacity .15s ease-out, transform .15s ease-out";
          span.style.opacity = index < count ? "1" : "0";
          span.style.transform = index < count ? "none" : "translateY(3px)";
          span.style.filter = "none";
        });
      };
      const schedule = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      };
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        animations = Array.from(chars).flatMap((span, index) => {
          span.style.opacity = "1";
          span.style.transform = "none";
          span.style.filter = "none";
          return reduced()
            ? []
            : [
                span.animate(
                  [
                    {
                      opacity: 0,
                      transform: "translateY(60px)",
                      filter: "blur(5px)",
                    },
                    { opacity: 1, transform: "none", filter: "blur(0px)" },
                  ],
                  {
                    duration: 950,
                    delay: index * 20,
                    fill: "backwards",
                    easing: "cubic-bezier(.16,1,.3,1)",
                  },
                ),
              ];
        });
        observer.disconnect();
      },
      { threshold: 0 },
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [scrollLinked]);
  return (
    <Tag
      {...props}
      ref={(element: HTMLElement | null) => {
        ref.current = element;
      }}
    />
  );
}
export function MediaVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (
            entry.isIntersecting &&
            video.getClientRects().length &&
            !reduced()
          ) {
            video.muted = true;
            void video.play().catch(() => {});
          } else video.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);
  return <video {...props} ref={ref} muted playsInline />;
}
export function Carousel({
  items,
  kind,
  className,
  style,
  ...props
}: HTMLAttributes<HTMLElement> & {
  items: ReactNode[];
  kind: "hero" | "stats";
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => {
    const tracks = ref.current?.querySelectorAll<HTMLElement>(".framer-cc7aC");
    const animations = Array.from(tracks ?? []).map((track) =>
      track.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
        pseudoElement: "::after",
        duration: reduced() ? 1 : 3000,
        easing: "cubic-bezier(.44,0,.56,1)",
        fill: "forwards",
      }),
    );
    return () => animations.forEach((animation) => animation.cancel());
  }, [active]);
  useEffect(() => {
    if (reduced() || paused) return;
    let visible = false;
    const observer = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
    });
    if (ref.current) observer.observe(ref.current);
    const timer = setInterval(() => {
      if (visible && !document.hidden)
        setActive((value) => (value + 1) % items.length);
    }, 3000);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [items.length, kind, paused]);
  return (
    <section
      {...props}
      ref={ref}
      className={`${className} relative! overflow-hidden!`}
      style={style}
      aria-roledescription="carousel"
      aria-label={kind === "hero" ? "Studio showcase" : "Studio statistics"}
      tabIndex={0}
      data-active-slide={active}
      onDragStart={(event) => event.preventDefault()}
      onPointerDown={(event) => {
        pointer.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        const start = pointer.current;
        pointer.current = null;
        if (!start) return;
        const dx = event.clientX - start.x,
          dy = event.clientY - start.y;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy))
          setActive(
            (value) => (value + (dx < 0 ? 1 : items.length - 1)) % items.length,
          );
      }}
      onPointerCancel={() => {
        pointer.current = null;
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          setActive(
            (value) =>
              (value + (event.key === "ArrowRight" ? 1 : items.length - 1)) %
              items.length,
          );
        }
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <ul className="relative m-0 h-full w-full list-none p-0">
          {items.map((item, index) => (
            <li
              key={index}
              className="rycode-slide absolute inset-0 h-full w-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              style={{
                transform: `translateX(${(((index - active + items.length + 1) % items.length) - 1) * 100}%)`,
              }}
              aria-hidden={index !== active}
              inert={index !== active || undefined}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function Counter({
  value,
  suffix,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / 1400);
        setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      observer.disconnect();
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  return (
    <h2 {...props} ref={ref} aria-label={value + suffix}>
      {current}
      {suffix}
    </h2>
  );
}
export function Ticker({
  children,
  style,
  speed = 40,
  ...props
}: HTMLAttributes<HTMLUListElement> & { speed?: number }) {
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let animation: Animation | undefined;
    const run = () => {
      animation?.cancel();
      if (reduced() || !element.getClientRects().length) return;
      const originals = element.children;
      const first = originals[0] as HTMLElement | undefined;
      const copy = originals[originals.length / 2] as HTMLElement | undefined;
      const distance =
        first && copy
          ? copy.offsetLeft - first.offsetLeft
          : element.scrollWidth / 2;
      animation = element.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-${distance}px)` },
        ],
        {
          duration: (distance / speed) * 1000,
          iterations: Infinity,
          easing: "linear",
        },
      );
    };
    const observer = new ResizeObserver(run);
    observer.observe(element);
    void document.fonts.ready.then(run);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [speed]);
  return (
    <ul
      {...props}
      ref={ref}
      style={{ ...style, width: "max-content", maxWidth: "none", opacity: 1 }}
    >
      {children}
      {Children.toArray(children).map((child, index) =>
        isValidElement<HTMLAttributes<HTMLLIElement>>(child)
          ? cloneElement(child, {
              key: `copy-${index}`,
              "aria-hidden": true,
              inert: true,
            })
          : null,
      )}
    </ul>
  );
}
