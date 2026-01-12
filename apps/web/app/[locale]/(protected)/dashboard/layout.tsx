import { checkUserRole } from '@/lib/auth';
import { redirect } from '@repo/i18n/navigation';
import { setRequestLocale } from '@repo/i18n/server';
import { RoleEnum } from '@repo/types';

type DashboardLayoutProps = {
  user: React.ReactNode;
  admin: React.ReactNode;
  staff: React.ReactNode;
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function DashboardLayout({
  user,
  admin,
  staff,
  params,
  children,
}: DashboardLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const role = await checkUserRole();

  if (!role) {
    redirect({ href: '/register', locale });
  }

  return (
    <>
      {role === RoleEnum.enum.ADMIN && admin}
      {role === RoleEnum.enum.STAFF && staff}
      {role === RoleEnum.enum.CITIZEN && user}
      {children}
    </>
  );
}
