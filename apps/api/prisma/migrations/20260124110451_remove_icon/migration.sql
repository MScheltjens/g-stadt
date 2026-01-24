/*
  Warnings:

  - You are about to drop the column `icon` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "icon";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "icon";
