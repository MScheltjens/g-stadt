import { z } from 'zod';

import { LocaleSchema } from '../routing/locale.schema';
import { ServiceSchema } from './service.schema';

/* =========================
   TRANSLATIONS
   ========================= */

export const ServiceCategoryTranslationSchema = z.object({
  locale: LocaleSchema,
  label: z.string(),
  slug: z.string(),
});

export type ServiceCategoryTranslation = z.infer<
  typeof ServiceCategoryTranslationSchema
>;

/* =========================
   CATEGORY RESPONSE
   ========================= */

export const CategoryWithServicesResponseSchema = z.object({
  id: z.uuid(),
  code: z.string(),
  order: z.number(),
  isActive: z.boolean(),
  translations: z.array(ServiceCategoryTranslationSchema),
  services: z.array(ServiceSchema),
});

export const ServicesByCategoryResponseSchema = z.array(
  CategoryWithServicesResponseSchema,
);

export type CategoryWithServicesResponse = z.infer<
  typeof CategoryWithServicesResponseSchema
>;
export type ServicesByCategoryResponse = z.infer<
  typeof ServicesByCategoryResponseSchema
>;
