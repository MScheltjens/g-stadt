'use client';

import { CategoryListResponse } from '@kwh/contracts';
import { useTranslations } from '@kwh/i18n';
import { Button } from '@kwh/ui/components/button';
import { Filter } from '@kwh/ui/components/icons';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@kwh/ui/components/sheet';
import { cn } from '@kwh/ui/lib/utils';

import { SelectedCategoryBadges } from '@/components/ui/selected-category-badges';
import { ServiceFilter } from '@/components/ui/service-filter';

type ServiceFilterMobileProps = {
  categories: CategoryListResponse;
  selectedCategorySlugs?: string[];
  className?: string;
};

export function ServiceFilterMobile({
  categories,
  selectedCategorySlugs,
  className,
}: ServiceFilterMobileProps) {
  const t = useTranslations('services.filter');

  return (
    <div className={cn('md:hidden', className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="size-4" />
            {t('filterButton')}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-2">
          <SheetHeader className="sr-only">
            <SheetTitle>{t('filterButton')}</SheetTitle>
          </SheetHeader>
          <SelectedCategoryBadges
            categories={categories}
            selectedCategorySlugs={selectedCategorySlugs}
            className="px-2 pb-3"
          />
          <ServiceFilter categories={categories} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
