"use client";
import {
  useState,
  type FormHTMLAttributes,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { useLocale } from "./LocaleProvider";
export function ContactForm({
  children,
  ...props
}: FormHTMLAttributes<HTMLFormElement>) {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        if (event.currentTarget.reportValidity()) setSubmitted(true);
      }}
    >
      {children}
      {submitted && (
        <p
          role="status"
          className="rounded-xl border border-white/20 p-4 text-sm text-white"
        >
          {t("Preview only — no message has been sent.")}
        </p>
      )}
    </form>
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
