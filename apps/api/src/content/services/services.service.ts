import { CATEGORYTYPE, Locale } from '@kwh/constants';
import {
  CategoryWithServicesListResponse,
  CategoryWithServicesListResponseSchema,
} from '@kwh/contracts';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { PrismaService } from '@/db/prisma.service.js';

@Injectable()
export class ServicesService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectPinoLogger(ServicesService.name) private readonly logger: PinoLogger,
  ) {}

  /**
   * Fetch all active service categories and their services, filtered by locale.
   * Throws and logs errors for production readiness.
   */
  async getServicesByCategory(
    locale: Locale,
  ): Promise<CategoryWithServicesListResponse> {
    this.logger.info(
      `Fetching service categories with services for locale: ${locale}`,
    );
    try {
      // Fetch active service categories with translations
      const data = await this.prisma.category.findMany({
        where: {
          isActive: true,
          type: CATEGORYTYPE.service,
        },
        include: {
          translations: {
            where: { locale },
          },
          services: {
            where: { isActive: true },
            include: {
              translations: {
                where: { locale },
              },
            },
            orderBy: { order: 'asc' },
          },
        },
        orderBy: { order: 'asc' },
      });

      // Transform data to match the response schema
      const categoriesWithServicesResponse = data.map((category) => ({
        id: category.id,
        code: category.code,
        type: category.type,
        order: category.order,
        isActive: category.isActive,
        locale: category.translations[0]?.locale || null,
        label: category.translations[0]?.label || '',
        slug: category.translations[0]?.slug || '',
        services: category.services.map((service) => ({
          id: service.id,
          externalUrl: service.externalUrl,
          requiresAuth: service.requiresAuth,
          role: service.role,
          locale: service.translations[0]?.locale || null,
          title: service.translations[0]?.title || '',
          description: service.translations[0]?.description || '',
          slug: service.translations[0]?.slug || '',
        })),
      }));

      // Validate the final response structure
      return CategoryWithServicesListResponseSchema.parse(
        categoriesWithServicesResponse,
      );
    } catch (error) {
      this.logger.error('Error fetching service categories with services', {
        error,
      });
      throw new BadRequestException(
        'Failed to fetch service categories with services',
      );
    }
  }
}
