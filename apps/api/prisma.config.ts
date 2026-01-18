import 'dotenv/config';
import { defineConfig } from 'prisma/config';
import { getEnv } from './src/lib/env';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'ts-node prisma/seed.ts',
  },
  datasource: {
    // use process, so railway env vars are picked up
    url: process.env.DATABASE_URL || getEnv().DATABASE_URL,
  },
});
