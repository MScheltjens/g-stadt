// packages/contracts/src/user/user.schema.ts
import { z } from 'zod';
import { RoleSchema } from '../auth/role.schema.js';

/**
 * Public user representation.
 * No secrets, no Prisma internals.
 */
export const UserSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  role: RoleSchema,
  isVerified: z.boolean(),
  createdAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;
