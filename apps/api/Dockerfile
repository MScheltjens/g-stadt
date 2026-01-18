FROM node:22-alpine

WORKDIR /app
RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps ./apps
COPY packages ./packages

RUN pnpm install --frozen-lockfile

# 🔥 Build all contracts and constants
RUN pnpm --filter @invicity/contracts build
RUN pnpm --filter @invicity/constants build

# 🔥 Then build API
RUN pnpm --filter api build

ENV PORT=3000
EXPOSE 3000

CMD ["node", "apps/api/dist/main.js"]
