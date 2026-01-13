import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '@repo/database';
import {
  type Locale,
  ServiceResponseSchema,
  type ServiceResponse,
} from '@repo/types';

@Injectable()
export class ServicesService {
  async findAll(locale: Locale): Promise<ServiceResponse[]> {
    const services = await db.service.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
      select: {
        id: true,
        categoryId: true,
        order: true,
        translations: {
          where: { locale },
          take: 1,
          select: {
            locale: true,
            title: true,
            description: true,
            slug: true,
          },
        },
      },
    });

    return services.map((service) => {
      const t = service.translations[0];
      if (!t) {
        throw new Error(
          `Missing service translation (${locale}) for ${service.id}`,
        );
      }

      return ServiceResponseSchema.parse({
        id: service.id,
        categoryId: service.categoryId,
        order: service.order,
        locale: t.locale,
        title: t.title,
        description: t.description,
        slug: t.slug,
      });
    });
  }

  async findOneBySlug(slug: string, locale: Locale): Promise<ServiceResponse> {
    const service = await db.service.findFirst({
      where: {
        isActive: true,
        translations: {
          some: { slug, locale },
        },
      },
      select: {
        id: true,
        categoryId: true,
        order: true,
        translations: {
          where: { slug, locale },
          take: 1,
          select: {
            locale: true,
            title: true,
            description: true,
            slug: true,
          },
        },
      },
    });

    if (!service) {
      throw new NotFoundException(`Service with slug '${slug}' not found`);
    }

    const t = service.translations[0];

    return ServiceResponseSchema.parse({
      id: service.id,
      categoryId: service.categoryId,
      order: service.order,
      locale: t.locale,
      title: t.title,
      description: t.description,
      slug: t.slug,
    });
  }

  async servicesByCategory(locale: Locale) {
    const [categories, services] = await Promise.all([
      db.serviceCategory.findMany({
        where: { isActive: true },
        orderBy: { order: 'asc' },
        select: {
          id: true,
          order: true,
          translations: {
            where: { locale },
            take: 1,
            select: { locale: true, label: true, slug: true },
          },
        },
      }),
      this.findAll(locale),
    ]);

    const byCategory = new Map<string, ServiceResponse[]>();
    for (const service of services) {
      const list = byCategory.get(service.categoryId) ?? [];
      list.push(service);
      byCategory.set(service.categoryId, list);
    }

    return categories.map((category) => {
      const t = category.translations[0];
      if (!t) {
        throw new Error(
          `Missing category translation (${locale}) for ${category.id}`,
        );
      }

      return {
        category: {
          id: category.id,
          order: category.order,
          locale: t.locale,
          label: t.label,
          slug: t.slug,
        },
        services: byCategory.get(category.id) ?? [],
      };
    });
  }
}
