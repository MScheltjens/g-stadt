import { z } from 'zod';

import { RoleSchema } from '../auth/role.schema.js';

/* =========================
   INPUTS (COMMANDS)
   ========================= */

// Create user (API-only, e.g. admin / internal)
export const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: RoleSchema.optional().default('CITIZEN'),
});

export type CreateUser = z.infer<typeof CreateUserSchema>;

// Update user
export const UpdateUserSchema = z.object({
  email: z.email().optional(),
  password: z.string().min(8).optional(),
  role: RoleSchema.optional(),
  isVerified: z.boolean().optional(),
});

export type UpdateUser = z.infer<typeof UpdateUserSchema>;

/* =========================
   OUTPUTS (RESULTS)
   ========================= */

// Public user representation (API → client)
export const UserResponseSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  role: RoleSchema,
  isVerified: z.boolean(),
  createdAt: z.string().datetime(), // ISO string (important!)
});

export type UserResponse = z.infer<typeof UserResponseSchema>;
