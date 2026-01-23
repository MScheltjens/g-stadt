import { ROLES } from '@kwh/constants';
import { getTranslations, redirect } from '@kwh/i18n';
import { Metadata } from 'next';

import { checkUserRole } from '@/authentication/jwt';
import type { LayoutProps, MetadataProps } from '@/types';
import { env } from '@/utils/env';

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'dashboard.meta',
  });
  return {
    title: t('title'),
    description: t('description'),
  };
}

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

  const role = await checkUserRole();

  if (!role) {
    redirect({ href: '/register', locale });
  }

  return (
    <>
      {env.NODE_ENV === 'development' && (
        <div style={{ background: '#ffe', padding: 8, marginBottom: 8 }}>
          <strong>Debug:</strong> Role detected: {role}
        </div>
      )}

      {role === ROLES.ADMIN && admin}
      {role === ROLES.STAFF && staff}
      {role === ROLES.CITIZEN && user}
    </>
  );
}
