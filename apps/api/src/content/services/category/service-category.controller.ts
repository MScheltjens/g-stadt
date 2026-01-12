import { Controller, Get, Query } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { type Locale, LocaleQuerySchema } from '@repo/types';
import { UseZodGuard, ZodValidationPipe } from 'nestjs-zod';
import { query } from 'express';
import { LocaleQueryDto } from '@/common/dto/locale-query.dto';

@Controller('service-categories')
export class ServiceCategoryController {
  constructor(private readonly categoryService: ServiceCategoryService) {}

  @Get()
  findAll(@Query() query: LocaleQueryDto) {
    return this.categoryService.findAll(query.locale);
  }
}
