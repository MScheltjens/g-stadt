FROM node:22-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable

# ---- Copy workspace files first (better caching)
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# ---- Copy sources
COPY apps ./apps
COPY configs ./configs
COPY packages ./packages

# ---- Install deps
RUN pnpm install --frozen-lockfile

# ---- Build shared packages FIRST
RUN pnpm --filter @invicity/constants build
RUN pnpm --filter @invicity/contracts build

# ---- Generate Prisma client (AFTER install, BEFORE API build)
RUN pnpm --filter api prisma generate

# ---- Build API
RUN pnpm --filter api build

# ---- Runtime
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "apps/api/dist/main.js"]
