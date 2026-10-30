"use client";
import {
  ArrowRight,
  Blocks,
  Bot,
  ChartNoAxesCombined,
  ChevronDown,
  CircleHelp,
  CodeXml,
  FileSpreadsheet,
  Globe2,
  Headset,
  Menu,
  Monitor,
  Moon,
  Route,
  ScanLine,
  ShieldCheck,
  Sun,
  UsersRound,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  motion,
  useIsPresent,
  useReducedMotion,
} from "motion/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";

type SourceNavItem = {
  id: string;
  label: string;
  href: string;
  menu?: Array<{
    title: string;
    id?: string;
    items: Array<{ id?: string; label: string; href: string }>;
  }>;
  emphasis?: boolean;
};

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

type ThemeMode = "light" | "dark" | "system";
const themeKey = "rycode-theme";
const themeEvent = "rycode-theme-change";
let themeMemory: ThemeMode = "light";

function readTheme(): ThemeMode {
  try {
    const stored = localStorage.getItem(themeKey);
    return stored === "dark" || stored === "system" ? stored : "light";
  } catch {
    return themeMemory;
  }
}

function applyTheme(mode: ThemeMode) {
  const dark =
    mode === "dark" ||
    (mode === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

function ThemeToggle({
  locale,
  variant = "default",
}: {
  locale: Locale;
  variant?: "default" | "light";
}) {
  const mode = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("storage", onChange);
      window.addEventListener(themeEvent, onChange);
      return () => {
        window.removeEventListener("storage", onChange);
        window.removeEventListener(themeEvent, onChange);
      };
    },
    readTheme,
    () => "light" as const,
  );
  useEffect(() => {
    applyTheme(mode);
  }, [mode]);
  const options = [
    {
      value: "light" as const,
      icon: Sun,
      label: locale === "fa" ? "روشن" : "Light",
    },
    {
      value: "dark" as const,
      icon: Moon,
      label: locale === "fa" ? "تاریک" : "Dark",
    },
    {
      value: "system" as const,
      icon: Monitor,
      label: locale === "fa" ? "سیستم" : "System",
    },
  ];
  return (
    <div
      className={cn(
        "rycode-theme-toggle inline-flex items-center gap-0.5 rounded-full border border-border/80 bg-surface-2/70 p-0.5",
        variant === "light" && "border-white/20 bg-black/10",
      )}
      role="group"
      aria-label={locale === "fa" ? "حالت نمایش" : "Theme mode"}
    >
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          title={label}
          aria-pressed={mode === value}
          onClick={() => {
            themeMemory = value;
            try {
              localStorage.setItem(themeKey, value);
            } catch {
              /* memory fallback */
            }
            window.dispatchEvent(new Event(themeEvent));
            applyTheme(value);
          }}
          className={cn(
            "grid size-8 place-items-center rounded-full transition-[background-color,color,box-shadow,transform] duration-200",
            mode === value
              ? variant === "light"
                ? "bg-white text-ink shadow-[0_2px_8px_rgba(0,0,0,0.16)]"
                : "bg-foreground text-background shadow-[0_2px_8px_rgba(38,48,74,0.16)]"
              : variant === "light"
                ? "text-white/55 hover:bg-white/10 hover:text-white"
                : "text-muted-foreground hover:bg-brand-soft hover:text-foreground",
          )}
        >
          <Icon className="size-3.5" />
        </button>
      ))}
    </div>
  );
}

function navItems(
  locale: Locale,
  services: Array<{ id: string; title: string }>,
): SourceNavItem[] {
  const fa = locale === "fa";
  return [
    {
      id: "services",
      label: fa ? "خدمات" : "Services",
      href: "/services",
      menu: [
        {
          title: fa ? "خدمات" : "Services",
          items: services.map((service) => ({
            label: service.title,
            href: `/services/${service.id}`,
          })),
        },
      ],
    },
    { id: "work", label: fa ? "نمونه‌کارها" : "Work", href: "/work" },
    {
      id: "about",
      label: fa ? "درباره ما" : "About us",
      href: "/#About%20Section",
      menu: [
        {
          id: "about-links",
          title: fa ? "آشنایی با رایکد" : "Meet RYCODE",
          items: [
            {
              label: fa ? "درباره رایکد" : "About RYCODE",
              href: "/#About%20Section",
            },
            { label: fa ? "چرا رایکد" : "Why RYCODE", href: "/#expertise" },
            {
              label: fa ? "فرایند همکاری" : "Our process",
              href: "/#Process%20Section",
            },
            {
              label: fa ? "ابزار و تکنولوژی" : "Our technology",
              href: "/#expertise",
            },
            { label: fa ? "پرسش‌های متداول" : "FAQ", href: "/#home-faq" },
          ],
        },
      ],
    },
    { id: "blog", label: fa ? "بلاگ" : "Blog", href: "/blog" },
    { id: "contact", label: fa ? "تماس با ما" : "Contact", href: "/contact" },
    {
      id: "get-started",
      label: fa ? "شروع همکاری" : "Get started",
      href: "/contact",
      emphasis: true,
    },
  ];
}

export function SourceSiteHeader({
  locale,
  services,
}: {
  locale: Locale;
  services: Array<{ id: string; title: string }>;
}) {
  const pathname = usePathname();
  const routePath = pathname.replace(/^\/(?:fa|en)(?=\/|$)/, "") || "/";
  const [mobilePath, setMobilePath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<{
    href: string;
    pinned: boolean;
  } | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const isFa = locale === "fa";
  const nav = navItems(locale, services);
  const isHome = routePath === "/";
  const elevated = scrolled || !isHome;
  const overlay = isHome && !scrolled;
  const menuPath = `${locale}:${routePath}`;
  const mobileOpen = mobilePath === menuPath;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node))
        setDesktopOpen(null);
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnResize = () => {
      setDesktopOpen(null);
      setMobilePath(null);
    };
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnResize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnResize);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "rycode-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-shadow duration-300",
          overlay
            ? "reference-overlay-header border-white/15 bg-black/15 text-white"
            : "border-border bg-surface text-foreground",
          elevated ? "shadow-[0_5px_20px_rgba(0,0,0,0.04)]" : "shadow-none",
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[70] focus:bg-surface focus:p-3"
        >
          {isFa ? "رفتن به محتوای اصلی" : "Skip to content"}
        </a>
        <div className="rycode-header-inner relative mx-auto grid h-14 w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 [direction:ltr] sm:h-[72px] sm:px-6 xl:gap-5">
          <HeaderActions
            locale={locale}
            pathname={routePath}
            overlay={overlay}
            className="hidden min-w-0 justify-self-start sm:flex"
          />
          <div className="sm:hidden" />

          <Link
            href="/"
            aria-label="RYCODE"
            onClick={() => setDesktopOpen(null)}
            className="justify-self-center"
          >
            <BrandLogo tone={overlay ? "dark" : "light"} />
          </Link>

          <nav
            aria-label={isFa ? "ناوبری اصلی" : "Primary navigation"}
            className="hidden min-w-0 items-center justify-self-end xl:flex"
            dir={isFa ? "rtl" : "ltr"}
          >
            <ul className="flex min-w-0 flex-nowrap items-center gap-1">
              {nav
                .filter((item) => !item.emphasis)
                .map((item, index) => (
                  <DesktopNavItem
                    key={`${item.id ?? item.href}-${index}`}
                    item={item}
                    pathname={routePath}
                    overlay={overlay}
                    locale={locale}
                    open={desktopOpen?.href === item.href}
                    pinned={
                      desktopOpen?.href === item.href && desktopOpen.pinned
                    }
                    onOpen={() =>
                      setDesktopOpen((current) =>
                        current?.href === item.href
                          ? current
                          : { href: item.href, pinned: false },
                      )
                    }
                    onToggle={() =>
                      setDesktopOpen((current) =>
                        current?.href === item.href && current.pinned
                          ? null
                          : { href: item.href, pinned: true },
                      )
                    }
                    onClose={() =>
                      setDesktopOpen((current) =>
                        current?.href === item.href ? null : current,
                      )
                    }
                  />
                ))}
            </ul>
          </nav>

          <button
            ref={mobileTrigger}
            type="button"
            onClick={() => {
              setDesktopOpen(null);
              setMobilePath(menuPath);
            }}
            aria-controls="site-mobile-menu"
            aria-label={isFa ? "باز کردن منو" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "grid size-10 place-items-center justify-self-end rounded-md border transition-colors xl:hidden",
              overlay
                ? "border-white/35 bg-transparent text-white hover:border-white/75 hover:bg-white/10"
                : "border-border bg-surface text-foreground hover:border-brand hover:bg-brand-soft",
            )}
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <MobileMenu
            key="mobile-navigation"
            locale={locale}
            nav={nav}
            pathname={routePath}
            onClose={() => setMobilePath(null)}
            returnFocusRef={mobileTrigger}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function DesktopNavItem({
  item,
  pathname,
  overlay,
  locale,
  open,
  pinned,
  onOpen,
  onToggle,
  onClose,
}: {
  item: SourceNavItem;
  pathname: string;
  overlay: boolean;
  locale: Locale;
  open: boolean;
  pinned: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
}) {
  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const groups = item.menu?.length ?? 0;
  const servicesMenu = item.href === "/services";
  const showLabel =
    locale === "fa" ? `زیرمنوی ${item.label}` : `${item.label} submenu`;

  return (
    <li
      className="relative flex h-[72px] items-center"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && item.menu) onOpen();
      }}
      onPointerLeave={() => {
        if (!pinned && !panelRef.current?.contains(document.activeElement))
          onClose();
      }}
      onBlur={(event) => {
        if (pinned && !event.relatedTarget) return;
        if (!event.currentTarget.contains(event.relatedTarget as Node))
          onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
          triggerRef.current?.focus();
        }
        if (event.key === "ArrowDown" && item.menu) {
          event.preventDefault();
          onOpen();
          requestAnimationFrame(() =>
            panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus(),
          );
        }
      }}
    >
      {item.menu ? (
        <button
          ref={triggerRef}
          type="button"
          aria-label={showLabel}
          aria-expanded={open}
          aria-controls={panelId}
          aria-current={active ? "page" : undefined}
          onClick={onToggle}
          className={cn(
            "rycode-primary-link inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-[0.75rem] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
            overlay
              ? "text-white/80 focus-visible:outline-white"
              : "text-foreground focus-visible:outline-brand",
          )}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={cn(
              "size-3.5 transition-transform",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      ) : (
        <Link
          href={localizedHref(item.href, locale)}
          aria-current={active ? "page" : undefined}
          onFocus={onClose}
          onClick={onClose}
          className={cn(
            "rycode-primary-link relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[0.75rem] font-medium transition-colors",
            overlay
              ? "text-white/75 hover:text-white"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {item.label}
        </Link>
      )}

      {item.menu && (
        <div
          ref={panelRef}
          id={panelId}
          role="region"
          aria-label={showLabel}
          aria-hidden={!open}
          inert={!open ? true : undefined}
          data-state={open ? "open" : "closed"}
          className="rycode-desktop-submenu absolute right-0 top-full z-50 w-max max-w-[calc(100vw-3rem)] pt-2"
          dir={locale === "fa" ? "rtl" : "ltr"}
        >
          {servicesMenu ? (
            <ServicesMenu
              locale={locale}
              pathname={pathname}
              onClose={onClose}
              items={item.menu[0]?.items ?? []}
            />
          ) : (
            <div
              className={cn(
                "rycode-submenu-surface grid gap-4",
                groups === 1
                  ? "grid-cols-1"
                  : groups === 2
                    ? "grid-cols-2"
                    : groups >= 4
                      ? "grid-cols-4"
                      : "grid-cols-3",
              )}
            >
              {item.menu.map((group) => (
                <div
                  key={group.title}
                  className={
                    group.id === "service-resources"
                      ? "col-span-4 flex items-center justify-between gap-6 border-t border-border pt-4"
                      : undefined
                  }
                >
                  {group.id !== "about-links" && (
                    <p
                      className={cn(
                        "text-xs font-semibold text-foreground dark:text-foreground",
                        group.id === "service-resources"
                          ? "shrink-0"
                          : "mb-2 border-b border-border pb-2",
                      )}
                    >
                      {group.title}
                    </p>
                  )}
                  <ul
                    className={
                      group.id === "service-resources"
                        ? "flex flex-wrap gap-2"
                        : "rycode-submenu-list"
                    }
                  >
                    {group.items.map((child, index) => (
                      <li
                        key={`${child.id ?? child.href}-${child.label}-${index}`}
                      >
                        <SubmenuLink
                          href={child.href}
                          locale={locale}
                          onClick={onClose}
                          current={pathname === child.href}
                        >
                          {child.label}
                        </SubmenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </li>
  );
}

const submenuIcons: Record<string, LucideIcon> = {
  "/services/build": ScanLine,
  "/services/grow": ChartNoAxesCombined,
  "/services/software": CodeXml,
  "/services/rescue": Wrench,
  "/services/connect": Bot,
  "/services/data": FileSpreadsheet,
  "/services/continue": Headset,
  "/services/web-development": ScanLine,
  "/services/seo-growth": ChartNoAxesCombined,
  "/services/custom-software": CodeXml,
  "/services/project-rescue": Wrench,
  "/services/api-integration": Bot,
  "/services/data-analytics": FileSpreadsheet,
  "/services/ongoing-support": Headset,
  "/about": UsersRound,
  "/about#approach": ShieldCheck,
  "/about#process": Route,
  "/about#technology": Blocks,
  "/faq": CircleHelp,
};

function SubmenuLink({
  href,
  locale,
  children,
  onClick,
  current,
  className,
}: {
  href: string;
  locale: Locale;
  children: ReactNode;
  onClick: () => void;
  current: boolean;
  className?: string;
}) {
  const Icon = submenuIcons[href] ?? ArrowRight;
  return (
    <Link
      href={localizedHref(href, locale)}
      onClick={onClick}
      aria-current={current ? "page" : undefined}
      className={cn("rycode-submenu-link", className)}
    >
      <span className="rycode-submenu-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={1.65} />
      </span>
      <span className="rycode-submenu-label">{children}</span>
      <ArrowRight
        className="rycode-submenu-arrow"
        size={14}
        aria-hidden="true"
      />
    </Link>
  );
}

function ServicesMenu({
  locale,
  pathname,
  onClose,
  items,
  mobile = false,
}: {
  locale: Locale;
  pathname: string;
  onClose: () => void;
  items: Array<{ label: string; href: string }>;
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "rycode-submenu-surface rycode-services-menu",
        mobile && "rycode-services-menu-mobile",
      )}
    >
      <ul className="rycode-services-menu-list">
        {items.map((service) => (
          <li key={service.href}>
            <SubmenuLink
              locale={locale}
              href={service.href}
              onClick={onClose}
              current={pathname === service.href}
              className="rycode-services-menu-link"
            >
              {service.label}
            </SubmenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeaderActions({
  locale,
  pathname,
  overlay,
  className,
}: {
  locale: Locale;
  pathname: string;
  overlay: boolean;
  className?: string;
}) {
  const isFa = locale === "fa";

  return (
    <div
      className={cn(
        "rycode-header-tools inline-flex items-center gap-1 rounded-full border p-1 backdrop-blur-md",
        overlay
          ? "border-white/20 bg-white/[0.08] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          : "border-border/80 bg-surface/80 text-foreground shadow-[0_8px_24px_rgba(38,48,74,0.06)]",
        className,
      )}
      dir="ltr"
    >
      <Link
        href={localizedHref(pathname, isFa ? "en" : "fa")}
        hrefLang={isFa ? "en" : "fa"}
        aria-label={isFa ? "Switch to English" : "تغییر زبان به فارسی"}
        title={isFa ? "Switch to English" : "تغییر زبان به فارسی"}
        className={cn(
          "group inline-flex h-9 items-center gap-2 rounded-full px-3 font-latin text-[0.68rem] font-bold tracking-[0.14em] transition-colors",
          overlay
            ? "text-white/75 hover:bg-white/10 hover:text-white"
            : "text-foreground/70 hover:bg-brand-soft hover:text-foreground",
        )}
      >
        <Globe2
          className="size-3.5 transition-transform duration-200 group-hover:rotate-12"
          aria-hidden
        />
        {isFa ? "EN" : "FA"}
      </Link>
      <span
        aria-hidden
        className={cn("h-5 w-px", overlay ? "bg-white/20" : "bg-border")}
      />
      <ThemeToggle locale={locale} variant={overlay ? "light" : "default"} />
    </div>
  );
}

function MobileMenu({
  locale,
  nav,
  pathname,
  onClose,
  returnFocusRef,
}: {
  locale: Locale;
  nav: SourceNavItem[];
  pathname: string;
  onClose: () => void;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const isFa = locale === "fa";
  const present = useIsPresent();
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState<string | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!present) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = returnFocusRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [present, returnFocusRef]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] xl:hidden"
      dir="ltr"
      aria-hidden={!present}
      inert={!present ? true : undefined}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ pointerEvents: present ? "auto" : "none" }}
    >
      <button
        type="button"
        aria-label={isFa ? "بستن منو" : "Close menu"}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      <motion.aside
        ref={dialogRef}
        id="site-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={isFa ? "منوی سایت" : "Site menu"}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            onClose();
          }
          if (event.key !== "Tab") return;
          const controls = Array.from(
            dialogRef.current?.querySelectorAll<HTMLElement>(
              "a[href], button:not([disabled])",
            ) ?? [],
          ).filter((element) => !element.closest("[hidden]"));
          const first = controls[0];
          const last = controls.at(-1);
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
          if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        className="relative ml-auto flex h-dvh w-full max-w-[420px] flex-col border-l border-border bg-surface text-foreground shadow-2xl"
        dir={isFa ? "rtl" : "ltr"}
        initial={reduceMotion ? false : { x: 24 }}
        animate={{ x: 0 }}
        exit={{ x: 24 }}
        transition={{
          duration: reduceMotion ? 0 : 0.24,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
          <BrandLogo tone="light" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={isFa ? "بستن" : "Close"}
            className="grid size-10 place-items-center rounded-xl border border-border transition-colors hover:bg-brand-soft"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav
          aria-label={isFa ? "منوی موبایل" : "Mobile navigation"}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-3"
        >
          <ul>
            {nav.map((item, index) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li
                  key={`${item.id ?? item.href}-${index}`}
                  className="border-b border-border py-1"
                >
                  <div className="flex items-center gap-3">
                    {item.menu ? (
                      <button
                        type="button"
                        aria-label={
                          isFa ? `نمایش ${item.label}` : `Show ${item.label}`
                        }
                        aria-expanded={expanded === item.href}
                        aria-controls={`mobile-submenu-${index}`}
                        onClick={() =>
                          setExpanded(expanded === item.href ? null : item.href)
                        }
                        className="flex min-w-0 flex-1 items-center gap-4 rounded-lg py-3 text-base font-medium text-foreground transition-colors hover:bg-brand-soft"
                      >
                        <span className="font-latin text-[0.65rem] tracking-[0.16em] text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item.label}</span>
                        <ChevronDown
                          aria-hidden
                          className={cn(
                            "ms-auto size-4 shrink-0 transition-transform",
                            expanded === item.href && "rotate-180",
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        href={localizedHref(item.href, locale)}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className="flex min-w-0 flex-1 items-center gap-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:text-foreground"
                      >
                        <span className="font-latin text-[0.65rem] tracking-[0.16em] text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                  {item.menu && (
                    <div
                      id={`mobile-submenu-${index}`}
                      hidden={expanded !== item.href}
                      className={cn(
                        "rycode-mobile-submenu mb-3 mt-1 gap-4 rounded-xl border border-border bg-transparent p-2",
                        expanded === item.href ? "grid" : "hidden",
                      )}
                    >
                      {item.href === "/services" ? (
                        <ServicesMenu
                          locale={locale}
                          pathname={pathname}
                          onClose={onClose}
                          items={item.menu[0]?.items ?? []}
                          mobile
                        />
                      ) : (
                        item.menu.map((group) => (
                          <div key={group.title}>
                            {group.id !== "about-links" && (
                              <p className="mb-2 text-xs font-semibold text-foreground dark:text-foreground">
                                {group.title}
                              </p>
                            )}
                            <ul className="rycode-submenu-list">
                              {group.items.map((child, childIndex) => (
                                <li
                                  key={`${child.id ?? child.href}-${child.label}-${childIndex}`}
                                >
                                  <SubmenuLink
                                    href={child.href}
                                    locale={locale}
                                    onClick={onClose}
                                    current={pathname === child.href}
                                  >
                                    {child.label}
                                  </SubmenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-border bg-brand-soft px-5 py-4">
          <div
            className="mb-3 flex items-center justify-between gap-3"
            dir="ltr"
          >
            <ThemeToggle locale={locale} />
            <Link
              href={localizedHref(pathname, isFa ? "en" : "fa")}
              hrefLang={isFa ? "en" : "fa"}
              onClick={onClose}
              aria-label={isFa ? "Switch to English" : "تغییر زبان به فارسی"}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-surface px-3 font-latin text-xs font-semibold tracking-[0.14em] text-foreground/80 transition-colors hover:border-brand hover:bg-brand-soft"
            >
              <Globe2 className="size-4" aria-hidden />
              {isFa ? "EN" : "FA"}
            </Link>
          </div>
          <Link
            href={localizedHref("/contact", locale)}
            onClick={onClose}
            className="inline-flex h-10 w-full items-center justify-center rounded-full border border-brand/55 bg-brand text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
          >
            {isFa ? "شروع یک پروژه" : "Start a project"}
          </Link>
        </div>
      </motion.aside>
    </motion.div>
  );
}
