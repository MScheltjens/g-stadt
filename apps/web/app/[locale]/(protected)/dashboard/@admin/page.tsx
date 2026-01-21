import { setRequestLocale } from '@invicity/i18n';

import type { PageProps } from '@/types';

export default async function AdminDashboardPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>Admin Dashboard</h1>;
}
