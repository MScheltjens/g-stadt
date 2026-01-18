# ---------- builder ----------
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps ./apps
COPY packages ./packages

RUN pnpm install --frozen-lockfile

# Prisma client must be generated BEFORE build
RUN pnpm --filter api prisma generate
RUN pnpm --filter api build

# ---------- runtime ----------
FROM node:22-alpine
WORKDIR /app

RUN corepack enable

# Copy only what runtime needs
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/prisma ./apps/api/prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api/package.json ./apps/api/package.json

CMD ["node", "apps/api/dist/main.js"]
