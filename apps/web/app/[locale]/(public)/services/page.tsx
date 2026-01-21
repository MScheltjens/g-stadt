import { Locale } from '@invicity/constants';

import { getAllServicesByCategory } from '@/lib/api';
import { PageProps } from '@/types';

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;

  const servicesList = await getAllServicesByCategory(locale as Locale);

  return <pre>{JSON.stringify(servicesList, null, 2)}</pre>;
}
