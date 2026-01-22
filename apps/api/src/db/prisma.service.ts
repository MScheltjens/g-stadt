import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client/generator-build';

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
