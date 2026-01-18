# ---------- builder ----------
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable

# Workspace files
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY configs ./configs
COPY packages ./packages
COPY apps ./apps

# Install all workspace deps
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


# 🔑 CRITICAL: copy workspace packages
COPY --from=builder /app/packages ./packages

# Copy pnpm workspace node_modules
COPY --from=builder /app/node_modules ./node_modules

# copy the ENTIRE api package (includes its node_modules)
COPY --from=builder /app/apps/api ./apps/api



ENV NODE_ENV=production
EXPOSE 3000

WORKDIR /app/apps/api
CMD ["node", "dist/main.js"]
