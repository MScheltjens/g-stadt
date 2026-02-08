'use client';

import { ROUTES } from '@kwh/constants';
import { ServiceListPaginatedResponse } from '@kwh/contracts';
import { CategoryListResponse } from '@kwh/contracts';
import { useRouter, useTranslations } from '@kwh/i18n';
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

  const onPageChange = (p: number) => {
    const params = setSearchParam(searchParams, 'page', p.toString());
    router.push({
      pathname: ROUTES.SERVICES,
      query: extractSearchParams(params),
    });
  };

  const resultsText = t('results.result', { count: total });
  const [singular, plural] = resultsText.split('|').map((part) => part.trim());
  const resultsDescription =
    total === 1
      ? (singular ?? resultsText)
      : (plural ?? singular ?? resultsText);

  return (
    <section className={cn('flex flex-col', className)}>
      <div className="flex items-baseline justify-between gap-3 md:block">
        <SectionHeading
          title={t('title')}
          description={resultsDescription}
          className="block mb-4 md:mb-6"
          accentClassName="mb-4 bg-primary/70"
        />
        <div className="md:hidden">{headerAction}</div>
      </div>

      <SelectedCategoryBadges
        categories={categories}
        selectedCategorySlugs={selectedCategorySlugs}
        className="hidden md:flex"
      />

      <CardList
        items={items.map((item) => ({
          href: {
            pathname: ROUTES.SERVICES_ITEM,
            params: { categorySlug: item.categorySlug, itemSlug: item.slug },
          },
          title: item.title,
          description: item.description,
          itemTitle: item.title,
          itemDescription: item.description,
          badge: item.categorySlug
            ? (() => {
                const category = categoryBySlug.get(item.categorySlug);
                if (!category) return undefined;
                const color = getColorById(category.id);
                return {
                  label: normalizeBadgeLabel(category.label),
                  className: 'border border-current',
                  style: {
                    borderColor: color,
                    backgroundColor: withAlpha(color, 0.12),
                    color,
                  },
                };
              })()
            : undefined,
          accentStyle: item.categorySlug
            ? (() => {
                const category = categoryBySlug.get(item.categorySlug);
                if (!category) return undefined;
                const color = getColorById(category.id);
                return { backgroundColor: color };
              })()
            : undefined,
        }))}
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
    </section>
  );
}
