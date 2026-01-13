import * as z from 'zod';

export const ServiceScalarFieldEnumSchema = z.enum([
  'id',
  'categoryId',
  'icon',
  'externalUrl',
  'order',
  'isActive',
  'requiresAuth',
  'role',
  'createdAt',
  'updatedAt',
]);

export type ServiceScalarFieldEnum = z.infer<
  typeof ServiceScalarFieldEnumSchema
>;
