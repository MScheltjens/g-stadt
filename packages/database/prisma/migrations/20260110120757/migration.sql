/*
  Warnings:

  - The values [Music,Sports,Education,Culture,Community,Health,Environment] on the enum `EventCategory` will be removed. If these variants are still used in the database, this will fail.
  - The values [General,Technical,Billing,Account,Services,Policies] on the enum `FAQCategory` will be removed. If these variants are still used in the database, this will fail.
  - The values [Local,Politics,Economy,Culture,Sports,Technology,Health,Environment,Education] on the enum `NewsCategory` will be removed. If these variants are still used in the database, this will fail.
  - The values [Administrative,Health,Education,Transportation,PublicSafety,Recreation,SocialServices,Utilities,Environmental,Cultural] on the enum `ServiceCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EventCategory_new" AS ENUM ('music', 'sports', 'culture', 'education', 'community', 'health', 'environment', 'technology');
ALTER TABLE "Event" ALTER COLUMN "category" TYPE "EventCategory_new" USING ("category"::text::"EventCategory_new");
ALTER TYPE "EventCategory" RENAME TO "EventCategory_old";
ALTER TYPE "EventCategory_new" RENAME TO "EventCategory";
DROP TYPE "public"."EventCategory_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "FAQCategory_new" AS ENUM ('general', 'technical', 'billing', 'account', 'services', 'policies');
ALTER TABLE "FAQ" ALTER COLUMN "category" TYPE "FAQCategory_new" USING ("category"::text::"FAQCategory_new");
ALTER TYPE "FAQCategory" RENAME TO "FAQCategory_old";
ALTER TYPE "FAQCategory_new" RENAME TO "FAQCategory";
DROP TYPE "public"."FAQCategory_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "NewsCategory_new" AS ENUM ('local', 'politics', 'economy', 'culture', 'sports', 'technology', 'health', 'environment', 'education');
ALTER TABLE "News" ALTER COLUMN "category" TYPE "NewsCategory_new" USING ("category"::text::"NewsCategory_new");
ALTER TYPE "NewsCategory" RENAME TO "NewsCategory_old";
ALTER TYPE "NewsCategory_new" RENAME TO "NewsCategory";
DROP TYPE "public"."NewsCategory_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ServiceCategory_new" AS ENUM ('administrative', 'health', 'education', 'transportation', 'publicSafety', 'recreation', 'service', 'socialservices', 'utilities', 'environmental', 'cultural');
ALTER TABLE "Service" ALTER COLUMN "category" TYPE "ServiceCategory_new" USING ("category"::text::"ServiceCategory_new");
ALTER TYPE "ServiceCategory" RENAME TO "ServiceCategory_old";
ALTER TYPE "ServiceCategory_new" RENAME TO "ServiceCategory";
DROP TYPE "public"."ServiceCategory_old";
COMMIT;
