# Based on the official Next.js with-docker example:
# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
#
# Optimised for Next.js with `output: "standalone"`. Plain Docker only —
# no BuildKit-only directives — so it works on every host (incl. Contabo
# / Dokploy with picky BuildKit setups).

FROM node:24-alpine AS base

# ─── Dependencies ────────────────────────────────────────────────────────
# Install dependencies only when needed.
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy only the manifest + lockfile first so this layer is cached
# whenever node_modules don't actually need to change.
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile --prefer-offline

# ─── Builder ─────────────────────────────────────────────────────────────
# Rebuild the source code only when needed.
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
# Skip Next.js's slow-fs benchmark (informational only; just noise on slow VPS).
ENV NEXT_DISABLE_FILESYSTEM_BENCHMARK=1

# Build-time env vars (set in Dokploy build args).
ARG APP_URL
ARG REGISTRY_URL
ARG GITHUB_API_TOKEN
ARG NEXT_PUBLIC_DMCA_URL
ENV APP_URL=$APP_URL
ENV REGISTRY_URL=$REGISTRY_URL
ENV GITHUB_API_TOKEN=$GITHUB_API_TOKEN
ENV NEXT_PUBLIC_DMCA_URL=$NEXT_PUBLIC_DMCA_URL

RUN corepack enable pnpm && pnpm run build

# ─── Runner ──────────────────────────────────────────────────────────────
# Production image, copy all the files and run next.
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache.
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size.
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
# server.js is created by `next build` from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
