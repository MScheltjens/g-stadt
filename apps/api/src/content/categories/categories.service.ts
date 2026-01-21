import { Locale } from '@invicity/constants';
import {
  CategoryListResponse,
  CategoryListResponseSchema,
  CategoryType,
  ServiceCategoryResponse,
  ServiceCategoryResponseSchema,
} from '@invicity/contracts';
import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '@/db/prisma.service.js';

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
  /**
   * Fetch a single service category with its services, filtered by locale.
   */
  async getCategoryWithServices(
    slug: string,
    locale: Locale,
  ): Promise<ServiceCategoryResponse> {
    try {
      // Step 1: Find the category translation for the given slug and locale
      const translation = await this.prisma.categoryTranslation.findUnique({
        where: { locale_slug: { locale, slug } },
        select: { categoryId: true },
      });
      if (!translation) return null;

      // Step 2: Fetch the category with its services and translations
      const data = await this.prisma.category.findUnique({
        where: { id: translation.categoryId },
        include: {
          translations: { where: { locale } },
          services: {
            where: { isActive: true },
            orderBy: { order: 'asc' },
            include: {
              translations: { where: { locale } },
            },
          },
        },
      });
      // validate the returned data
      return ServiceCategoryResponseSchema.parse(data);
    } catch (error) {
      this.logger.error('Database error in getCategoryWithServices', error);
      throw error;
    }
  }
}
