import { Module } from '@nestjs/common';

import { PrismaModule } from '@/db/prisma.module.js';

import { ServicesController } from './services.controller.js';
import { ServicesService } from './services.service.js';

@Module({
  controllers: [ServicesController],
  imports: [PrismaModule],
  providers: [ServicesService],
  exports: [ServicesService],
})
export class ServicesModule {}
