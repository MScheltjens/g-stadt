// JWT Payload shared type
export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
}

import { z } from 'zod';
import { RoleEnum } from './user.schema';

// Login Schema
export const LoginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export type Login = z.infer<typeof LoginSchema>;

// Register Schema
export const RegisterSchema = z.object({
  email: z.email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password is too long'),
  role: RoleEnum.optional().default('CITIZEN'),
});

export type Register = z.infer<typeof RegisterSchema>;

// Register Schema with confirmation (for forms)
export const RegisterWithConfirmSchema = z
  .object({
    email: z.email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(100, 'Password is too long'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterWithConfirm = z.infer<typeof RegisterWithConfirmSchema>;

// Change Password Schema
export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'New password must be at least 8 characters'),
});

// Forgot Password Schema
export const ForgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

// Reset Password Schema
export const ResetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  newPassword: z.string().min(8, 'New password must be at least 8 characters'),
});

// Auth Response
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    role: string;
    isVerified: boolean;
  };
}
