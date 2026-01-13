import * as z from 'zod';
import { LocaleSchema } from '../../enums/Locale.schema';
// prettier-ignore
export const ServiceTranslationInputSchema = z.object({
    id: z.string(),
    serviceId: z.string(),
    locale: LocaleSchema,
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    service: z.unknown()
}).strict();

export type ServiceTranslationInputType = z.infer<
  typeof ServiceTranslationInputSchema
>;
