import { checkUserRole } from '@/lib/auth';
import { Locale } from '@repo/i18n/index';
import { redirect } from '@repo/i18n/navigation';
import { setRequestLocale } from '@repo/i18n/server';
import { RoleEnum } from '@repo/types';

export default async function DashboardLayout({
  user,
  admin,
  staff,
  params,
}: {
  user: React.ReactNode;
  admin: React.ReactNode;
  staff: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const role = await checkUserRole();

  if (!role) redirect({ href: '/register', locale: locale as Locale });

  return (
    <>
      {role === RoleEnum.enum.ADMIN && admin}
      {role === RoleEnum.enum.STAFF && staff}
      {role === RoleEnum.enum.CITIZEN && user}
    </>
  );
}
