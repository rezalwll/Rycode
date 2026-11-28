import type { Instrumentation } from "next";

export async function register() {
  if (
    process.env.NEXT_RUNTIME !== "nodejs" ||
    process.env.NEXT_PHASE === "phase-production-build" ||
    !process.env.RYCODE_RELEASE
  )
    return;
  const { writeOperationalLog } = await import("@/server/operational-log");
  await writeOperationalLog({
    area: "deploy",
    code: "app-start",
    path: "/ops/runtime",
    level: "info",
  });
}

export const onRequestError: Instrumentation.onRequestError = async (
  _error,
  _request,
  context,
) => {
  if (process.env.NEXT_RUNTIME === "edge") return;
  const { writeOperationalLog } = await import("@/server/operational-log");
  await writeOperationalLog({
    area: "server",
    code: context.routeType,
    path: context.routePath,
    level: "error",
  });
};
