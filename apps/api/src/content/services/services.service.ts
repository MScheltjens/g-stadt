import { Injectable } from '@nestjs/common';
import { Locale } from '@repo/constants';
import {
  type ServiceCategory,
  ServiceCategorySchema,
  ServiceSchema,
} from '@repo/contracts';

import { PrismaService } from '@/content/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(locale: Locale): Promise<ServiceCategory[]> {
    const categories = await this.prisma.serviceCategory.findMany({
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

    return categories.map((category) =>
      ServiceCategorySchema.parse({
        id: category.id,
        code: category.code,
        order: category.order,
        isActive: category.isActive,
        translations: category.translations.map((t) => ({
          locale: t.locale,
          label: t.label,
          slug: t.slug,
        })),
        services: category.services.map((service) =>
          ServiceSchema.parse({
            id: service.id,
            icon: service.icon,
            externalUrl: service.externalUrl,
            requiresAuth: service.requiresAuth,
            role: service.role,
            translations: service.translations.map((t) => ({
              locale: t.locale,
              title: t.title,
              description: t.description,
              slug: t.slug,
            })),
          }),
        ),
      }),
    );
  }
}
