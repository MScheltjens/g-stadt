/*
  Warnings:

  - The `category` column on the `FAQ` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `category` on the `Document` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category` on the `News` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category` on the `Service` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "NewsCategory" AS ENUM ('Local', 'Politics', 'Economy', 'Culture', 'Sports', 'Technology', 'Health', 'Environment', 'Education');

-- CreateEnum
CREATE TYPE "ServiceCategory" AS ENUM ('Administrative', 'Health', 'Education', 'Transportation', 'PublicSafety', 'Recreation', 'SocialServices', 'Utilities', 'Environmental', 'Cultural');

-- CreateEnum
CREATE TYPE "FAQCategory" AS ENUM ('General', 'Technical', 'Billing', 'Account', 'Services', 'Policies');

-- CreateEnum
CREATE TYPE "DocumentCategory" AS ENUM ('Policy', 'Form', 'Guide', 'Report');

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "category",
ADD COLUMN     "category" "DocumentCategory" NOT NULL;

-- AlterTable
ALTER TABLE "FAQ" DROP COLUMN "category",
ADD COLUMN     "category" "FAQCategory";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "category",
ADD COLUMN     "category" "NewsCategory" NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "category",
ADD COLUMN     "category" "ServiceCategory" NOT NULL;
