# @repo/types

Shared types and validation schemas for the G-Stadt monorepo.

## Structure

- **`src/generated/`** - Auto-generated Zod schemas from Prisma models (gitignored)
- **`src/*.schema.ts`** - Manual DTOs and validation schemas for API layer

## Workflow

### 1. Database Types (Prisma)

Use directly from `@repo/database` for internal logic:

```ts
import { User, Event } from '@repo/database';
```

### 2. API Validation (Zod)

Use from `@repo/types` for validation:

```ts
import { CreateUserSchema, UserResponse } from '@repo/types';
```

### 3. Generating Types

When you update Prisma schema:

```bash
pnpm --filter @repo/database db:generate
# Or run migration (includes generate):
pnpm db:migrate:dev
```

This automatically:

1. Generates Prisma Client types
2. Generates Zod schemas to `src/generated/`
3. Fixes UUID validation syntax
4. Builds TypeScript types

## Example Usage

```typescript
// API Route
import { CreateEventSchema } from '@repo/types';
import { db } from '@repo/database';

export async function POST(req: Request) {
  const body = await req.json();

  // Validate with Zod
  const data = CreateEventSchema.parse(body);

  // Save with Prisma
  const event = await db.event.create({ data });

  return Response.json(event);
}
```

## Why Both?

- **Prisma types** = Source of truth for database schema
- **Zod schemas** = Runtime validation + transformation
- **DTOs** = API contracts (may omit fields like passwords)
