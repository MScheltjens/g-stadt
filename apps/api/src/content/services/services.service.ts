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
    const { categoryId } = query;
    const search = query.search?.trim();

    const where: any = {
      isActive: true,
      ...(categoryId && { categoryId }),
      ...(search && {
        translations: {
          some: {
            OR: [
              { title: { contains: search, mode: 'insensitive' } },
              { description: { contains: search, mode: 'insensitive' } },
              { slug: { contains: search, mode: 'insensitive' } },
            ],
          },
        },
      }),
    };
    const [total, services] = await this.prisma.$transaction([
      this.prisma.service.count({ where }),
      this.prisma.service.findMany({
        where,
        include: { translations: { where: { locale } } },
        orderBy: { order: 'asc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    const items = services.map(({ translations, ...service }) => {
      const t = translations[0];
      if (!t)
        throw new BadRequestException(
          `Missing translation for service ${service.id} and locale ${locale}`,
        );
      return {
        ...service,
        externalUrl: service.externalUrl ?? null,
        requiresAuth: service.requiresAuth ?? false,
        role: service.role ?? null,
        createdAt: service.createdAt?.toISOString(),
        updatedAt: service.updatedAt?.toISOString(),
        title: t.title,
        description: t.description,
        slug: t.slug,
        locale: t.locale,
      };
    });
    return ServiceListPaginatedResponseSchema.parse({
      items,
      total,
      page,
      limit,
    });
  }
}
