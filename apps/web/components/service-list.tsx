'use client';

import { ROUTES } from '@kwh/constants';
import { ServiceListPaginatedResponse } from '@kwh/contracts';
import { useRouter } from '@kwh/i18n';
import { Button } from '@kwh/ui/components/button';

type Props = {
  services: ServiceListPaginatedResponse;
};

export function ServiceList({ services }: Props) {
  const router = useRouter();
  const { items, total, page, limit } = services;
  const pageCount = Math.ceil(total / limit);

  const onPageChange = (p: number) => {
    router.push({ pathname: ROUTES.SERVICES, query: { page: p } });
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
      <div style={{ marginTop: 8, color: '#888' }}>
        Page {page} of {pageCount} ({total} services)
      </div>
    </div>
  );
}
