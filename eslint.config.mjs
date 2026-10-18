import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    // Locally stored reference renditions preserve original sizes and crops.
    rules: { "@next/next/no-img-element": "off" },
  },
  globalIgnores([".next/**", ".reference/**"]),
]);
