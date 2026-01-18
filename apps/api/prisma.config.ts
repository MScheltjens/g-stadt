import 'dotenv/config';
import { defineConfig } from 'prisma/config';
// import { getEnv } from './src/lib/env';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // use process, so railway env vars are picked up
    url: process.env.DATABASE_URL,
  },
});
