import { z } from 'zod';

import { RoleSchema } from './role.schema.js';

/**
 * AuthUser
 *
 * Minimal user representation used in auth contexts:
 * - login
 * - register
 * - refresh
 *
 * This is NOT the full User contract.
 */

export const AuthUserSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  role: RoleSchema,
  isVerified: z.boolean(),
});

export type AuthUser = z.infer<typeof AuthUserSchema>;
