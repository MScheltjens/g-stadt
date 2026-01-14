'use client';

import { LocaleSwitcher } from '../navigation/locale-switcher';
import { Link } from '@repo/i18n/navigation';
import { User } from '@repo/ui/components/icons';
import { usePathname } from '@repo/i18n/navigation';
import { useTranslations } from '@repo/i18n/next-intl';
import { ROUTES } from '@repo/constants';

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
