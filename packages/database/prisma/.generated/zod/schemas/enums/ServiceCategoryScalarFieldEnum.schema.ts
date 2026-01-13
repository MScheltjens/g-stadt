import * as z from 'zod';

export const ServiceCategoryScalarFieldEnumSchema = z.enum([
  'id',
  'code',
  'order',
  'isActive',
]);

export type ServiceCategoryScalarFieldEnum = z.infer<
  typeof ServiceCategoryScalarFieldEnumSchema
>;
