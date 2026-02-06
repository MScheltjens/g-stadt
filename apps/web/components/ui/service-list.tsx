'use client';

import { ROUTES } from '@kwh/constants';
import { ServiceListPaginatedResponse } from '@kwh/contracts';
import { useRouter, useTranslations } from '@kwh/i18n';
import { useSearchParams } from 'next/navigation';

import { CardList } from '@/components/ui/card-list';
import { Pagination } from '@/components/ui/pagination';
import { SectionHeading } from '@/components/layout/section-heading';

import { CategoryListResponse } from '@kwh/contracts';
import { SelectedCategoryBadges } from '@/components/ui/selected-category-badges';

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
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', p.toString());
    router.push({
      pathname: ROUTES.SERVICES,
      query: Object.fromEntries(params.entries()),
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
          itemSlug: item.slug,
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
