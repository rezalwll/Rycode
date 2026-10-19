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
import { useLocale } from "./LocaleProvider";
const SubmissionState = createContext({ busy: false, complete: false });
export function ContactForm({
  children,
  ...props
}: FormHTMLAttributes<HTMLFormElement>) {
  const { locale } = useLocale();
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [complete, setComplete] = useState(false);
  const started = useRef(0);
  const key = useRef("");
  useEffect(() => {
    started.current = Date.now();
    key.current = crypto.randomUUID();
  }, []);
  return (
    <SubmissionState.Provider value={{ busy, complete }}>
      <form
        {...props}
        aria-busy={busy}
        onSubmit={async (event) => {
          event.preventDefault();
          if (busy || complete || !event.currentTarget.reportValidity()) return;
          const form = event.currentTarget;
          const data = new FormData(form);
          setBusy(true);
          setStatus("");
          try {
            const response = await fetch("/api/leads", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: data.get("Name"),
                email: data.get("Email"),
                phone: data.get("Phone") || "",
                message: data.get("Message") || data.get("Massege"),
                website: data.get("website") || "",
                locale,
                sourcePath: location.pathname,
                service:
                  new URLSearchParams(location.search).get("service") || "",
                requestKey: key.current,
                startedAt: started.current,
              }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error);
            setComplete(true);
            window.dispatchEvent(new Event("rycode:lead-saved"));
            setStatus(
              locale === "fa"
                ? `درخواست شما ثبت شد. کد پیگیری: ${result.receipt}`
                : `Your request was saved. Reference: ${result.receipt}`,
            );
          } catch (error) {
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
          <p role="status">
            {locale === "fa" ? "در حال ثبت درخواست…" : "Saving your request…"}
          </p>
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
