import { Public } from '@api/src/common/decorators/public.decorator.js';
import { CategoriesResponse } from '@invicity/contracts';
import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CategoriesService } from './categories.service.js';
import { CategoryQueryDto } from './dto/type-query.dto.js';

@ApiTags('categories')
@Public()
@Controller('categories')
export class CategoriesController {
  private readonly logger = new Logger(CategoriesController.name);
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiQuery({
    name: 'locale',
    required: true,
    type: String,
    description: 'Locale code (en, fr, de)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of services by category',
    type: Object,
  })
  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiQuery({
    name: 'locale',
    required: true,
    type: String,
    description: 'Locale code (en, fr, de)',
  })
  @ApiResponse({ status: 200, description: 'List of categories', type: Object }) // You can replace Object with a proper class if available
  async getAllCategories(
    @Query() query: CategoryQueryDto,
  ): Promise<CategoriesResponse> {
    this.logger.log('Fetching all categories');
    return this.categoriesService.getCategories(query.locale, query.type);
  }
}
