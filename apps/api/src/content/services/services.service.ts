import { Locale } from '@invicity/constants';
import {
  ServiceCategoriesResponse,
  ServiceCategoriesResponseSchema,
  type ServicesByCategoryResponse,
  ServicesByCategoryResponseSchema,
} from '@invicity/contracts';
import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '@/db/prisma.service.js';

@Injectable()
export class ServicesService {
  private readonly logger = new Logger(ServicesService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Fetch all active service categories and their services, filtered by locale.
   * Throws and logs errors for production readiness.
   */
  async getAllServicesByCategory(
    locale: Locale,
  ): Promise<ServicesByCategoryResponse> {
    try {
      const data = await this.prisma.serviceCategory.findMany({
        where: { isActive: true },
        orderBy: { order: 'asc' },
        include: {
          translations: {
            where: { locale },
          },
          services: {
            where: { isActive: true },
            orderBy: { order: 'asc' },
            include: {
              translations: {
                where: { locale },
              },
            },
          },
        },
      });

      // validate the returned data
      return ServicesByCategoryResponseSchema.parse(data);
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(
          'Database error in getAllServicesByCategory',
          error.stack,
        );
      } else {
        this.logger.error(
          'Database error in getAllServicesByCategory',
          String(error),
        );
      }
      throw error;
    }
  }

  /** * Fetch all active service categories, filtered by locale.
   * Throws and logs errors for production readiness.
   */
  async getAllCategories(locale: Locale): Promise<ServiceCategoriesResponse> {
    try {
      const data = await this.prisma.serviceCategory.findMany({
        where: { isActive: true },
        orderBy: { order: 'asc' },
        include: {
          translations: {
            where: { locale },
          },
        },
      });
      // validate the returned data
      return ServiceCategoriesResponseSchema.parse(data);
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(
          'Database error in getAllServiceCategories',
          error.stack,
        );
      } else {
        this.logger.error(
          'Database error in getAllServiceCategories',
          String(error),
        );
      }
      throw error;
    }
  }
}
