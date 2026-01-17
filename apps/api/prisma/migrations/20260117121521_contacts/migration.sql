-- CreateTable
CREATE TABLE "ContactCategory" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ContactCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactCategoryTranslation" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "label" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "ContactCategoryTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "externalUrl" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "requiresAuth" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactTranslation" (
    "id" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "ContactTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactCategory_code_key" ON "ContactCategory"("code");

-- CreateIndex
CREATE INDEX "ContactCategory_isActive_idx" ON "ContactCategory"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "ContactCategoryTranslation_categoryId_locale_key" ON "ContactCategoryTranslation"("categoryId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "ContactCategoryTranslation_locale_slug_key" ON "ContactCategoryTranslation"("locale", "slug");

-- CreateIndex
CREATE INDEX "Contact_categoryId_isActive_order_idx" ON "Contact"("categoryId", "isActive", "order");

-- CreateIndex
CREATE UNIQUE INDEX "ContactTranslation_contactId_locale_key" ON "ContactTranslation"("contactId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "ContactTranslation_locale_slug_key" ON "ContactTranslation"("locale", "slug");

-- AddForeignKey
ALTER TABLE "ContactCategoryTranslation" ADD CONSTRAINT "ContactCategoryTranslation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ContactCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ContactCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactTranslation" ADD CONSTRAINT "ContactTranslation_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
