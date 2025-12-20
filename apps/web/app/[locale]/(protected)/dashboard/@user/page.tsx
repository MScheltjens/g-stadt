import { Locale } from '@repo/i18n/index';
import { setRequestLocale } from '@repo/i18n/server';

type UserDashboardPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function UserDashboardPage({
  params,
}: UserDashboardPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <h1>User Dashboard</h1>;
}
