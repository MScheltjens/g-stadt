import { z } from 'zod';

// Enums
export const RoleEnum = z.enum(['CITIZEN', 'STAFF', 'ADMIN']);

// User Schemas for API validation
export const CreateUserSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
  role: RoleEnum.optional().default('CITIZEN'),
});

export const UpdateUserSchema = z.object({
  email: z.email({ message: 'Invalid email address' }).optional(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .optional(),
  role: RoleEnum.optional(),
  isVerified: z.boolean().optional(),
});

export const UserResponseSchema = z.object({
  id: z.uuid({ message: 'Invalid UUID' }),
  email: z.email({ message: 'Invalid email address' }),
  role: RoleEnum,
  isVerified: z.boolean(),
  createdAt: z.date(), // Keep as z.date() for shared types, override in API DTO
});

// Types
export type Role = z.infer<typeof RoleEnum>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
