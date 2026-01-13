// packages/contracts/src/auth/auth.schema.ts
import { z } from 'zod';
import { UserSchema } from '../user/user.schema.js';

/* =========================
   INPUTS (COMMANDS)
   ========================= */

export const LoginInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;

export const RegisterInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type RegisterInput = z.infer<typeof RegisterInputSchema>;

/* =========================
   OUTPUTS (RESULTS)
   ========================= */

export const AuthTokensSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string().optional(),
});

export type AuthTokens = z.infer<typeof AuthTokensSchema>;

export const AuthResponseSchema = z.object({
  user: UserSchema,
  tokens: AuthTokensSchema,
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;
