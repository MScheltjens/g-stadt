import * as z from 'zod';
export const ServiceCategoryDeleteResultSchema = z.nullable(
  z.object({
    id: z.string(),
    code: z.string(),
    order: z.number().int(),
    isActive: z.boolean(),
    services: z.array(z.unknown()),
    translations: z.array(z.unknown()),
  }),
);
