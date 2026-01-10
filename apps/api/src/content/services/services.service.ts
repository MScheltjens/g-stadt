import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '@repo/database';
import type { Service, LocaleType, ServiceCategoryType } from '@repo/types';
import type { ServiceWithTranslation } from '@repo/types/src/service.schema';

@Injectable()
export class ServicesService {
  async findAll(locale: LocaleType): Promise<ServiceWithTranslation[]> {
    const services = await db.service.findMany({
      orderBy: { category: 'asc' },
      include: { translations: true },
    });
    return services.map((service) => {
      const translation =
        service.translations.find((t) => t.locale === locale) ||
        service.translations[0];
      const { translations, ...base } = service;
      return {
        ...base,
        title: translation?.title ?? '',
        slug: translation?.slug ?? service.id,
        description: translation?.description,
      };
    });
  }

  async findOne(id: string): Promise<Service> {
    const service = await db.service.findUnique({
      where: { id },
    });

    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    return service;
  }

  async findOneBySlug(slug: string): Promise<ServiceWithTranslation> {
    const service = await db.service.findFirst({
      where: {
        translations: {
          some: { slug },
        },
      },
      include: { translations: true },
    });
    if (!service) {
      throw new NotFoundException(`Service with slug ${slug} not found`);
    }
    const translation =
      service.translations.find((t) => t.slug === slug) ||
      service.translations[0];
    const { translations, ...base } = service;
    return {
      ...base,
      title: translation?.title ?? '',
      slug: translation?.slug ?? service.id,
      description: translation?.description,
    };
  }

  async findByCategoryAndLocale(
    category: ServiceCategoryType,
    locale: LocaleType,
  ): Promise<ServiceWithTranslation[]> {
    const services = await db.service.findMany({
      where: { category },
      orderBy: [
        {
          category: 'asc',
        },
      ],
      include: { translations: true },
    });
    return services.map((service) => {
      const translation =
        service.translations.find((t) => t.locale === locale) ||
        service.translations[0];
      const { translations, ...base } = service;
      return {
        ...base,
        title: translation?.title ?? '',
        slug: translation?.slug ?? service.id,
        description: translation?.description,
      };
    });
  }
}
