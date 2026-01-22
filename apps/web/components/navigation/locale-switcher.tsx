'use client';

import {
  routing,
  useLocale,
  usePathname,
  useRouter,
  useTranslations,
} from '@invicity/i18n';
import { Button } from '@invicity/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@invicity/ui/components/dropdown-menu';
import { Globe } from '@invicity/ui/icons';
import { cn } from '@invicity/ui/lib/utils';
import { useTransition } from 'react';

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations('localeSwitcher');
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
          variant="ghost"
          className={cn(
            'flex items-center gap-2 px-2 text-muted-foreground hover:text-foreground rounded-none',
            isPending && 'opacity-60',
          )}
        >
          <Globe />
          <span className="hidden sm:block text-sm font-semibold tracking-wide uppercase">
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
