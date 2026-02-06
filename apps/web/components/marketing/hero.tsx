import { ROUTES } from '@kwh/constants';
import { getTranslations, Link } from '@kwh/i18n';
import { buttonVariants } from '@kwh/ui/components/button';
import { cn } from '@kwh/ui/lib/utils';
import Image from 'next/image';

import { KnowhereLogo } from '@/components/svg/knowhere.logo';
import homeHeroImg from '@/public/images/g-stadt.png';

export async function Hero() {
  const t = await getTranslations('home.hero');

  return (
    <section className="relative overflow-hidden">
      {/* Map background */}
      <Image
        src={homeHeroImg}
        alt="home hero image - abstract city map"
        fill
        priority
        aria-hidden
        className="object-cover object-right pointer-events-none select-none opacity-90"
      />

      {/* Color & contrast overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-background/40 via-background/20 to-accent/10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 py-20 mx-auto md:py-24">
        <p className="mb-4 text-sm font-medium tracking-wide uppercase text-muted-foreground">
          {t('badge')}
        </p>

        <KnowhereLogo className="h-20 mb-4 md:h-36" />

        <p className="max-w-2xl mt-5 text-base md:text-lg text-muted-foreground">
          {t('description')}
        </p>

        {/* services / news / events */}
        <div className="flex flex-wrap items-center gap-5 mt-8">
          <Link
            href={ROUTES.SERVICES}
            className={buttonVariants({ variant: 'default', size: 'lg' })}
          >
            {t('actionServices')}
          </Link>

          <Link
            href={ROUTES.NEWS}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-transparent border border-primary text-foreground hover:bg-background hover:border-ring',
            )}
          >
            {t('actionNews')}
          </Link>

          <Link
            href={ROUTES.EVENTS}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-transparent border border-primary text-foreground hover:bg-background hover:border-ring',
            )}
          >
            {t('actionEvents')}
          </Link>
        </div>
      </div>
    </section>
  );
}
