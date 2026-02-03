'use client';

import { ROUTES } from '@kwh/constants';
import { ServiceListPaginatedResponse } from '@kwh/contracts';
import { useRouter } from '@kwh/i18n';
import { Button } from '@kwh/ui/components/button';
import { useSearchParams } from 'next/navigation';

type Props = {
  services: ServiceListPaginatedResponse;
};

export function ServiceList({ services }: Props) {
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
    <div>
      <ul>
        {items.map((service) => (
          <li key={service.id}>
            {service.title} - {service.id}
          </li>
        ))}
      </ul>
      {pageCount > 1 ? (
        <div style={{ marginTop: 16 }}>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              onClick={() => onPageChange?.(p)}
              disabled={p === page}
              style={{ margin: 2, fontWeight: p === page ? 'bold' : 'normal' }}
            >
              {p}
            </Button>
          ))}
        </div>
      ) : null}
      <div style={{ marginTop: 8, color: '#888' }}>
        Page {page} of {pageCount} ({total} services)
      </div>
    </div>
  );
}
