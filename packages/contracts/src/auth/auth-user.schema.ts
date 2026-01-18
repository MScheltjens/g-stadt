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
  id: z.string().uuid(),
  email: z.string().email(),
  role: RoleSchema,
  isVerified: z.boolean(),
});

export type AuthUser = z.infer<typeof AuthUserSchema>;
