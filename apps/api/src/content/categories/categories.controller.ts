import { Locale } from '@invicity/constants';
import { type CategoryListResponse } from '@invicity/contracts';
import { Controller, Get, Logger, Query, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Public } from '@/common/decorators/public.decorator.js';
import type { CustomRequest } from '@/types/custom-request.js';

import { CategoriesService } from './categories.service.js';
import { CategoryQueryDto } from './dto/type-query.dto.js';

@ApiTags('categories')
@Public()
@Controller('categories')
export class CategoriesController {
  private readonly logger = new Logger(CategoriesController.name);
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, description: 'List of categories', type: Object }) // Replace Object with a DTO/class if available
  async getAllCategories(
    @Req() req: CustomRequest,
    @Query() query: CategoryQueryDto,
  ): Promise<CategoryListResponse> {
    this.logger.log('Fetching all categories');
    // Access locale from request headers (set by interceptor)
    const locale = req.headers['locale'] as Locale;
    return this.categoriesService.getCategories(locale, query.type);
  }
}
