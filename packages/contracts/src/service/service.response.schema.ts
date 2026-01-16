import { z } from 'zod';

import { ServiceCategorySchema } from './service-category.schema.js';

export const ServiceCategoryListSchema = z.array(ServiceCategorySchema);

export type ServiceCategoryList = z.infer<typeof ServiceCategoryListSchema>;
