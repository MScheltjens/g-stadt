import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [EventsModule, UsersModule, ServicesModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
