# InviCity Monorepo

This repository is a monorepo for the G-Stadtt project, a fictive website for a city, containing both backend (API) and frontend (web) applications, as well as shared packages and configurations.

## Project Structure

```
.
├── apps/
│   ├── api/         # NestJS backend API
│   └── web/         # Next.js frontend web app
├── packages/
│   ├── database/    # Prisma schema and database utilities
│   ├── i18n/        # Internationalization utilities
│   ├── types/       # Shared TypeScript types
│   └── ui/          # Shared UI components
├── configs/         # Shared configuration (eslint, jest, tsconfig, etc.)
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── turbo.json       # Turborepo configuration
└── README.md        # This file
```

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

### Test

```sh
pnpm test
```

## Database

- Uses Prisma ORM (see `packages/database/prisma/schema.prisma`)
- To apply migrations:
  ```sh
  pnpm --filter @invicity/database prisma migrate dev
  ```
- To open Prisma Studio:
  ```sh
  pnpm --filter @invicity/database prisma studio
  ```

## Linting & Formatting

- Lint: `pnpm lint`
- Format: `pnpm format`

## Environment Variables

- Copy `.env.example` to `.env` in each app/package as needed and fill in values.

## Useful Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps and packages
- `pnpm test` - Run all tests

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
