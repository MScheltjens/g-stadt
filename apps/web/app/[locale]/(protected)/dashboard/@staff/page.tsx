import { setRequestLocale } from '@invicity/i18n/server';

import type { PageProps } from '@/lib/types/next-page';

export default async function StaffDashboardPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>Staff Dashboard</h1>;
}
