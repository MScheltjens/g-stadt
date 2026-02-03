import { ServiceListPaginatedResponse } from '@kwh/contracts';

import { ServiceFilter } from './service-filter';
import { ServiceList } from '@/components/ui/service-list';

// Wrapper for ServiceFilter and ServiceList with layout
export function ServiceFilterListWrapper({
  categories,
  services,
}: {
  categories: { label: string; id: string }[];
  services: ServiceListPaginatedResponse;
}) {
  return (
    <div className="flex gap-6 mt-4 md:gap-8">
      <ServiceFilter
        categories={categories}
        className="w-1/3 max-w-sm min-w-65"
      />
      <ServiceList services={services} className="flex-1 w-2/3" />
    </div>
  );
}
