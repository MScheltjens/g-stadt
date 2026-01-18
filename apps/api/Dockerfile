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

# Generate Prisma client
RUN pnpm --filter api prisma generate

# Build API
RUN pnpm --filter api build


# ---------- runtime ----------
FROM node:22-alpine
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps ./apps
# Copy built packages from builder to ensure dist/ is present
COPY --from=builder /app/packages ./packages

# 🔑 INSTALL AGAIN (runtime-safe layout)


# Copy pnpm workspace store and node_modules
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.pnpm ./.pnpm

# Copy the ENTIRE api app (guarantees dist/main.js exists)
COPY --from=builder /app/apps/api ./apps/api

# Copy all root tsconfig files for tsconfig-paths
COPY tsconfig.json ./
COPY tsconfig.*.json ./
COPY apps/api/tsconfig.json ./apps/api/
COPY apps/api/tsconfig.build.json ./apps/api/


ENV NODE_ENV=production
ENV NODE_PATH=/app/node_modules
EXPOSE 3000

# Debug: list @prisma contents before starting
RUN ls -l /app/node_modules/@prisma || true
RUN ls -l /app/node_modules/.pnpm | grep prisma || true

CMD ["node", "--require", "tsconfig-paths/register", "apps/api/dist/main.js"]
