// packages/contracts/services/services-search-params.schema.ts
import { z } from 'zod';

export const ServicesSearchParamsSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((v) => Number(v ?? '1'))
    .pipe(z.number().int().min(1))
    .default(1),

  pagesize: z
    .string()
    .optional()
    .transform((v) => Number(v ?? '10'))
    .pipe(z.number().int().min(1).max(50))
    .default(10),

  query: z
    .string()
    .optional()
    .transform((v) => v?.trim() ?? '')
    .default(''),
});

export type ServicesSearchParams = z.infer<typeof ServicesSearchParamsSchema>;
