'use client';

import {
  CategoryListResponse,
  ServiceListPaginatedResponse,
} from '@kwh/contracts';
import { useSearchParams } from 'next/navigation';

import { ServiceFilterMobile } from '@/components/ui/service-filter.mobile';
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
  const { categories: categoriesParam } = extractSearchParams(searchParams);

  let selectedCategorySlugs: string[] = [];
  if (categoriesParam && categoriesParam !== 'all') {
    selectedCategorySlugs = decodeURIComponent(categoriesParam)
      .split(',')
      .filter(Boolean);
  }

  return (
    <div className="flex flex-col flex-1 gap-6 mt-4 md:flex-row md:items-start md:gap-8 md:bg-muted/30 md:px-6 md:py-5">
      {/* Desktop sidebar filter */}

      <ServiceFilter
        categories={categories}
        className="hidden md:block md:w-1/3 md:sticky md:top-6 md:self-start md:h-fit"
      />

      <div className="self-stretch hidden w-px bg-primary/30 md:block" />

      <ServiceList
        services={services}
        className="flex-1 md:w-2/3"
        categories={categories}
        selectedCategorySlugs={selectedCategorySlugs}
        headerAction={
          <ServiceFilterMobile
            categories={categories}
            selectedCategorySlugs={selectedCategorySlugs}
          />
        }
      />
    </div>
  );
}
