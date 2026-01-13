import * as z from 'zod';
import { LocaleSchema } from '../../enums/Locale.schema';
// prettier-ignore
export const ServiceTranslationModelSchema = z.object({
    id: z.string(),
    serviceId: z.string(),
    locale: LocaleSchema,
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    service: z.unknown()
}).strict();

export type ServiceTranslationPureType = z.infer<
  typeof ServiceTranslationModelSchema
>;
