/*
  Warnings:

  - A unique constraint covering the columns `[categoryId,order]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[categoryId,order]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contact_categoryId_order_key" ON "Contact"("categoryId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "Service_categoryId_order_key" ON "Service"("categoryId", "order");
