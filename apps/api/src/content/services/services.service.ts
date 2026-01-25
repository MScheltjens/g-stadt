import { CATEGORYTYPE, Locale } from '@kwh/constants';
import {
  type ServicesByCategoryResponse,
  ServicesByCategoryResponseSchema,
  ServicesQuery,
} from '@kwh/contracts';
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
    query: ServicesQuery,
  ): Promise<ServicesByCategoryResponse> {
    this.logger.info(
      `Fetching all services by category for locale: ${locale} with query: ${JSON.stringify(query)}`,
    );
    const serviceWhere: any = { isActive: true };
    if (query?.query) {
      serviceWhere.translations = {
        some: {
          locale,
          title: { contains: query.query, mode: 'insensitive' as const },
        },
      };
    }
    const data = await this.prisma.category.findMany({
      where: { isActive: true, type: CATEGORYTYPE.service },
      orderBy: { order: 'asc' },
      include: {
        translations: { where: { locale } },
        services: {
          where: serviceWhere,
          orderBy: { order: 'asc' },
          include: {
            translations: { where: { locale } },
          },
        },
      },
    });

    const mapped = data
      .map((category) => {
        const catTranslation = category.translations[0];
        if (
          !catTranslation ||
          !catTranslation.locale ||
          !catTranslation.label ||
          !catTranslation.slug
        )
          return null;
        const services = category.services
          .map((service) => {
            const svcTranslation = service.translations[0];
            if (
              !svcTranslation ||
              !svcTranslation.locale ||
              !svcTranslation.title ||
              !svcTranslation.description ||
              !svcTranslation.slug
            )
              return null;
            return {
              ...service,
              locale: svcTranslation.locale,
              title: svcTranslation.title,
              description: svcTranslation.description,
              slug: svcTranslation.slug,
            };
          })
          .filter(Boolean);
        return {
          ...category,
          type: CATEGORYTYPE.service,
          locale: catTranslation.locale,
          label: catTranslation.label,
          slug: catTranslation.slug,
          services,
        };
      })
      .filter(Boolean);
    return ServicesByCategoryResponseSchema.parse(mapped);
  }
}
