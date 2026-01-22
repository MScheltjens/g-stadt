'use client';

import { ROUTES } from '@invicity/constants';
import { usePathname, useRouter, useTranslations } from '@invicity/i18n';
import { Button } from '@invicity/ui/components/button';
import { ChevronLeft } from '@invicity/ui/components/icons';

export function BackButton({ className }: { className?: string }) {
  const t = useTranslations('backButton');
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === ROUTES.HOME) return null;

  return (
    <Button onClick={() => router.back()} className={className} variant="ghost">
      <ChevronLeft aria-hidden="true" />
      {t('label')}
    </Button>
  );
}
