import z from 'zod';

export const ServicesQuerySchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  categoryId: z.uuid().optional(),
  query: z.string().min(1).optional(),
});

export type ServicesQuery = z.infer<typeof ServicesQuerySchema>;
