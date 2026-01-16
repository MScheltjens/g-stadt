import { setRequestLocale } from '@invicity/i18n/server';

import type { PageProps } from '@/types/next-page';

export default async function AdminDashboardPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>Admin Dashboard</h1>;
}
