import { CATEGORYTYPE } from '@kwh/constants';
import { z } from 'zod';

import { LocaleSchema } from '../common/locale.schema.js';
import { ServiceListResponseSchema } from '../service/service.schema.js';

//// CATEGORY SCHEMAS ////

// Category type schema //

export const CategoryTypeSchema = z.enum([
  CATEGORYTYPE.service,
  CATEGORYTYPE.contact,
]);

export type CategoryType = z.infer<typeof CategoryTypeSchema>;

// Category translation schema //

export const CategoryTranslationSchema = z.object({
  locale: LocaleSchema,
  label: z.string(),
  description: z.string(),
  slug: z.string(),
});

export type CategoryTranslation = z.infer<typeof CategoryTranslationSchema>;

// Category base schema //

export const CategoryBaseSchema = z.object({
  id: z.uuid(),
  code: z.string(),
  type: CategoryTypeSchema,
  order: z.number(),
  isActive: z.boolean(),
});

export type CategoryBase = z.infer<typeof CategoryBaseSchema>;

// Category with translations key schema //

export const CategoryWithTranslationsSchema = CategoryBaseSchema.extend({
  translations: z.array(CategoryTranslationSchema),
});

export type CategoryWithTranslations = z.infer<
  typeof CategoryWithTranslationsSchema
>;

// category list schema with flattened translations //

export const CategoryListResponseSchema = z.array(
  CategoryBaseSchema.extend({
    ...CategoryTranslationSchema.shape,
  }),
);

export type CategoryListResponse = z.infer<typeof CategoryListResponseSchema>;

// category with services schema //

export const CategoryWithServicesResponseSchema = CategoryBaseSchema.extend({
  ...CategoryTranslationSchema.shape,
  services: ServiceListResponseSchema,
});

export type CategoryWithServicesResponse = z.infer<
  typeof CategoryWithServicesResponseSchema
>;
