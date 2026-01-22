'use client';

import { ROUTES } from '@invicity/constants';
import { Link, usePathname, useTranslations } from '@invicity/i18n';
import { User } from '@invicity/ui/components/icons';

import { LocaleSwitcher } from '@/components/navigation';

export function HeaderUtils() {
  const pathname = usePathname();
  const t = useTranslations('header.utils');
  return (
    <div className="flex items-center gap-3">
      {pathname === '/' && <LocaleSwitcher />}
      <Link
        href={ROUTES.SIGNIN}
        className="text-muted-foreground hover:text-foreground inline-flex items-center"
      >
        <User className="h-4 w-4" />
        <span className="ml-2 text-sm font-medium uppercase">
          {t('signIn')}
        </span>
      </Link>
    </div>
  );
}
