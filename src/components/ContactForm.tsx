"use client";
import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  type ButtonHTMLAttributes,
  type FormHTMLAttributes,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { inquiryMessageMinimum } from "@/lib/inquiry";
import { BrandLoading } from "./BrandLoading";
import { currentVisit, trackInsight } from "@/lib/insights-client";
import { useLocale } from "./LocaleProvider";
const SubmissionState = createContext({ busy: false, complete: false });
export function ContactForm({
  children,
  messageContext = { field: "Support model", label: "مدل پشتیبانی" },
  ...props
}: FormHTMLAttributes<HTMLFormElement> & {
  messageContext?: { field: string; label: string };
}) {
  const { locale } = useLocale();
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [complete, setComplete] = useState(false);
  const started = useRef(0);
  const key = useRef("");
  const formRef = useRef<HTMLFormElement>(null);
  const interacted = useRef(false);
  const invalidFields = useRef(new Set<string>());
  useEffect(() => {
    started.current = Date.now();
    key.current = crypto.randomUUID();
    const form = formRef.current;
    if (!form || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || entry.intersectionRect.height < Math.min(120, entry.boundingClientRect.height * 0.35)) return;
      trackInsight("form_view");
      observer.disconnect();
    }, { threshold: [0, 0.1, 0.25, 0.35] });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);
  return (
    <SubmissionState.Provider value={{ busy, complete }}>
      <form
        {...props}
        ref={formRef}
        aria-busy={busy}
        onFocusCapture={(event) => {
          props.onFocusCapture?.(event);
          if (interacted.current || !event.target.matches("input:not([name=website]), textarea, select")) return;
          interacted.current = true;
          trackInsight("form_start");
        }}
        onInvalidCapture={(event) => {
          props.onInvalidCapture?.(event);
          const target = event.target;
          if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return;
          const name = target.name.toLowerCase();
          const field = ["name", "phone", "email", "message"].includes(name) ? name : "other";
          if (invalidFields.current.has(field)) return;
          invalidFields.current.add(field);
          trackInsight("form_invalid", field);
        }}
        onSubmit={async (event) => {
          event.preventDefault();
          if (busy || complete || !event.currentTarget.reportValidity()) return;
          trackInsight("form_submit");
          const form = event.currentTarget;
          const data = new FormData(form);
          const rawMessage = data.get("Message") || data.get("Massege");
          const message = typeof rawMessage === "string" ? rawMessage.trim() : "";
          const contextValue = data.get(messageContext.field);
          const sourcePath = location.pathname;
          if (!message) {
            trackInsight("form_invalid", "message");
            setStatus(
              locale === "fa"
                ? "توضیح پروژه را وارد کنید."
                : "Enter a project description.",
            );
            return;
          }
          if (message.length < inquiryMessageMinimum(sourcePath)) {
            trackInsight("form_invalid", "message");
            setStatus(
              locale === "fa"
                ? "در قسمت توضیح پروژه دست‌کم ۱۰ نویسه بنویسید."
                : "Enter at least 10 characters in the project description.",
            );
            return;
          }
          setBusy(true);
          setStatus("");
          try {
            const response = await fetch("/api/leads", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: data.get("Name"),
                email: data.get("Email") ?? "",
                phone: data.get("Phone") || "",
                message:
                  contextValue
                    ? `${messageContext.label}: ${contextValue}\n\n${message}`
                    : message,
                website: data.get("website") || "",
                locale,
                sourcePath,
                attribution: currentVisit(sourcePath).labels,
                service:
                  data.get("Service") ||
                  new URLSearchParams(location.search).get("service") ||
                  "",
                requestKey: key.current,
                startedAt: started.current,
              }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error);
            setComplete(true);
            setStatus(
              locale === "fa"
                ? `درخواست شما ثبت شد. کد پیگیری: ${result.receipt}`
                : `Your request was saved. Reference: ${result.receipt}`,
            );
          } catch (error) {
            if (error instanceof TypeError) trackInsight("form_invalid", "network");
            setStatus(
              (error as Error).message ||
                (locale === "fa"
                  ? "ثبت نشد؛ دوباره تلاش کنید"
                  : "Not saved; please retry"),
            );
          } finally {
            setBusy(false);
          }
        }}
      >
        <label
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-10000px",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        {children}
        {busy && (
          <BrandLoading label={locale === "fa" ? "در حال ثبت درخواست…" : "Saving your request…"} />
        )}
        {status && (
          <p
            role="status"
            className="rounded-xl border border-white/20 p-4 text-sm text-white"
          >
            {status}
          </p>
        )}
      </form>
    </SubmissionState.Provider>
  );
}
export function FormSubmit(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const state = useContext(SubmissionState);
  return (
    <button
      {...props}
      disabled={props.disabled || state.busy || state.complete}
      aria-busy={state.busy}
    />
  );
}
type FieldProps =
  | ({ as: "input" } & InputHTMLAttributes<HTMLInputElement>)
  | ({ as: "textarea" } & TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({ as: "select" } & SelectHTMLAttributes<HTMLSelectElement>);
export function FormField(props: FieldProps) {
  const { locale } = useLocale();
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const textDirection = value ? "auto" : locale === "fa" ? "rtl" : "ltr";
  if (props.as === "textarea") {
    const { as: tag, ...rest } = props;
    void tag;
    return (
      <textarea
        {...rest}
        dir={rest.dir ?? textDirection}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  }
  if (props.as === "select") {
    const { as: tag, ...rest } = props;
    void tag;
    return (
      <select
        {...rest}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  }
  const { as: tag, className, ...rest } = props;
  void tag;
  if (props.type === "checkbox" || props.type === "radio")
    return (
      <input
        {...rest}
        className={className}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
    );
  return (
    <input
      {...rest}
      dir={
        rest.dir ??
        (["email", "url", "tel"].includes(props.type ?? "")
          ? "ltr"
          : textDirection)
      }
      value={value}
      className={`${className?.replace("framer-form-input-empty", "") ?? ""}${value ? "" : " framer-form-input-empty"}`}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
