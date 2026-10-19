FROM node:24.20.0-bookworm-slim AS dependencies
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json prisma.config.ts ./
COPY prisma ./prisma
RUN npm ci

FROM dependencies AS build
COPY . .
RUN npm run build

FROM build AS migration
CMD ["npm", "run", "db:migrate"]

FROM node:24.20.0-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0 PORT=3000 MEDIA_ROOT=/app/storage/media
RUN groupadd --gid 1001 rycode && useradd --uid 1001 --gid rycode --no-create-home rycode && mkdir -p /app/storage/media && chown -R rycode:rycode /app
COPY --from=build --chown=rycode:rycode /app/.next/standalone ./
COPY --from=build --chown=rycode:rycode /app/.next/static ./.next/static
COPY --from=build --chown=rycode:rycode /app/public ./public
USER rycode
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 CMD node -e "fetch('http://127.0.0.1:3000/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "server.js"]
