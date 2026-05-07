# syntax=docker/dockerfile:1
#
# BuildKit cache mounts (the `--mount=type=cache,...` lines below) require
# Docker BuildKit. Dokploy and modern Docker enable it by default. They
# persist pnpm's content-addressable store and Next.js's incremental
# build cache across deploys, which is the single biggest win on slow
# VPS filesystems — subsequent builds skip almost all the disk IO.
#
# Using the floating `:1` tag instead of a pinned `:1.7` so we use
# whatever Dokploy/Contabo already has cached. Pinning to a specific
# minor was causing `frontend grpc server closed unexpectedly` when
# the host couldn't pull that exact tag.

FROM node:24-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.10.0 --activate

# --- Dependencies ---
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
# Cache the global pnpm store across builds. `--prefer-offline` drops
# unnecessary network round-trips when the cache is warm.
RUN --mount=type=cache,id=pnpm-store,target=/pnpm-store \
    pnpm config set store-dir /pnpm-store && \
    pnpm install --frozen-lockfile --prefer-offline

# --- Builder ---
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Skip the slow-fs benchmark warning that Next.js prints during build.
# It's purely informational and adds a one-shot benchmark we don't need.
ENV NEXT_DISABLE_FILESYSTEM_BENCHMARK=1

# Build-time env vars (set in Dokploy build args)
ARG APP_URL
ARG REGISTRY_URL
ARG GITHUB_API_TOKEN
ARG NEXT_PUBLIC_DMCA_URL
ENV APP_URL=$APP_URL
ENV REGISTRY_URL=$REGISTRY_URL
ENV GITHUB_API_TOKEN=$GITHUB_API_TOKEN
ENV NEXT_PUBLIC_DMCA_URL=$NEXT_PUBLIC_DMCA_URL

# Cache .next/cache between builds. This holds Next.js's incremental
# compile artifacts (Babel/SWC, Shiki grammars, MDX serialization, etc).
# A warm cache cuts subsequent build times dramatically.
RUN --mount=type=cache,id=next-cache,target=/app/.next/cache \
    pnpm build

# --- Runner ---
FROM node:24-alpine AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
