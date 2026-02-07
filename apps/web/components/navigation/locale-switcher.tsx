'use client';

import { SUPPORTED_LOCALES } from '@kwh/constants';
import { useLocale, usePathname, useRouter, useTranslations } from '@kwh/i18n';
import { Button } from '@kwh/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@kwh/ui/components/dropdown-menu';
import { Globe } from '@kwh/ui/components/icons';
import { useParams } from 'next/navigation';

export function LocaleSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('localeSwitcher');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-l-2">
        <Button variant="ghost">
          <span className="sr-only">{t('label')}</span>
          <Globe size={20} />
          <span className="hidden text-sm font-semibold sm:inline-block text-muted-foreground">
            {currentLocale.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-25 d">
        {SUPPORTED_LOCALES.map((locale) => (
          <DropdownMenuItem
            key={locale}
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            onClick={() => router.replace(pathname, { locale })}
            className="font-semibold uppercase cursor-pointer text-primary"
            disabled={locale === currentLocale}
          >
            {locale.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
