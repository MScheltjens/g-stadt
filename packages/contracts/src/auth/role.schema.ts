// packages/contracts/src/auth/role.schema.ts
import { z } from 'zod';

export const RoleSchema = z.enum(['ADMIN', 'STAFF', 'CITIZEN']);

export type Role = z.infer<typeof RoleSchema>;
