import { setRequestLocale } from '@invicity/i18n';

import type { PageProps } from '@/types';

export default async function StaffDashboardPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>Staff Dashboard</h1>;
}
