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
COPY apps/api/package.json ./apps/api/
COPY apps/api/prisma ./apps/api/prisma

# Install production deps for API
RUN pnpm install --prod

# Copy built artifacts
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/packages ./packages
COPY  --from=builder :app/configs ./configs

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "apps/api/dist/main.js"]
