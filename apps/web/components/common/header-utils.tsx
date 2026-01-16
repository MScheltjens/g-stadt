'use client';

import { ROUTES } from '@invicity/constants';
import { Link } from '@invicity/i18n/navigation';
import { usePathname } from '@invicity/i18n/navigation';
import { useTranslations } from '@invicity/i18n/next-intl';
import { User } from '@invicity/ui/components/icons';

import { LocaleSwitcher } from '../navigation/locale-switcher';

export function HeaderUtils() {
  const pathname = usePathname();
  const t = useTranslations('header.utils');
  return (
    <div className="flex items-center gap-3 border-l pl-2">
      {pathname === '/' && <LocaleSwitcher />}
      <Link
        href={ROUTES.SIGNIN}
        className="text-muted-foreground hover:text-foreground"
      >
        <User className="h-4 w-4" />
        <span className="sr-only">{t('signIn')}</span>
      </Link>
    </div>
  );
}
