import * as z from 'zod';

export const RoleSchema = z.enum(['CITIZEN', 'STAFF', 'ADMIN']);

export type Role = z.infer<typeof RoleSchema>;
