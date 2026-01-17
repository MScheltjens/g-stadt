import { z } from 'zod';

import { RoleSchema } from '../auth/role.schema';
import { LocaleSchema } from '../routing/locale.schema';

/* =========================
   TRANSLATIONS
   ========================= */

// Service Translation schema

export const ServiceTranslationSchema = z.object({
  locale: LocaleSchema,
  title: z.string(),
  description: z.string(),
  slug: z.string(),
});

export type ServiceTranslation = z.infer<typeof ServiceTranslationSchema>;

// Service Category Translation schema

export const ServiceCategoryTranslationSchema = z.object({
  locale: LocaleSchema,
  label: z.string(),
  slug: z.string(),
});

export type ServiceCategoryTranslation = z.infer<
  typeof ServiceCategoryTranslationSchema
>;

/* =========================
    MAIN SCHEMAS
    ========================= */

// Service schema

export const ServiceSchema = z.object({
  id: z.uuid(),
  icon: z.string(),
  externalUrl: z.url().nullable(),
  requiresAuth: z.boolean(),
  role: RoleSchema.nullable(),
  translations: z.array(ServiceTranslationSchema),
});

export type Service = z.infer<typeof ServiceSchema>;

// One category with its services

export const CategoryWithServicesResponseSchema = z.object({
  id: z.uuid(),
  code: z.string(),
  order: z.number(),
  isActive: z.boolean(),
  translations: z.array(ServiceCategoryTranslationSchema),
  services: z.array(ServiceSchema),
});

export type CategoryWithServicesResponse = z.infer<
  typeof CategoryWithServicesResponseSchema
>;

// All categories with their services

export const ServicesByCategoryResponseSchema = z.array(
  CategoryWithServicesResponseSchema,
);

export type ServicesByCategoryResponse = z.infer<
  typeof ServicesByCategoryResponseSchema
>;

// Categories only
export const ServiceCategoriesResponseSchema = z.array(
  z.object({
    id: z.uuid(),
    code: z.string(),
    order: z.number(),
    isActive: z.boolean(),
    translations: z.array(ServiceCategoryTranslationSchema),
  }),
);

export type ServiceCategoriesResponse = z.infer<
  typeof ServiceCategoriesResponseSchema
>;
