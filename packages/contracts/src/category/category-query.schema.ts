import z from 'zod';

import { CategoryTypeSchema } from './category.schema.js';

export const CategoryQuerySchema = z.object({
  type: CategoryTypeSchema.optional(),
});
