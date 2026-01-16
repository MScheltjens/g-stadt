'use client';

import { useTranslations } from '@invicity/i18n/next-intl';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const t = useTranslations('error');
  useEffect(() => {
    // Optionally log error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>{t('title')}</h1>

      <p>{error.message || 'An unexpected error occurred.'}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
