import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
]);

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'passwordHash',
  'role',
  'isVerified',
  'createdAt',
]);

export const RefreshTokenScalarFieldEnumSchema = z.enum([
  'id',
  'tokenHash',
  'userId',
  'expiresAt',
]);

export const ServiceCategoryScalarFieldEnumSchema = z.enum([
  'id',
  'code',
  'order',
  'isActive',
]);

export const ServiceCategoryTranslationScalarFieldEnumSchema = z.enum([
  'id',
  'categoryId',
  'locale',
  'label',
  'slug',
]);

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

export const ServiceTranslationScalarFieldEnumSchema = z.enum([
  'id',
  'serviceId',
  'locale',
  'title',
  'description',
  'slug',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);

export const NullsOrderSchema = z.enum(['first', 'last']);

export const RoleSchema = z.enum(['CITIZEN', 'STAFF', 'ADMIN']);

export type RoleType = `${z.infer<typeof RoleSchema>}`;

export const LocaleSchema = z.enum(['en', 'fr', 'de']);

export type LocaleType = `${z.infer<typeof LocaleSchema>}`;

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  isVerified: z.boolean(),
  createdAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

// USER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UserOptionalDefaultsSchema = UserSchema.merge(
  z.object({
    role: RoleSchema.optional(),
    id: z.string().optional(),
    isVerified: z.boolean().optional(),
    createdAt: z.date().optional(),
  }),
);

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>;

/////////////////////////////////////////
// REFRESH TOKEN SCHEMA
/////////////////////////////////////////

export const RefreshTokenSchema = z.object({
  id: z.string(),
  tokenHash: z.string(),
  userId: z.string(),
  expiresAt: z.date(),
});

export type RefreshToken = z.infer<typeof RefreshTokenSchema>;

// REFRESH TOKEN OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const RefreshTokenOptionalDefaultsSchema = RefreshTokenSchema.merge(
  z.object({
    id: z.string().optional(),
  }),
);

export type RefreshTokenOptionalDefaults = z.infer<
  typeof RefreshTokenOptionalDefaultsSchema
>;

/////////////////////////////////////////
// SERVICE CATEGORY SCHEMA
/////////////////////////////////////////

export const ServiceCategorySchema = z.object({
  id: z.string(),
  code: z.string(),
  order: z.number(),
  isActive: z.boolean(),
});

export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;

// SERVICE CATEGORY OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ServiceCategoryOptionalDefaultsSchema =
  ServiceCategorySchema.merge(
    z.object({
      id: z.string().optional(),
      order: z.number().optional(),
      isActive: z.boolean().optional(),
    }),
  );

export type ServiceCategoryOptionalDefaults = z.infer<
  typeof ServiceCategoryOptionalDefaultsSchema
>;

/////////////////////////////////////////
// SERVICE CATEGORY TRANSLATION SCHEMA
/////////////////////////////////////////

export const ServiceCategoryTranslationSchema = z.object({
  locale: LocaleSchema,
  id: z.string(),
  categoryId: z.string(),
  label: z.string(),
  slug: z.string(),
});

export type ServiceCategoryTranslation = z.infer<
  typeof ServiceCategoryTranslationSchema
>;

// SERVICE CATEGORY TRANSLATION OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ServiceCategoryTranslationOptionalDefaultsSchema =
  ServiceCategoryTranslationSchema.merge(
    z.object({
      id: z.string().optional(),
    }),
  );

export type ServiceCategoryTranslationOptionalDefaults = z.infer<
  typeof ServiceCategoryTranslationOptionalDefaultsSchema
>;

/////////////////////////////////////////
// SERVICE SCHEMA
/////////////////////////////////////////

export const ServiceSchema = z.object({
  role: RoleSchema.nullable(),
  id: z.string(),
  categoryId: z.string(),
  icon: z.string(),
  externalUrl: z.string().nullable(),
  order: z.number(),
  isActive: z.boolean(),
  requiresAuth: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Service = z.infer<typeof ServiceSchema>;

// SERVICE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ServiceOptionalDefaultsSchema = ServiceSchema.merge(
  z.object({
    id: z.string().optional(),
    order: z.number().optional(),
    isActive: z.boolean().optional(),
    requiresAuth: z.boolean().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
);

export type ServiceOptionalDefaults = z.infer<
  typeof ServiceOptionalDefaultsSchema
>;

/////////////////////////////////////////
// SERVICE TRANSLATION SCHEMA
/////////////////////////////////////////

export const ServiceTranslationSchema = z.object({
  locale: LocaleSchema,
  id: z.string(),
  serviceId: z.string(),
  title: z.string(),
  description: z.string(),
  slug: z.string(),
});

export type ServiceTranslation = z.infer<typeof ServiceTranslationSchema>;

// SERVICE TRANSLATION OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ServiceTranslationOptionalDefaultsSchema =
  ServiceTranslationSchema.merge(
    z.object({
      id: z.string().optional(),
    }),
  );

export type ServiceTranslationOptionalDefaults = z.infer<
  typeof ServiceTranslationOptionalDefaultsSchema
>;
