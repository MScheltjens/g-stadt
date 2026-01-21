import { getTranslations, redirect } from '@invicity/i18n';
import { Metadata } from 'next';

import { checkUserRole } from '@/lib/auth';
import { env } from '@/lib/env';
import type { LayoutProps, MetadataProps } from '@/types';

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

      {role === 'ADMIN' && admin}
      {role === 'STAFF' && staff}
      {role === 'CITIZEN' && user}
    </>
  );
}
