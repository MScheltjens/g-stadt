import * as z from 'zod';
export const ServiceTranslationGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    serviceId: z.string(),
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    _count: z
      .object({
        id: z.number(),
        serviceId: z.number(),
        locale: z.number(),
        title: z.number(),
        description: z.number(),
        slug: z.number(),
        service: z.number(),
      })
      .optional(),
    _min: z
      .object({
        id: z.string().nullable(),
        serviceId: z.string().nullable(),
        title: z.string().nullable(),
        description: z.string().nullable(),
        slug: z.string().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.string().nullable(),
        serviceId: z.string().nullable(),
        title: z.string().nullable(),
        description: z.string().nullable(),
        slug: z.string().nullable(),
      })
      .nullable()
      .optional(),
  }),
);
