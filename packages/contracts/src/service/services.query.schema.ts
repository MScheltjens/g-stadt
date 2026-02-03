import z from 'zod';

export const ServicesQuerySchema = z.object({
  categoryId: z.uuid().optional(),
});

export type ServicesQuery = z.infer<typeof ServicesQuerySchema>;
