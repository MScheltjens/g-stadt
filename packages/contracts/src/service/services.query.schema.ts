import z from 'zod';

export const ServicesQuerySchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  categories: z
    .union([
      z.string(),
      z.array(z.string()),
      z
        .string()
        .regex(/^([a-zA-Z0-9-_]+,?)+$/)
        .optional(), // comma-separated slugs
    ])
    .optional(),
  search: z.string().min(1).optional(),
});

export type ServicesQuery = z.infer<typeof ServicesQuerySchema>;
