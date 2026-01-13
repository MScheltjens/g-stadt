import * as z from 'zod';

export const ServiceTranslationScalarFieldEnumSchema = z.enum([
  'id',
  'serviceId',
  'locale',
  'title',
  'description',
  'slug',
]);

export type ServiceTranslationScalarFieldEnum = z.infer<
  typeof ServiceTranslationScalarFieldEnumSchema
>;
