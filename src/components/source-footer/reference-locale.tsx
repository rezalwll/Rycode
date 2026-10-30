"use client";

import {
  useReferenceLocale as useSiteLocale,
  ReferenceLocale,
} from "@/components/pages/rycode-services/reference-locale";
import { referenceCopy } from "./reference-copy";

export { ReferenceLocale };
export function useReferenceLocale() {
  const locale = useSiteLocale();
  return {
    ...locale,
    copyText: <T,>(value: T): T => {
      if (typeof value !== "string" || !locale.fa) return value;
      const translated = referenceCopy[value.trim()];
      return translated
        ? (`${value.match(/^\s*/)?.[0] ?? ""}${translated}${value.match(/\s*$/)?.[0] ?? ""}` as T)
        : value;
    },
  };
}
