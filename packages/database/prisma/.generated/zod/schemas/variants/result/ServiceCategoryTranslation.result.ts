import * as z from 'zod';
import { LocaleSchema } from '../../enums/Locale.schema';
// prettier-ignore
export const ServiceCategoryTranslationResultSchema = z.object({
    id: z.string(),
    categoryId: z.string(),
    locale: LocaleSchema,
    label: z.string(),
    slug: z.string(),
    category: z.unknown()
}).strict();

export type ServiceCategoryTranslationResultType = z.infer<
  typeof ServiceCategoryTranslationResultSchema
>;
