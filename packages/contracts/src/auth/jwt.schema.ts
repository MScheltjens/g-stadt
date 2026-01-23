import { z } from 'zod';

import { RoleSchema } from './role.schema.js';

/**
 * JWT payload contract
 *
 * This is the shape encoded into access & refresh tokens.
 * It must stay STABLE.
 */

// JWT payload
export const JwtPayloadSchema = z.object({
  sub: z.uuid(), // user id
  email: z.email(),
  role: RoleSchema,
});

// JWT payload type
export type JwtPayload = z.infer<typeof JwtPayloadSchema>;
