'use client';
import {
  CategoryListResponse,
  ServiceListPaginatedResponse,
} from '@kwh/contracts';
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
  const { categories: categoriesParam } = extractSearchParams(searchParams);

  let selectedCategorySlugs: string[] = [];
  if (categoriesParam && categoriesParam !== 'all') {
    selectedCategorySlugs = decodeURIComponent(categoriesParam)
      .split(',')
      .filter(Boolean);
  }

  return (
    <div className="flex flex-col flex-1 gap-8 mt-4 md:mt-8 md:flex-row md:items-start">
      <ServiceFilter
        categories={categories}
        className="hidden w-1/3 max-w-sm p-6 md:block min-w-65 bg-muted/40 rounded-xl"
      />
      <ServiceList
        services={services}
        className="flex-1 py-6 pl-8md:w-2/3"
        categories={categories}
        selectedCategorySlugs={selectedCategorySlugs}
      />
    </div>
  );
}
