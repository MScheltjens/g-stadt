'use client';

import { ROUTES } from '@kwh/constants';
import { ServiceListPaginatedResponse } from '@kwh/contracts';
import { CategoryListResponse } from '@kwh/contracts';
import { useRouter, useTranslations } from '@kwh/i18n';
import { useSearchParams } from 'next/navigation';

import { SectionHeading } from '@/components/layout/section-heading';
import { CardList } from '@/components/ui/card-list';
import { Pagination } from '@/components/ui/pagination';
import { SelectedCategoryBadges } from '@/components/ui/selected-category-badges';
import { extractSearchParams, setSearchParam } from '@/utils/search-params';

type Props = {
  services: ServiceListPaginatedResponse;
  className?: string;
  categories?: CategoryListResponse;
  selectedCategorySlugs?: string[];
};

export function ServiceList({
  services,
  className,
  categories,
  selectedCategorySlugs,
}: Props) {
  const t = useTranslations('services.results');
  const searchParams = useSearchParams();
  const router = useRouter();
  const { items, total, page, limit } = services;

  const pageCount = total > 0 ? Math.ceil(total / limit) : 1;

  const onPageChange = (p: number) => {
    const params = setSearchParam(searchParams, 'page', p.toString());
    router.push({
      pathname: ROUTES.SERVICES,
      query: extractSearchParams(params),
    });
  };

  return (
    <section className={className}>
      <SectionHeading title={t('titleWithTotal', { total })} />

      <SelectedCategoryBadges
        categories={categories}
        selectedCategorySlugs={selectedCategorySlugs}
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
        }))}
      />

      <div className="flex justify-between">
        <div />
        <Pagination
          pageCount={pageCount}
          page={page}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
}
