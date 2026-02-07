'use client';

import {
  CategoryListResponse,
  ServiceListPaginatedResponse,
} from '@kwh/contracts';
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
import { useSearchParams } from 'next/navigation';

import { ServiceList } from '@/components/ui/service-list';
import { extractSearchParams } from '@/utils/search-params';

import { ServiceFilter } from './service-filter';

// Wrapper for ServiceFilter and ServiceList with layout
export function ServiceFilterListWrapper({
  categories,
  services,
}: {
  categories: CategoryListResponse;
  services: ServiceListPaginatedResponse;
}) {
  const searchParams = useSearchParams();
  const t = useTranslations('services.filter');
  const { categories: categoriesParam } = extractSearchParams(searchParams);

  let selectedCategorySlugs: string[] = [];
  if (categoriesParam && categoriesParam !== 'all') {
    selectedCategorySlugs = decodeURIComponent(categoriesParam)
      .split(',')
      .filter(Boolean);
  }

  return (
    <div className="flex flex-col flex-1 gap-8 mt-4 md:mt-8 md:flex-row md:items-start">
      {/* Mobile filter sheet
      In case more sheets follow, extract to reusable component */}
      <div className="mb-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center w-full gap-2"
            >
              <Filter className="size-4" />
              {t('filterButton')}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="px-2">
            <SheetHeader>
              <SheetTitle>{t('filterButton')}</SheetTitle>
            </SheetHeader>
            <ServiceFilter categories={categories} className="p-0" />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar filter */}
      <ServiceFilter
        categories={categories}
        className="hidden w-1/3 max-w-sm p-4 md:block min-w-65 bg-muted/40 rounded-xl"
      />
      <ServiceList
        services={services}
        className="flex-1 pl-2 md:pl-8 md:w-2/3"
        categories={categories}
        selectedCategorySlugs={selectedCategorySlugs}
      />
    </div>
  );
}
