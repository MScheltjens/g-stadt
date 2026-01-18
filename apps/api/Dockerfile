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

# Copy only minimal files for install
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/api/package.json ./apps/api/
COPY apps/api/prisma ./apps/api/prisma
COPY apps/api/tsconfig.json ./apps/api/
COPY apps/api/tsconfig.build.json ./apps/api/
COPY packages ./packages
COPY configs ./configs

# Install only production dependencies for API and its deps
RUN pnpm install --prod --filter api...

# Copy built API dist from builder
COPY --from=builder /app/apps/api/dist ./apps/api/dist

# Copy all root tsconfig files for tsconfig-paths
COPY tsconfig.json ./
COPY tsconfig.*.json ./

ENV NODE_ENV=production
ENV NODE_PATH=/app/node_modules
EXPOSE 3000

CMD ["node", "--require", "tsconfig-paths/register", "apps/api/dist/main.js"]
