'use client';

import { ROUTES } from '@kwh/constants';
import { useRouter, useTranslations } from '@kwh/i18n';
import { cn } from '@kwh/ui/lib/utils';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { CategorySelect } from '@/components/ui/category-select';
import { SearchInput } from '@/components/ui/search-input';
import { useDebounce } from '@/utils/hooks/useDebounce';

type ServiceFilterProps = {
  categories: { label: string; id: string }[];
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

  // Always derive selectedCategoryId from searchParams
  const categoryIdParam = searchParams.get('categoryId');
  let derivedSelectedCategoryId: string = 'all';
  if (categoryIdParam && categoryIdParam !== 'all') {
    derivedSelectedCategoryId = decodeURIComponent(categoryIdParam);
  } else if (categoryIdParam === 'all') {
    derivedSelectedCategoryId = 'all';
  }

  // Update URL when debounced value changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch) {
      params.set('search', debouncedSearch);
      params.set('page', '1'); // Reset page to 1 on new search
      params.delete('categoryId'); // Keep category filter
    } else {
      params.delete('search');
      params.set('page', '1'); // Also reset page if search is cleared
    }
    router.replace({
      pathname: ROUTES.SERVICES,
      query: Object.fromEntries(params),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  // Handler for category change (single select)
  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchInput) {
      params.set('search', searchInput);
    } else {
      params.delete('search');
    }
    params.delete('categoryId');
    if (categoryId && categoryId !== 'all') {
      params.set('categoryId', categoryId);
    }
    params.set('page', '1');
    router.replace({
      pathname: ROUTES.SERVICES,
      query: Object.fromEntries(params),
    });
  };

  return (
    <Suspense fallback={<div>Loading filters...</div>}>
      <section className={cn('flex flex-col gap-2', className)}>
        <h2 className="text-xl font-semibold text-accent-foreground">
          {t('title')}
        </h2>
        <SearchInput
          placeholder={t('searchPlaceholder')}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          ariaLabel={t('search')}
          className="mt-4"
        />

        <CategorySelect
          categories={categories}
          value={derivedSelectedCategoryId}
          onChange={handleCategoryChange}
        />
      </section>
    </Suspense>
  );
}
