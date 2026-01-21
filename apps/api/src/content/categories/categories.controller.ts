import { Locale } from '@invicity/constants';
import {
  type CategoryListResponse,
  type ServiceCategoryResponse,
} from '@invicity/contracts';
import {
  BadRequestException,
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';

import { Public } from '@/common/decorators/public.decorator.js';

import { CategoriesService } from './categories.service.js';

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
    @Req() req: Request & { locale?: Locale },
  ): Promise<CategoryListResponse> {
    this.logger.log('Fetching all categories');
    // Use NEXT_LOCALE cookie, fallback to URL or Accept-Language for SSR
    if (!req.locale) {
      this.logger.warn('Missing locale in cookies, URL, and Accept-Language');
      throw new BadRequestException('Locale is required');
    }

    return this.categoriesService.getCategories(req.locale);
  }

  // Get a service category by slug with its services
  @Get(':slug')
  @ApiOperation({ summary: 'Get service category with its services' })
  @ApiResponse({
    status: 200,
    description: 'One category with its services',
    type: Object,
  }) // Replace Object with a DTO/class if available
  async getCategoryWithServices(
    @Param('slug') slug: string,
    @Req() req: Request & { locale?: Locale },
  ): Promise<ServiceCategoryResponse> {
    this.logger.log(`Fetching category with services for slug: ${slug}`);

    if (
      !slug ||
      typeof slug !== 'string' ||
      slug.length < 2 ||
      slug.length > 64
    ) {
      this.logger.warn('Invalid slug parameter');
      throw new BadRequestException('Invalid slug');
    }

    // Use NEXT_LOCALE cookie, fallback to URL or Accept-Language for SSR
    const locale = req.locale;

    if (!locale) {
      this.logger.warn('Missing locale in cookies, URL, and Accept-Language');
      throw new BadRequestException('Locale is required');
    }
    const category = await this.categoriesService.getCategoryWithServices(
      slug,
      locale,
    );

    if (!category) {
      this.logger.warn(
        `Category not found for slug: ${slug} and locale: ${locale}`,
      );
      throw new NotFoundException('Category not found');
    }

    return category;
  }
}
