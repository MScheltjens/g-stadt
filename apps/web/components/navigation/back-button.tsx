'use client';

import { ROUTES } from '@kwh/constants';
import { usePathname, useRouter, useTranslations } from '@kwh/i18n';
import { Button } from '@kwh/ui/components/button';
import { ChevronLeft } from '@kwh/ui/components/icons';

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
