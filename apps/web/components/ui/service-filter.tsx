'use client';
import { ROUTES } from '@kwh/constants';
import { CategoryListResponse } from '@kwh/contracts';
import { useRouter, useTranslations } from '@kwh/i18n';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { CategorySelect } from '@/components/ui/category-select';
import { SearchInput } from '@/components/ui/search-input';
import { useDebounce } from '@/utils/hooks/useDebounce';
import { extractSearchParams, setSearchParam } from '@/utils/search-params';

type ServiceFilterProps = {
  categories: CategoryListResponse;
  className?: string;
};

export function ServiceFilter({ categories, className }: ServiceFilterProps) {
  const t = useTranslations('services.filter');
  const router = useRouter();
  const searchParams = useSearchParams();

  // search state logic
  const [searchInput, setSearchInput] = useState(
    searchParams.get('search') || '',
  );
  const debouncedSearch = useDebounce(searchInput, 400);

  // Multi-select: derive selectedCategoryIds from searchParams
  const categoriesParam = searchParams.get('categories');
  let derivedSelectedCategoryIds: string[] = [];
  if (categoriesParam && categoriesParam !== 'all') {
    derivedSelectedCategoryIds = decodeURIComponent(categoriesParam)
      .split(',')
      .filter(Boolean);
  } else if (categoriesParam === 'all' || !categoriesParam) {
    derivedSelectedCategoryIds = [];
  }

  // Update URL when debounced value changes
  useEffect(() => {
    let params = setSearchParam(
      searchParams,
      'search',
      debouncedSearch || undefined,
    );
    params = setSearchParam(params, 'page', '1');
    if (debouncedSearch) {
      params.delete('categories');
    }
    router.replace({
      pathname: ROUTES.SERVICES,
      query: extractSearchParams(params),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  // Handler for category change (multi-select)
  const handleCategoryChange = (categories: string[]) => {
    let params = setSearchParam(
      searchParams,
      'search',
      searchInput || undefined,
    );
    params.delete('categories');
    params = setSearchParam(
      params,
      'categories',
      categories.length > 0 ? categories : undefined,
    );
    params = setSearchParam(params, 'page', '1');
    router.replace({
      pathname: ROUTES.SERVICES,
      query: extractSearchParams(params),
    });
  };

  return (
    <Suspense fallback={<div>Loading filters...</div>}>
      <section className={className}>
        {/* <SectionHeading title='Search' className='text-xl' /> */}
        <SearchInput
          placeholder={t('searchPlaceholder')}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          ariaLabel={t('search')}
          className="mb-6 md:mb-8"
        />
        <CategorySelect
          categories={categories}
          value={derivedSelectedCategoryIds}
          onChange={handleCategoryChange}
          label={t('filterTheme')}
          className="mt-2"
        />
      </section>
    </Suspense>
  );
}
