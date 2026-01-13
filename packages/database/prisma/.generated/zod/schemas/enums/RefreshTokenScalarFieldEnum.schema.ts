import * as z from 'zod';

export const RefreshTokenScalarFieldEnumSchema = z.enum([
  'id',
  'tokenHash',
  'userId',
  'expiresAt',
]);

export type RefreshTokenScalarFieldEnum = z.infer<
  typeof RefreshTokenScalarFieldEnumSchema
>;
