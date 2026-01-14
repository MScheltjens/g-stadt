import { getTranslations } from '@repo/i18n/server';

export async function ComingSoon() {
  const t = await getTranslations('coming-soon');
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="mb-6 text-5xl">🚧</div>

        <h1 className="text-3xl font-semibold tracking-tight">{t('title')}</h1>

        <p className="mt-4 text-muted-foreground">{t('description')}</p>

        <p className="mt-6 text-sm text-muted-foreground">
          Please check back soon.
        </p>
      </div>
    </main>
  );
}
