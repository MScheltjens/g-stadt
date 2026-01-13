import * as z from 'zod';
export const ServiceCategoryGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    code: z.string(),
    order: z.number().int(),
    isActive: z.boolean(),
    _count: z
      .object({
        id: z.number(),
        code: z.number(),
        order: z.number(),
        isActive: z.number(),
        services: z.number(),
        translations: z.number(),
      })
      .optional(),
    _sum: z
      .object({
        order: z.number().nullable(),
      })
      .nullable()
      .optional(),
    _avg: z
      .object({
        order: z.number().nullable(),
      })
      .nullable()
      .optional(),
    _min: z
      .object({
        id: z.string().nullable(),
        code: z.string().nullable(),
        order: z.number().int().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.string().nullable(),
        code: z.string().nullable(),
        order: z.number().int().nullable(),
      })
      .nullable()
      .optional(),
  }),
);
