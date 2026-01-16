import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { db } from '@repo/database';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  // AUTH
  get user() {
    return db.user;
  }

  get refreshToken() {
    return db.refreshToken;
  }

  get passwordResetToken() {
    return db.passwordResetToken;
  }

  // CONTENT
  get service() {
    return db.service;
  }

  get serviceCategory() {
    return db.serviceCategory;
  }

  // TRANSACTIONS
  $transaction = db.$transaction.bind(db);

  async onModuleInit() {
    await db.$connect();
  }

  async onModuleDestroy() {
    await db.$disconnect();
  }
}
