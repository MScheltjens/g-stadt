import { Controller, Get, Query } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import type { Locale } from '@repo/types';

@Controller('service-categories')
export class ServiceCategoryController {
  constructor(private readonly categoryService: ServiceCategoryService) {}

  @Get()
  findAll(@Query('locale') locale: Locale) {
    return this.categoryService.findAll(locale);
  }
}
