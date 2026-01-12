import { Module } from '@nestjs/common';

import { ServicesService } from './services/services.service';
import { ServicesController } from './services/services.controller';
import { ServiceCategoryService } from './category/service-category.service';
import { ServiceCategoryController } from './category/service-category.controller';

@Module({
  controllers: [ServicesController, ServiceCategoryController],
  providers: [ServicesService, ServiceCategoryService],
  exports: [ServicesService, ServiceCategoryService],
})
export class ServicesModule {}
