import { Injectable } from '@nestjs/common';
import { db } from '@repo/database';
import {
  Locale,
  ServiceCategoryResponseSchema,
  type ServiceCategoryResponse,
} from '@repo/types';
@Injectable()
export class ServiceCategoryService {
  async findAll(locale: Locale): Promise<ServiceCategoryResponse[]> {
    const categories = await db.serviceCategory.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
      select: {
        id: true,
        order: true,
        translations: {
          where: { locale },
          take: 1,
          select: {
            locale: true,
            label: true,
            slug: true,
          },
        },
      },
    });

    return categories.map((category) => {
      const t = category.translations[0];
      if (!t) {
        throw new Error(
          `Missing category translation (${locale}) for ${category.id}`,
        );
      }

      return ServiceCategoryResponseSchema.parse({
        id: category.id,
        order: category.order,
        locale: t.locale,
        label: t.label,
        slug: t.slug,
      });
    });
  }
}
