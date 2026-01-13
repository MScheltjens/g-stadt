import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'passwordHash',
  'role',
  'isVerified',
  'createdAt',
]);

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;
