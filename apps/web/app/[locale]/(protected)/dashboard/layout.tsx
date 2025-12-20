import { checkUserRole } from '@/lib/auth';
import { Locale } from '@repo/i18n/index';
import { redirect } from '@repo/i18n/navigation';
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
  const paramsResolved = await params;
  const role = await checkUserRole();

  if (!role)
    redirect({ href: '/register', locale: paramsResolved.locale as Locale });

  return (
    <>
      {role === RoleEnum.enum.ADMIN && admin}
      {role === RoleEnum.enum.STAFF && staff}
      {role === RoleEnum.enum.CITIZEN && user}
    </>
  );
}
