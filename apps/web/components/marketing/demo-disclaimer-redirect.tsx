'use client';

import { ROUTES } from '@kwh/constants';
import { useRouter } from '@kwh/i18n';
import { useEffect } from 'react';

const STORAGE_KEY = 'knowhere-demo-disclaimer-v1';

export function DemoDisclaimerRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Redirect to the modal route if not acknowledged
      router.replace(ROUTES.DEMO_DISCLAIMER);
    }
  }, [router]);

  return null;
}
