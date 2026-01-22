import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
// eslint-disable-next-line @typescript-eslint/no-duplicate-imports
import pkg from '@api/prisma/generated/client.js';
const { PrismaClient } = pkg;

import { getEnv } from '@/lib/env.js';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const env = getEnv();
    const adapter = new PrismaPg({
      connectionString: env.DATABASE_URL,
    });
    super({ adapter });
  }
}
