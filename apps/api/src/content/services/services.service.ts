import { DEFAULT_LOCALE, Locale } from '@kwh/constants';
import {
  CategoryWithServicesResponse,
  CategoryWithServicesResponseSchema,
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

    const { page = 1, limit = 10, categories, search } = query;

    this.logger.info('Parsed query parameters:', {
      page,
      limit,
      categories,
      search,
    });

    let categoryFilter = undefined;
    if (categories) {
      // Only accept slugs
      let categorySlugs: string[] = [];
      if (Array.isArray(categories)) {
        categorySlugs = categories;
      } else if (typeof categories === 'string' && categories.includes(',')) {
        categorySlugs = categories.split(',').filter(Boolean);
      } else if (typeof categories === 'string') {
        categorySlugs = [categories];
      }

      this.logger.info(
        `Filtering services by category slugs: ${JSON.stringify(categorySlugs)}`,
      );

      if (categorySlugs.length > 0) {
        // Look up ids for these slugs and locale, only keep categories with a matching translation
        const categoriesWithTranslation = await this.prisma.category.findMany({
          where: {
            translations: {
              some: {
                locale,
                slug: { in: categorySlugs },
              },
            },
          },
        });

        this.logger.info(
          `Found categories for filtering: ${JSON.stringify(categoriesWithTranslation)}`,
        );

        const ids = categoriesWithTranslation.map((c) => c.id);
        if (ids.length > 0) {
          categoryFilter = { in: ids };
        }
      }
    }

    const where: any = {
      isActive: true,
      categoryId: categoryFilter,
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

    const items = await Promise.all(
      services.map(async ({ translations, ...service }) => {
        const t = translations[0];
        if (!t)
          throw new BadRequestException(
            `Missing translation for service ${service.id} and locale ${locale}`,
          );
        // Fetch the category translation for this service
        // (Assumes service.categoryId is available and category translations are loaded elsewhere if needed)
        // For this paginated endpoint, you may need to join category translations in the query for efficiency
        // Here, we'll fetch it per item for clarity
        const categorySlug = await this.prisma.categoryTranslation
          .findFirst({
            where: { categoryId: service.categoryId, locale },
            select: { slug: true },
          })
          .then((ct) => ct?.slug ?? '');

        return {
          ...service,
          externalUrl: service.externalUrl ?? null,
          requiresAuth: service.requiresAuth ?? false,
          role: service.role ?? null,
          createdAt: service.createdAt?.toISOString(),
          updatedAt: service.updatedAt?.toISOString(),
          title: t.title,
          description: t.description,
          slug: t.slug, // legacy combined slug if present
          locale: t.locale,
          categorySlug,
          serviceSlug: t.slug,
        };
      }),
    );

    return ServiceListPaginatedResponseSchema.parse({
      items,
      total,
      page,
      limit,
    });
  }

  async getServicesByCategory(
    locale: Locale,
    categorySlug: string,
  ): Promise<CategoryWithServicesResponse> {
    this.logger.info(
      `Fetching services for category ${categorySlug} and locale ${locale}`,
    );
    const category = await this.prisma.category.findFirst({
      where: {
        translations: { some: { slug: categorySlug, locale } },
      },
      include: {
        translations: { where: { locale } },
        services: {
          where: { isActive: true },
          include: { translations: { where: { locale } } },
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!category) {
      this.logger.warn(
        `Category not found for slug ${categorySlug} and locale ${locale}`,
      );
      throw new BadRequestException('Category not found');
    }

    const t = category.translations[0];
    if (!t) {
      this.logger.error(
        `Missing translation for category ${category.id} and locale ${locale}`,
      );
      throw new BadRequestException('Missing category translation');
    }

    const services = category.services.map(({ translations, ...service }) => {
      const st = translations[0];
      if (!st) {
        this.logger.error(
          `Missing translation for service ${service.id} and locale ${locale}`,
        );
        throw new BadRequestException(
          `Missing translation for service ${service.id}`,
        );
      }
      return {
        ...service,
        externalUrl: service.externalUrl ?? null,
        requiresAuth: service.requiresAuth ?? false,
        role: service.role ?? null,
        createdAt: service.createdAt?.toISOString(),
        updatedAt: service.updatedAt?.toISOString(),
        title: st.title,
        description: st.description,
        slug: st.slug,
        locale: st.locale,
      };
    });

    const data = {
      id: category.id,
      code: category.code,
      type: category.type,
      order: category.order,
      isActive: category.isActive,
      label: t.label,
      slug: t.slug,
      locale: t.locale,
      services,
    };
    return CategoryWithServicesResponseSchema.parse(data);
  }
}
