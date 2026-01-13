import { checkUserRole } from '@/lib/auth';
import { redirect } from '@repo/i18n/navigation';
import { setRequestLocale } from '@repo/i18n/server';
import type { LayoutProps } from '@/types/next-page';

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
      {process.env.NODE_ENV === 'development' && (
        <div style={{ background: '#ffe', padding: 8, marginBottom: 8 }}>
          <strong>Debug:</strong> Role detected: {role}
        </div>
      )}

      {role === 'ADMIN' && admin}
      {role === 'STAFF' && staff}
      {role === 'CITIZEN' && user}
    </>
  );
}
