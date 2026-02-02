import { getServcicesByCategory } from '@/server/services/services.service';

export default async function ServicesPage() {
  // const t = await getTranslations('services');

  const data = await getServcicesByCategory();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
