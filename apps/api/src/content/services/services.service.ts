import { DEFAULT_LOCALE, Locale } from '@kwh/constants';
import {
  ServiceListPaginatedResponse,
  ServiceListPaginatedResponseSchema,
} from '@kwh/contracts';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { ServicesQueryDto } from '@/content/services/dto/service.query.dto.js';
import { PrismaService } from '@/db/prisma.service.js';

@Injectable()
export class ServicesService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectPinoLogger(ServicesService.name) private readonly logger: PinoLogger,
  ) {}

  async getServices(
    locale: Locale = DEFAULT_LOCALE,
    query: ServicesQueryDto,
  ): Promise<ServiceListPaginatedResponse> {
    this.logger.info(
      `Fetching all services for locale ${locale} and query ${JSON.stringify(query)}`,
    );

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const categoryId = query.categoryId;
    const searchString = query.search?.trim();

    // Build Prisma 'where' filter
    const where: any = {
      isActive: true,
      ...(categoryId ? { categoryId } : {}),
    };
    if (searchString) {
      where.translations = {
        some: {
          OR: [
            { title: { contains: searchString, mode: 'insensitive' } },
            { description: { contains: searchString, mode: 'insensitive' } },
            { slug: { contains: searchString, mode: 'insensitive' } },
          ],
        },
      };
    }

    const [total, services] = await this.prisma.$transaction([
      this.prisma.service.count({ where }),
      this.prisma.service.findMany({
        where: {
          isActive: true,
          ...(categoryId ? { categoryId } : {}),
          translations: {
            some: {
              OR: [
                { title: { contains: searchString, mode: 'insensitive' } },
                {
                  description: {
                    contains: searchString,
                    mode: 'insensitive',
                  },
                },
                { slug: { contains: searchString, mode: 'insensitive' } },
              ],
            },
          },
        },
        include: {
          translations: {
            where: { locale },
          },
        },
        orderBy: {
          order: 'asc',
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

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

    return ServiceListPaginatedResponseSchema.parse({
      items: flattened,
      total,
      page,
      limit,
    });
  }
}
