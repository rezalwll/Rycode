import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: { globalNotFound: true },
  turbopack: { root: process.cwd() },
};
export default config;
