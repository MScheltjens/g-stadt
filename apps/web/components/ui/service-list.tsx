'use client';

import { ROUTES } from '@kwh/constants';
import { ServiceListPaginatedResponse } from '@kwh/contracts';
import { useRouter, useTranslations } from '@kwh/i18n';
import { useSearchParams } from 'next/navigation';

import { CardList } from '@/components/ui/card-list';
import { Pagination } from '@/components/ui/pagination';

type Props = {
  services: ServiceListPaginatedResponse;
  className?: string;
};

export function ServiceList({ services, className }: Props) {
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
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-semibold text-accent-foreground">
          {t('titleWithTotal', { total })}
        </h2>

        <Pagination
          pageCount={pageCount}
          page={page}
          onPageChange={onPageChange}
        />
      </div>

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
