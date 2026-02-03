import { Locale } from '@kwh/constants';
import {
  CategoryListResponse,
  CategoryListResponseSchema,
  CategoryType,
} from '@kwh/contracts';
import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { PrismaService } from '@/db/prisma.service.js';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectPinoLogger(CategoriesService.name)
    private readonly logger: PinoLogger,
  ) {}

  /**
   * Fetch all categories, optionally filtered by type, and by locale.
   */
  async getCategories(
    locale: Locale,
    type?: CategoryType,
  ): Promise<CategoryListResponse> {
    this.logger.info(
      { locale, type },
      'Fetching all categories with type: ' + type,
    );
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
      this.logger.info('Fetched categories count:', JSON.stringify(data));

      const mapped = data
        .map((category) => {
          const translation = category.translations[0];
          if (!translation) return null;
          return {
            id: category.id,
            code: category.code,
            order: category.order,
            isActive: category.isActive,
            type: category.type,
            locale: translation.locale,
            label: translation.label,
            slug: translation.slug,
          };
        })
        .filter(Boolean);
      // validate the returned data
      const validated = CategoryListResponseSchema.parse(mapped);
      this.logger.info('Validated categories count:', validated.length);
      return validated;
    } catch (error) {
      this.logger.error('Database error in getCategories', error);
      throw error;
    }
  }
}
