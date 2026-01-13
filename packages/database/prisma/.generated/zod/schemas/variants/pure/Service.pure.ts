import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const ServiceModelSchema = z.object({
    id: z.string(),
    categoryId: z.string(),
    category: z.unknown(),
    icon: z.string(),
    externalUrl: z.string().nullable(),
    order: z.number().int(),
    isActive: z.boolean(),
    requiresAuth: z.boolean(),
    role: RoleSchema.nullable(),
    translations: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ServicePureType = z.infer<typeof ServiceModelSchema>;
