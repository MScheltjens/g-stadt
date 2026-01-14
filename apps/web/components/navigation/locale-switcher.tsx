'use client';

import { useLocale, useTranslations } from '@repo/i18n/next-intl';
import { routing } from '@repo/i18n/routing';
import { usePathname, useRouter } from '@repo/i18n/navigation';
import { useTransition } from 'react';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@repo/ui/components/dropdown-menu';

import { Button } from '@repo/ui/components/button';
import { Globe } from '@repo/ui/icons';
import { cn } from '@repo/ui/lib/utils';

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations('locale-switcher');
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function changeLocale(nextLocale: string) {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname },
        { locale: nextLocale },
      );
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          size="sm"
          className={cn(
            'flex items-center gap-2 px-2 text-muted-foreground hover:text-foreground',
            isPending && 'opacity-60',
          )}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden md:block text-xs font-medium uppercase">
            {locale}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[120px]">
        {routing.locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => changeLocale(l)}
            className={cn(
              'cursor-pointer text-sm',
              l === locale && 'font-semibold text-primary',
            )}
          >
            {t('locale', { locale: l })}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
