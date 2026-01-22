import { CATEGORYTYPE, Locale } from '@invicity/constants';
import {
  type ServicesByCategoryResponse,
  ServicesByCategoryResponseSchema,
} from '@invicity/contracts';
import { Injectable } from '@nestjs/common';
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
  async getAllServicesByCategory(
    locale: Locale,
  ): Promise<ServicesByCategoryResponse> {
    this.logger.info(
      { locale },
      'Fetching all service categories and their services',
    );
    try {
      const data = await this.prisma.category.findMany({
        where: { isActive: true, type: CATEGORYTYPE.service },
        orderBy: { order: 'asc' },
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
      this.logger.info('Fetched service categories count:', data.length);
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
}
