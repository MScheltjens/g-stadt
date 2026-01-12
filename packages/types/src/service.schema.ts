import z from 'zod';

import { ServiceCategorySchema } from './generated';
import { ServiceSchema } from './generated';
import { ServiceTranslationSchema } from './generated';
import { ServiceCategoryTranslationSchema } from './generated';

export const ServiceCategoryResponseSchema = z.object({
  id: ServiceCategorySchema.shape.id,
  order: ServiceCategorySchema.shape.order,
  locale: ServiceCategoryTranslationSchema.shape.locale,
  label: ServiceCategoryTranslationSchema.shape.label,
});

export type ServiceCategoryResponse = z.infer<
  typeof ServiceCategoryResponseSchema
>;

export const ServiceResponseSchema = ServiceSchema.extend({
  locale: ServiceCategoryTranslationSchema.shape.locale,
  title: ServiceTranslationSchema.shape.title,
  description: ServiceTranslationSchema.shape.description,
  slug: ServiceTranslationSchema.shape.slug,
});

export type ServiceResponse = z.infer<typeof ServiceResponseSchema>;
