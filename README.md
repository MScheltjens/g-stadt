# InviCity Monorepo

**InviCity** is a modern, full-stack web application designed as a digital city portal. It features a Next.js frontend and a NestJS API backend, providing residents and visitors with news, events, and essential city services in one accessible platform.

- 🌐 Web: [https://invicity-web.vercel.app/](https://invicity-web.vercel.app/)
- 🛠️ API: [https://api-production-e0b0.up.railway.app/](https://api-production-e0b0.up.railway.app/)

This repository is a monorepo for the InviCity project, a fictive website for a city, containing both backend (API) and frontend (web) applications, as well as shared packages and configurations.

## Deployment

The applications are deployed and publicly accessible:

- **Web (Next.js, Vercel):** [https://invicity-web.vercel.app/](https://invicity-web.vercel.app/)  
  This link is publicly available.
- **API (NestJS, Railway):** [https://api-production-e0b0.up.railway.app/](https://api-production-e0b0.up.railway.app/)  
  Deployed to Railway using a custom Dockerfile.

## Project Structure

```
.
├── apps/
│   ├── api/         # NestJS backend API
│   └── web/         # Next.js frontend web app
├── packages/
│   ├── constants/   # Shared constants (enums, values)
│   ├── contracts/   # Shared API contracts (schemas, DTOs)
│   ├── i18n/        # Internationalization utilities
│   └── ui/          # Shared UI components
├── configs/         # Shared configuration (eslint,tsconfig, etc.)
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── turbo.json       # Turborepo configuration
└── README.md        # This file
```

## Packages Overview

### constants

Centralized enums, static values, and shared constants used across apps and packages. Example: user roles, status codes, feature flags.

### contracts

Shared API contracts, schemas, and DTOs for type-safe communication between frontend and backend. Example: Zod schemas, API response types.

**Why use contracts?**

- Using database types directly in your API or frontend is dangerous: DB types often expose internal fields, are tightly coupled to persistence, and can change independently of your API.
- Contracts provide a stable, explicit, and validated interface for data exchange, ensuring only the intended fields and formats are shared between backend and frontend.
- This separation improves security, maintainability, and allows for clear API evolution without leaking database internals.

### i18n

Internationalization utilities and helpers for multi-language support. Example: translation loading, locale detection.

### ui

Reusable UI components and design system elements for consistent frontend development. Example: buttons, modals, form controls.

- This separation improves security, maintainability, and allows for clear API evolution without leaking database internals.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (v8+ recommended)
- Docker (for local database, optional)

### Install Dependencies

```sh
pnpm install
```

### Development

#### Start All Apps

```sh
pnpm dev
```

#### Start Individually

- API: `pnpm --filter api dev`
- Web: `pnpm --filter web dev`

### Build

```sh
pnpm build
```

## Linting & Formatting

- Lint: `pnpm lint`
- Lint & auto-fix: `pnpm lint:fix`
- Format: `pnpm format`

## Environment Variables

- Copy `.env.example` to `.env` in each app/package as needed and fill in values.

## Useful Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps and packages

## Contributing

1. Create a new branch: `git checkout -b feat/my-feature`
2. Make your changes
3. Commit: `git commit -m "feat: add my feature"`
4. Push: `git push origin feat/my-feature`
5. Open a pull request

## License

[MIT](LICENSE)

---

For more details, see the README files in each app or package.

---
