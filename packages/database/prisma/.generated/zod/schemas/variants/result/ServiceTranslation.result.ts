import * as z from 'zod';
import { LocaleSchema } from '../../enums/Locale.schema';
// prettier-ignore
export const ServiceTranslationResultSchema = z.object({
    id: z.string(),
    serviceId: z.string(),
    locale: LocaleSchema,
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    service: z.unknown()
}).strict();

export type ServiceTranslationResultType = z.infer<
  typeof ServiceTranslationResultSchema
>;
