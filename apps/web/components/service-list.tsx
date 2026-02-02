import { ServiceListResponse } from '@kwh/contracts';

export function ServiceList(services: ServiceListResponse) {
  return (
    <div>
      <pre>{JSON.stringify(services, null, 2)}</pre>
    </div>
  );
}
