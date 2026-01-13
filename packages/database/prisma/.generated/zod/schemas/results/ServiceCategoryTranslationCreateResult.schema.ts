import * as z from 'zod';
export const ServiceCategoryTranslationCreateResultSchema = z.object({
  id: z.string(),
  categoryId: z.string(),
  locale: z.unknown(),
  label: z.string(),
  slug: z.string(),
  category: z.unknown(),
});
