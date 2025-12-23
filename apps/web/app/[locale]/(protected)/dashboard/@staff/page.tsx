import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

export default async function StaffDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <h1>Staff Dashboard</h1>;
}
