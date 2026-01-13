import * as z from 'zod';
// prettier-ignore
export const ServiceCategoryModelSchema = z.object({
    id: z.string(),
    code: z.string(),
    order: z.number().int(),
    isActive: z.boolean(),
    services: z.array(z.unknown()),
    translations: z.array(z.unknown())
}).strict();

export type ServiceCategoryPureType = z.infer<
  typeof ServiceCategoryModelSchema
>;
