import { resolve } from "node:path";

const config = {
  plugins: {
    // Runtime data (notably embedded PostgreSQL) must not trigger CSS rebuilds.
    "@tailwindcss/postcss": { base: resolve(process.cwd(), "src") },
  },
};
export default config;
