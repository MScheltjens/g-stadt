'use client';

import { ROUTES, SERVICE_SORT } from '@kwh/constants';
import { ServiceListPaginatedResponse } from '@kwh/contracts';
import { CategoryListResponse } from '@kwh/contracts';
import { useRouter, useTranslations } from '@kwh/i18n';
import { Button } from '@kwh/ui/components/button';
import { SearchX } from '@kwh/ui/components/icons';
import { Label } from '@kwh/ui/components/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@kwh/ui/components/select';
import { cn } from '@kwh/ui/lib/utils';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

import { SectionHeading } from '@/components/layout/section-heading';
import { CardList } from '@/components/ui/card-list';
import { Pagination } from '@/components/ui/pagination';
import { SelectedCategoryBadges } from '@/components/ui/selected-category-badges';
import {
  createCategoryColorHelpers,
  normalizeBadgeLabel,
  withAlpha,
} from '@/utils/category-colors';
import { extractSearchParams, setSearchParam } from '@/utils/search-params';

type Props = {
  services: ServiceListPaginatedResponse;
  className?: string;
  categories?: CategoryListResponse;
  selectedCategorySlugs?: string[];
  headerAction?: ReactNode;
};

export function ServiceList({
  services,
  className,
  categories,
  selectedCategorySlugs,
  headerAction,
}: Props) {
  const t = useTranslations('services');
  const searchParams = useSearchParams();
  const router = useRouter();
  const { items, total, page, limit } = services;

  const pageCount = total > 0 ? Math.ceil(total / limit) : 1;

  const categoryBySlug = new Map(
    categories?.map((category) => [category.slug, category]) ?? [],
  );

  const { getColorById } = createCategoryColorHelpers(categories);

  // Map category slug to its colorized badge and accent bar styles.
  const getCategoryMeta = (categorySlug?: string) => {
    if (!categorySlug) return { badge: undefined, accentStyle: undefined };
    const category = categoryBySlug.get(categorySlug);
    if (!category) return { badge: undefined, accentStyle: undefined };
    const color = getColorById(category.id);
    return {
      badge: {
        label: normalizeBadgeLabel(category.label),
        className: 'border border-current',
        style: {
          borderColor: color,
          backgroundColor: withAlpha(color, 0.12),
          color,
        },
      },
      accentStyle: { backgroundColor: color },
    };
  };

  // Use the localized pathname and raw query string to preserve routing.
  const pushWithParams = (params: URLSearchParams) => {
    router.push({
      pathname: ROUTES.SERVICES,
      query: extractSearchParams(params),
    });
  };

  const onPageChange = (p: number) => {
    const params = setSearchParam(searchParams, 'page', p.toString());
    pushWithParams(params);
  };

  const onResetFilters = () => {
    let params = setSearchParam(searchParams, 'search', undefined);
    params = setSearchParam(params, 'categories', undefined);
    params = setSearchParam(params, 'page', undefined);
    pushWithParams(params);
  };

  const [singular, plural] = t('results.result', { count: total })
    .split('|')
    .map((part) => part.trim());
  const resultsDescription =
    total === 1
      ? (singular ?? t('results.result', { count: total }))
      : (plural ?? singular ?? t('results.result', { count: total }));
  const currentSort = searchParams.get('sort') ?? SERVICE_SORT.ORDER;

  // Full reload ensures server-side data refresh for sort changes.
  const onSortChange = (value: string) => {
    let params = setSearchParam(
      searchParams,
      'sort',
      value === SERVICE_SORT.ORDER ? undefined : value,
    );
    params = setSearchParam(params, 'page', '1');
    router.push({
      pathname: ROUTES.SERVICES,
      query: extractSearchParams(params),
    });
  };

  return (
    <section className={cn('flex flex-col', className)}>
      <div className="flex items-start justify-between gap-2 md:block">
        <div className="flex flex-col">
          <SectionHeading
            title={t('title')}
            className="block mb-2 md:mb-4"
            accentClassName="mb-4 bg-primary/70"
          />
          <div className="flex flex-col gap-2 mb-3 md:mb-5 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              {resultsDescription}
            </p>
            <Label className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{t('results.sortLabel')}</span>
              <Select value={currentSort} onValueChange={onSortChange}>
                <SelectTrigger
                  size="sm"
                  className="h-8 text-xs border-border/60"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  align="end"
                  className="min-w-(--radix-select-trigger-width)"
                >
                  <SelectItem value={SERVICE_SORT.ORDER}>
                    {t('results.sortDefault')}
                  </SelectItem>
                  <SelectItem value={SERVICE_SORT.TITLE_ASC}>
                    {t('results.sortAZ')}
                  </SelectItem>
                  <SelectItem value={SERVICE_SORT.TITLE_DESC}>
                    {t('results.sortZA')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </Label>
          </div>
        </div>
        <div className="md:hidden">{headerAction}</div>
      </div>

      <SelectedCategoryBadges
        categories={categories}
        selectedCategorySlugs={selectedCategorySlugs}
        className="hidden md:flex"
      />

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center max-w-md gap-3 px-6 py-8 mx-auto text-center border border-border/60 bg-muted/20 rounded-2xl">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/40">
            <SearchX className="size-5 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">
            {t('results.noResults')}
          </p>
          <Button variant="outline" size="sm" onClick={onResetFilters}>
            {t('results.resetFilters')}
          </Button>
        </div>
      ) : (
        <>
          <CardList
            items={items.map((item) => {
              const { badge, accentStyle } = getCategoryMeta(item.categorySlug);
              return {
                href: {
                  pathname: ROUTES.SERVICES_ITEM,
                  params: {
                    categorySlug: item.categorySlug,
                    itemSlug: item.slug,
                  },
                },
                title: item.title,
                description: item.description,
                itemTitle: item.title,
                itemDescription: item.description,
                badge,
                accentStyle,
              };
            })}
          />

          <div className="flex justify-between">
            <div />
            <Pagination
              pageCount={pageCount}
              page={page}
              onPageChange={onPageChange}
              className="justify-end mt-6"
            />
          </div>
        </>
      )}
    </section>
  );
}
