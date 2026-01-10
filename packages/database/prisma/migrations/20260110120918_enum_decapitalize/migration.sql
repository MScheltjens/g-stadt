/*
  Warnings:

  - The values [Policy,Form,Guide,Report] on the enum `DocumentCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DocumentCategory_new" AS ENUM ('policy', 'form', 'guide', 'report');
ALTER TABLE "Document" ALTER COLUMN "category" TYPE "DocumentCategory_new" USING ("category"::text::"DocumentCategory_new");
ALTER TYPE "DocumentCategory" RENAME TO "DocumentCategory_old";
ALTER TYPE "DocumentCategory_new" RENAME TO "DocumentCategory";
DROP TYPE "public"."DocumentCategory_old";
COMMIT;
