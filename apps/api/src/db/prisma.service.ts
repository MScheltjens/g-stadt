import { PrismaClient } from '@api/prisma/generated/index.js';
import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

import { env } from '@/lib/env.js';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: env.DATABASE_URL,
    });
    super({ adapter });
  }
}
