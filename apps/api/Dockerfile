# ---------- builder ----------
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY configs ./configs
COPY packages ./packages
COPY apps ./apps

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
COPY packages ./packages

# 🔑 INSTALL AGAIN (runtime-safe layout)
RUN pnpm install --prod --frozen-lockfile

# Debug: check if tsconfig-paths is present in node_modules
RUN ls -l /app/node_modules/tsconfig-paths || (echo 'tsconfig-paths not found!' && exit 1)

# Copy node_modules (pnpm workspace layout preserved)
COPY --from=builder /app/node_modules ./node_modules

# Copy the ENTIRE api app (guarantees dist/main.js exists)
COPY --from=builder /app/apps/api ./apps/api


ENV NODE_ENV=production
ENV NODE_PATH=/app/node_modules
EXPOSE 3000

CMD ["node", "--require", "tsconfig-paths/register", "apps/api/dist/main.js"]
