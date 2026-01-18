import 'dotenv/config';
// No need to import defineConfig; export a plain config object

export default {
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'ts-node prisma/seed.ts',
  },
  datasource: {
    // use process, so railway env vars are picked up
    url: process.env.DATABASE_URL,
  },
};
