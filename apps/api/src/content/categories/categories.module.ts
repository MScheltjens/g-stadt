import { Module } from '@nestjs/common';

import { CategoriesService } from './categories.service.js';
import { PrismaService } from '@api/src/db/prisma.service.js';
import { CategoriesController } from './categories.controller.js';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
