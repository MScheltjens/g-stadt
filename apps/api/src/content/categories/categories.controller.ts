import { Locale } from '@kwh/constants';
import { type CategoryListResponse } from '@kwh/contracts';
import {
  BadRequestException,
  Controller,
  Get,
  Query,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { type Request } from 'express';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { Public } from '@/common/decorators/public.decorator.js';
import { CategoryQueryDto } from '@/content/categories/dto/type-query.dto.js';

import { CategoriesService } from './categories.service.js';

@ApiTags('categories')
@Public()
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    @InjectPinoLogger(CategoriesController.name)
    private readonly logger: PinoLogger,
  ) {}

  // Get all categories, optionally filtered by type

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, description: 'List of categories', type: Object }) // Replace Object with a DTO/class if available
  async getAllCategories(
    @Req() req: Request & { locale?: Locale },
    @Query() query?: CategoryQueryDto,
  ): Promise<CategoryListResponse> {
    this.logger.info('Get all categories endpoint called');
    // Use NEXT_LOCALE cookie, fallback to URL or Accept-Language for SSR
    if (!req.locale) {
      this.logger.warn('Missing locale in cookies, URL, and Accept-Language');
      throw new BadRequestException('Locale is required');
    }
    // Pass type to service if provided
    return this.categoriesService.getCategories(req.locale, query?.type);
  }
}
