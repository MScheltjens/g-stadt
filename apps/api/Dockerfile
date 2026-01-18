FROM node:22-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable

# Copy workspace files
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps ./apps
COPY packages ./packages

# Install ALL workspace deps
RUN pnpm install --frozen-lockfile

# Build only the API
RUN pnpm --filter api build

# Expose Railway port
ENV PORT=3000
EXPOSE 3000

# Run compiled NestJS app
CMD ["node", "apps/api/dist/main.js"]
