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
    url: getEnv().DATABASE_URL,
  },
});
