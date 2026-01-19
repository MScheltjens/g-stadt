'use client';

import { ROUTES } from '@invicity/constants';
import { useTranslations } from '@invicity/i18n/next-intl';
import { Button } from '@invicity/ui/components/button';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { Modal } from '@/components/common/modal';
import { STORAGE_KEY } from '@invicity/constants';

export default function DemoDisclaimerModalPage() {
  const router = useRouter();
  const t = useTranslations('demoDisclaimerModal');

  // Prevent reopening if already seen
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      router.replace(ROUTES.HOME);
    }
  }, [router]);

  // Hard guarantee: mark as seen on unmount
  useEffect(() => {
    return () => {
      localStorage.setItem(STORAGE_KEY, 'true');
    };
  }, []);

  const handleAcknowledge = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'true');
    // router.back() and similar do not work well with locale changes
    window.location.href = ROUTES.HOME;
  }, []);

  return (
    <Modal onClose={handleAcknowledge}>
      <h2 className="text-lg font-semibold">🚧 Demo Project</h2>

      <p className="mt-2 text-sm text-muted-foreground">{t('description')}</p>

      <div className="mt-6 flex justify-end">
        <Button onClick={handleAcknowledge}>{t('continue')}</Button>
      </div>
    </Modal>
  );
}
