import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { db } from '@repo/database';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  // Access all Prisma models through db
  get user() {
    return db.user;
  }

  get refreshToken() {
    return db.refreshToken;
  }

  get service() {
    return db.service;
  }

  async onModuleInit() {
    await db.$connect();
  }

  async onModuleDestroy() {
    await db.$disconnect();
  }
}
