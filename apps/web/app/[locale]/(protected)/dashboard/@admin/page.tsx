import { Locale } from '@repo/i18n/index';
import { setRequestLocale } from '@repo/i18n/server';

type AdminDashboardPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminDashboardPage({
  params,
}: AdminDashboardPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <h1>Admin Dashboard</h1>;
}
