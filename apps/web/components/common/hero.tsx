import Image from 'next/image';
import { Link } from '@repo/i18n/navigation';
import { getTranslations } from '@repo/i18n/server';
import { buttonVariants } from '@repo/ui/components/button';
import { cn } from '@repo/ui/lib/utils';
import homeHeroImg from '@/public/images/g-stadt.png';

export async function Hero() {
  const t = await getTranslations('home.hero');

  return (
    <section className="relative overflow-hidden">
      {/* Map background */}
      <Image
        src={homeHeroImg}
        alt=""
        fill
        priority
        aria-hidden
        className="
          object-cover object-right
          opacity-90
          pointer-events-none select-none
        "
      />

      {/* Color & contrast overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br
        from-background/40
        via-background/20
        to-accent/10
        pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {t('badge')}
        </p>

        <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight">
          <span className="block text-muted-foreground text-lg mb-1">
            {t('title')}
          </span>
          <span className="text-primary">{t('cityName')}</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
          {t('description')}
        </p>

        {/* News / Events */}
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href="/news"
            className={buttonVariants({ variant: 'default', size: 'lg' })}
          >
            {t('actionNews')}
          </Link>

          <Link
            href="/events"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-transparent border border-border text-foreground hover:bg-background hover:border-ring',
            )}
          >
            {t('actionEvents')}
          </Link>
        </div>
      </div>
    </section>
  );
}
