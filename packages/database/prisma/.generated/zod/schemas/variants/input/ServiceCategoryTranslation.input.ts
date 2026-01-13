import * as z from 'zod';
import { LocaleSchema } from '../../enums/Locale.schema';
// prettier-ignore
export const ServiceCategoryTranslationInputSchema = z.object({
    id: z.string(),
    categoryId: z.string(),
    locale: LocaleSchema,
    label: z.string(),
    slug: z.string(),
    category: z.unknown()
}).strict();

export type ServiceCategoryTranslationInputType = z.infer<
  typeof ServiceCategoryTranslationInputSchema
>;
