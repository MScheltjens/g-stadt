FROM node:22-alpine

WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable

# Copy workspace files first (better layer caching)
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Copy all workspace packages
COPY apps ./apps
COPY packages ./packages
COPY configs ./configs

# Install deps
RUN pnpm install --frozen-lockfile

# ---- Build shared packages FIRST ----
# (typescript-config has no build script, but must be resolvable)
RUN pnpm --filter @invicity/typescript-config --if-present build || true

RUN pnpm --filter @invicity/constants build
RUN pnpm --filter @invicity/contracts build

# ---- Build API LAST ----
RUN pnpm --filter api build

# Runtime config
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# NestJS is ESM → plain node works
CMD ["node", "apps/api/dist/main.js"]
