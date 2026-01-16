import { z } from 'zod';

import { LocaleSchema } from '../routing/locale.schema';

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

export const ServiceCategorySchema = z.object({
  id: z.uuid(),
  code: z.string(),
  order: z.number(),
  isActive: z.boolean(),
  translations: z.array(ServiceCategoryTranslationSchema),
});

export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;
