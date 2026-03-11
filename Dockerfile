FROM node:24-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.10.0 --activate

# --- Dependencies ---
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# --- Builder ---
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build-time env vars (set in Dokploy build args)
ARG APP_URL
ARG REGISTRY_URL
ARG GITHUB_API_TOKEN
ARG NEXT_PUBLIC_DMCA_URL
ENV APP_URL=$APP_URL
ENV REGISTRY_URL=$REGISTRY_URL
ENV GITHUB_API_TOKEN=$GITHUB_API_TOKEN
ENV NEXT_PUBLIC_DMCA_URL=$NEXT_PUBLIC_DMCA_URL

RUN pnpm build

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
