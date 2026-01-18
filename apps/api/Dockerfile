# ---------- builder ----------
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY configs ./configs
COPY packages ./packages
COPY apps ./apps

RUN pnpm install --frozen-lockfile

# Build shared packages FIRST
RUN pnpm --filter @invicity/constants build
RUN pnpm --filter @invicity/contracts build

# Generate Prisma client BEFORE API build
RUN pnpm --filter api prisma generate

# Build API
RUN pnpm --filter api build


# ---------- runtime ----------
FROM node:22-alpine
WORKDIR /app

RUN corepack enable

# Copy runtime essentials
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/prisma ./apps/api/prisma
COPY --from=builder /app/apps/api/package.json ./apps/api/package.json
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "apps/api/dist/main.js"]
