import { z } from 'zod';

// Enums
export const RoleEnum = z.enum(['CITIZEN', 'STAFF', 'ADMIN']);
export type Role = z.infer<typeof RoleEnum>;

// User DTOs for API validation
export const CreateUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: RoleEnum.optional().default('CITIZEN'),
});

export const UpdateUserSchema = z.object({
  email: z.string().email('Invalid email address').optional(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .optional(),
  role: RoleEnum.optional(),
  isVerified: z.boolean().optional(),
});

export const UserResponseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: RoleEnum,
  isVerified: z.boolean(),
  createdAt: z.date(),
});

// Types
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
