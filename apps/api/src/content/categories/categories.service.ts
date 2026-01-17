import { Locale } from '@invicity/constants';
import {
  CategoryListResponse,
  CategoryListResponseSchema,
  CategoryType,
} from '@invicity/contracts';
import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '@/db/prisma.service.js';
import { CategoryQueryDto } from './dto/type-query.dto.js';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Fetch all categories, optionally filtered by type, and by locale.
   */
  async getCategories(
    locale: Locale,
    type?: CategoryType,
  ): Promise<CategoryListResponse> {
    try {
      const data = await this.prisma.category.findMany({
        where: {
          isActive: true,
          ...(type ? { type } : {}),
        },
        orderBy: { order: 'asc' },
        include: {
          translations: { where: { locale } },
        },
      });

      // validate the returned data
      return CategoryListResponseSchema.parse(data);
    } catch (error) {
      this.logger.error('Database error in getCategories', error);
      throw error;
    }
  }
}
