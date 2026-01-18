# ---- Base ----
FROM node:22-alpine AS base
WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable

# ---- Dependencies ----
FROM base AS deps
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/api/package.json apps/api/package.json
COPY packages ./packages
RUN pnpm install --frozen-lockfile

# ---- Build ----
FROM deps AS build
COPY . .
RUN pnpm --filter api build

# ---- Runtime ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable

COPY --from=build /app/apps/api/dist ./dist
COPY --from=build /app/apps/api/package.json ./
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "dist/main.js"]
