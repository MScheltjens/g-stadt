import * as z from 'zod';
export const ServiceCreateManyResultSchema = z.object({
  count: z.number(),
});
