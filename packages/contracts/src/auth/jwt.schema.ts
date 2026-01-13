import { z } from 'zod';
import { RoleSchema } from './role.schema.js';

export const JwtUserSchema = z.object({
  sub: z.uuid(), // user id
  email: z.email(),
  role: RoleSchema,
  iat: z.number(),
  exp: z.number(),
});

export type JwtUser = z.infer<typeof JwtUserSchema>;
