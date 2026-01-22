import pkg from '@api/prisma/generated/client.js';
import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

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
