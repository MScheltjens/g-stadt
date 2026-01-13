import * as z from 'zod';
// prettier-ignore
export const ServiceCategoryInputSchema = z.object({
    id: z.string(),
    code: z.string(),
    order: z.number().int(),
    isActive: z.boolean(),
    services: z.array(z.unknown()),
    translations: z.array(z.unknown())
}).strict();

export type ServiceCategoryInputType = z.infer<
  typeof ServiceCategoryInputSchema
>;
