import { setRequestLocale } from '@invicity/i18n';

import { getAllServicesByCategory } from '@/lib/api';
import { PageProps } from '@/types';

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
