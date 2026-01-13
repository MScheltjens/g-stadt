import { Controller, Get, Query } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';

import { LocaleQueryDto } from '@/common/dto/locale-query.dto';
import { Public } from '@/common/decorators/public.decorator';

@Public()
@Controller('service-categories')
export class ServiceCategoryController {
  constructor(private readonly categoryService: ServiceCategoryService) {}

  @Get()
  findAll(@Query() query: LocaleQueryDto) {
    return this.categoryService.findAll(query.locale);
  }
}
