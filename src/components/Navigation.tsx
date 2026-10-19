"use client";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
} from "react";
import { useLocale } from "./LocaleProvider";
const Menu = createContext<{ open: boolean; toggle: () => void } | null>(null);
export function MobileNavigation({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        root.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <Menu.Provider value={{ open, toggle: () => setOpen((value) => !value) }}>
      <div
        {...props}
        ref={root}
        data-menu-open={open}
        className={`${className?.replace(/\bframer-v-[\w-]+/g, "")} ${open ? "framer-v-aax49p" : "framer-v-1t09hgd"}`}
        style={{
          ...props.style,
          ...(open ? { maxHeight: "100svh", overflowY: "auto" } : {}),
        }}
        onClick={(event) => {
          if ((event.target as Element).closest("a[href]")) setOpen(false);
        }}
      >
        {children}
      </div>
    </Menu.Provider>
  );
}
export function MenuPanel(props: HTMLAttributes<HTMLDivElement>) {
  const menu = useContext(Menu);
  return <div {...props} hidden={!menu?.open} />;
}
export function MenuToggle({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const menu = useContext(Menu);
  const { t } = useLocale();
  return (
    <button
      {...props}
      type="button"
      className={`${className} rycode-menu-toggle`}
      aria-label={t(menu?.open ? "Close menu" : "Open menu")}
      aria-expanded={menu?.open ?? false}
      onClick={menu?.toggle}
    />
  );
}
