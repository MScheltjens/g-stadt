// packages/contracts/src/auth/role.schema.ts
import { ROLES } from '@invicity/constants';
import { z } from 'zod';

export const RoleSchema = z.enum([ROLES.ADMIN, ROLES.STAFF, ROLES.CITIZEN]);

export type Role = z.infer<typeof RoleSchema>;
