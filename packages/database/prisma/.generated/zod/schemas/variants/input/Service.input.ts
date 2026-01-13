import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const ServiceInputSchema = z.object({
    id: z.string(),
    categoryId: z.string(),
    category: z.unknown(),
    icon: z.string(),
    externalUrl: z.string().optional().nullable(),
    order: z.number().int(),
    isActive: z.boolean(),
    requiresAuth: z.boolean(),
    role: RoleSchema.optional().nullable(),
    translations: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ServiceInputType = z.infer<typeof ServiceInputSchema>;
