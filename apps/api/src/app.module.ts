import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
import { ZodValidationPipe } from 'nestjs-zod';
import { join } from 'path';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard.js';
import { CategoriesModule } from './content/categories/categories.module.js';
import { ServicesModule } from './content/services/services.module.js';
import { PrismaModule } from './db/prisma.module.js';
import { getEnv } from './lib/env.js';
import { UsersModule } from './users/users.module.js';

const env = getEnv();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        env.NODE_ENV === 'production'
          ? undefined
          : [
              // when running from apps/api
              '.env.local',
              // when running from repo root (turborepo)
              join(process.cwd(), 'apps/api/.env.local'),
            ],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        transport:
          process.env.NODE_ENV !== 'production'
            ? {
                target: 'pino-pretty',
                options: { colorize: true },
              }
            : undefined,
      },
    }),

    UsersModule,
    PrismaModule,
    ServicesModule,
    AuthModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useClass: ZodValidationPipe },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
  ],
})
export class AppModule {}
