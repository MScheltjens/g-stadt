import { setRequestLocale } from '@invicity/i18n/server';

import { getAllServicesByCategory } from '@/lib/api/services';
import { PageProps } from '@/lib/types/next-page';
import { normalizeLocale } from '@/lib/utils';

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const safeLocale = normalizeLocale(locale);
  setRequestLocale(safeLocale);

  const servicesList = await getAllServicesByCategory(safeLocale);

  return (
    <>
      <pre>{JSON.stringify(servicesList, null, 2)}</pre>
    </>
  );
}
