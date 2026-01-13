import { checkUserRole } from '@/lib/auth';
import { redirect } from '@repo/i18n/navigation';
import { setRequestLocale } from '@repo/i18n/server';
import { RoleEnum } from '@repo/types';
import { type LayoutProps } from '@/types/next-page';

type DashboardLayoutProps = LayoutProps & {
  user: React.ReactNode;
  admin: React.ReactNode;
  staff: React.ReactNode;
};

export default async function DashboardLayout({
  user,
  admin,
  staff,
  params,
}: DashboardLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const role = await checkUserRole();

  if (!role) {
    redirect({ href: '/register', locale });
  }

  return (
    <>
      <div style={{ background: '#ffe', padding: '8px', marginBottom: '8px' }}>
        <strong>Debug:</strong> Role detected: {role ?? 'none'}
      </div>
      {role === RoleEnum.enum.ADMIN && admin}
      {role === RoleEnum.enum.STAFF && staff}
      {role === RoleEnum.enum.CITIZEN && user}
    </>
  );
}
