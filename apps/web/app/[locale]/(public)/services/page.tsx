import { setRequestLocale } from '@invicity/i18n/server';

import { getAllServicesByCategory, getList } from '@/lib/api/services';
import { PageProps } from '@/lib/types/next-page';

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const servicesList = await getAllServicesByCategory(locale);

  return (
    <>
      <pre>{JSON.stringify(servicesList, null, 2)}</pre>
    </>
  );
}
