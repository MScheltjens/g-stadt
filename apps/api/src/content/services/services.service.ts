import { DEFAULT_LOCALE, Locale } from '@kwh/constants';
import { ServiceListResponse, ServiceListResponseSchema } from '@kwh/contracts';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { PrismaService } from '@/db/prisma.service.js';

@Injectable()
export class ServicesService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectPinoLogger(ServicesService.name) private readonly logger: PinoLogger,
  ) {}

  async getAllServices(
    locale: Locale = DEFAULT_LOCALE,
  ): Promise<ServiceListResponse> {
    const services = await this.prisma.service.findMany({
      where: {
        isActive: true,
      },
      include: {
        translations: {
          where: { locale },
        },
      },
      orderBy: {
        order: 'asc',
      },
    });

    // Flatten translation fields into top-level service object, including all required fields
    const flattened = services.map((service) => {
      const translation = service.translations[0];
      if (!translation) {
        throw new BadRequestException(
          `Missing translation for service ${service.id} and locale ${locale}`,
        );
      }

      const {
        title,
        description,
        slug,
        locale: translationLocale,
      } = translation;

      return {
        id: service.id,
        categoryId: service.categoryId,
        externalUrl: service.externalUrl ?? null,
        order: service.order,
        isActive: service.isActive,
        requiresAuth: service.requiresAuth ?? false,
        role: service.role ?? null,
        createdAt: service.createdAt?.toISOString(),
        updatedAt: service.updatedAt?.toISOString(),
        title,
        description,
        slug,
        locale: translationLocale,
      };
    });
    // console.log(flattened);

    return ServiceListResponseSchema.parse(flattened);
  }
}
