import { Module } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { NewsModule } from './news/news.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { JwtAuthGuard } from './authentication/guards/jwt-auth.guard';

@Module({
  imports: [
    PrismaModule,
    EventsModule,
    UsersModule,
    ServicesModule,
    NewsModule,
    AuthenticationModule,
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
