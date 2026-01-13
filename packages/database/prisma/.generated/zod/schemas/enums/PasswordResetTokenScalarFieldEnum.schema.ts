import * as z from 'zod';

export const PasswordResetTokenScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'tokenHash',
  'expiresAt',
]);

export type PasswordResetTokenScalarFieldEnum = z.infer<
  typeof PasswordResetTokenScalarFieldEnumSchema
>;
