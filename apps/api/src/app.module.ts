import { Module } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard.js';
import { CategoriesModule } from './content/categories/categories.module.js';
import { ServicesModule } from './content/services/services.module.js';
import { PrismaModule } from './db/prisma.module.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    ServicesModule,
    AuthModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
