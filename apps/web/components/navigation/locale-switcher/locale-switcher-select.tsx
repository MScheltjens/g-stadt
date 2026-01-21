'use client';
import { Locale } from '@invicity/constants';
import { usePathname, useRouter } from '@invicity/i18n';
import { Button } from '@invicity/ui/components/button';
import { Globe } from '@invicity/ui/icons';
import { cn } from '@invicity/ui/lib/utils';
import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';

interface LocaleSwitcherSelectProps {
  children: ReactNode;
  defaultValue: Locale;
}

export function LocaleSwitcherSelect({
  children,
  defaultValue,
}: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  // ...existing code...

  return (
    <Button
      variant="link"
      className={cn(
        'relative inline-flex items-center justify-center gap-2',
        isPending && 'transition-opacity [&:disabled]:opacity-30',
      )}
    >
      <Globe className="text-secondary-foreground" />
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6 absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer text-muted-foreground"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </Button>
  );
}
