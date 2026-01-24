'use client';

import { ROUTES, SUPPORTED_LOCALES } from '@kwh/constants';
import { useLocale, usePathname, useRouter, useTranslations } from '@kwh/i18n';
import { Button } from '@kwh/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@kwh/ui/components/dropdown-menu';
import { Globe } from '@kwh/ui/components/icons';
import { cn } from '@kwh/ui/lib/utils';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('localeSwitcher');

  if (pathname !== ROUTES.HOME) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-l-2">
        <Button variant="ghost">
          <span className="sr-only">{t('label')}</span>
          <Globe size={20} />
          <span className="hidden sm:inline-block text-sm text-muted-foreground font-semibold">
            {locale.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[100px] d">
        {SUPPORTED_LOCALES.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => {
              if (l === locale) return;
              router.push(pathname, { locale: l });
            }}
            className={cn(
              'uppercase cursor-pointer',
              l === locale && 'font-semibold text-primary',
            )}
          >
            {l}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
