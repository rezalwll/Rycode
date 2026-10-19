"use client";
import {
  createContext,
  useContext,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
} from "react";
type GroupState = { active: number; setActive: (index: number) => void };
const Group = createContext<GroupState | null>(null);
const Item = createContext<{
  open: boolean;
  toggle: () => void;
  id: string;
  label?: string;
} | null>(null);
export function AccordionGroup({
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  const [active, setActive] = useState(0);
  return (
    <Group.Provider value={{ active, setActive }}>
      <section {...props}>{children}</section>
    </Group.Provider>
  );
}
type ItemProps = HTMLAttributes<HTMLDivElement> & {
  mode: "service" | "faq";
  index: number;
  initialOpen?: boolean;
  openClass: string;
  closedClass: string;
};
export function AccordionItem({
  children,
  mode,
  index,
  initialOpen = false,
  openClass,
  closedClass,
  className,
  ...props
}: ItemProps) {
  const group = useContext(Group);
  const [ownOpen, setOwnOpen] = useState(initialOpen);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const oldHeight = useRef<number | null>(null);
  const open = mode === "service" ? group?.active === index : ownOpen;
  const toggle = () =>
    mode === "service"
      ? group?.setActive(open ? -1 : index)
      : setOwnOpen((value) => !value);
  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    const height = element.offsetHeight;
    let animation: Animation | undefined;
    if (
      oldHeight.current !== null &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      animation = element.animate(
        [{ height: oldHeight.current + "px" }, { height: height + "px" }],
        { duration: 450, easing: "cubic-bezier(.16,1,.3,1)" },
      );
    oldHeight.current = height;
    return () => animation?.cancel();
  }, [open]);
  const base = className?.replace(/\bframer-v-[\w-]+/g, "") ?? "";
  return (
    <Item.Provider value={{ open: !!open, toggle, id }}>
      <div
        {...props}
        ref={root}
        tabIndex={mode === "faq" ? undefined : props.tabIndex}
        className={`${base} ${open ? openClass : closedClass}`}
        data-rycode-accordion={mode}
        data-open={open}
        onClick={(event) => {
          const target = event.target as Element;
          if (target.closest("a,button")) return;
          if (mode === "faq" && !target.closest(".framer-k86jas")) return;
          toggle();
        }}
        onKeyDown={(event) => {
          if (
            event.target === event.currentTarget &&
            (event.key === "Enter" || event.key === " ")
          ) {
            event.preventDefault();
            toggle();
          }
        }}
      >
        {children}
      </div>
    </Item.Provider>
  );
}
export function AccordionPanel(props: HTMLAttributes<HTMLDivElement>) {
  const item = useContext(Item);
  return (
    <div
      {...props}
      id={item?.id}
      role="region"
      aria-labelledby={item ? `${item.id}-toggle` : undefined}
      hidden={!item?.open}
    />
  );
}
export function AccordionToggle({
  label,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  const item = useContext(Item);
  return (
    <button
      {...props}
      id={item ? `${item.id}-toggle` : undefined}
      type="button"
      aria-label={label}
      aria-expanded={item?.open}
      aria-controls={item?.id}
      onClick={(event) => {
        event.stopPropagation();
        item?.toggle();
      }}
    />
  );
}
