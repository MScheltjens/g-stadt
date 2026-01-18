# ---------- builder ----------
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY configs ./configs
COPY packages ./packages
COPY apps ./apps


# Force pnpm to use a local .pnpm store in /app
RUN pnpm config set store-dir .pnpm
RUN pnpm install --frozen-lockfile

# Build shared packages
RUN pnpm --filter @invicity/constants build
RUN pnpm --filter @invicity/contracts build


# Build API
RUN pnpm --filter api build


# ---------- runtime ----------
FROM node:22-alpine
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/api/package.json ./apps/api/
COPY apps/api/prisma ./apps/api/prisma

# Copy workspace packages and configs before install
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/configs ./configs


# Install production deps for API and all its dependencies
RUN pnpm install --prod --filter api...

# Generate Prisma client for production
RUN pnpm --filter api exec prisma generate

# Copy built artifacts
COPY --from=builder /app/apps/api/dist ./apps/api/dist

# Copy env file for local Docker (ignored on Railway)
COPY apps/api/.env.prod .env

ENV NODE_ENV=production
EXPOSE 3000

CMD ["sh", "-c", "pnpm --filter api exec prisma migrate deploy && pnpm --filter api exec prisma db seed && node apps/api/dist/main.js"]