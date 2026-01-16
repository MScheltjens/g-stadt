import { setRequestLocale } from '@repo/i18n/server';

import type { PageProps } from '@/types/next-page';

export default async function UserDashboardPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>User Dashboard</h1>;
}
