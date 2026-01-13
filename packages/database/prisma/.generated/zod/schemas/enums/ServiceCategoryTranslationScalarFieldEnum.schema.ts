import * as z from 'zod';

export const ServiceCategoryTranslationScalarFieldEnumSchema = z.enum([
  'id',
  'categoryId',
  'locale',
  'label',
  'slug',
]);

export type ServiceCategoryTranslationScalarFieldEnum = z.infer<
  typeof ServiceCategoryTranslationScalarFieldEnumSchema
>;
