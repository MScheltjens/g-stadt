'use client';

import { ROUTES, SUPPORTED_LOCALES } from '@kwh/constants';
import { CategoryListResponse } from '@kwh/contracts';
import { Link, useLocale, useTranslations } from '@kwh/i18n';
import { usePathname } from '@kwh/i18n';
import { Button, buttonVariants } from '@kwh/ui/components/button';
import { CircleAlert, Globe, User } from '@kwh/ui/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@kwh/ui/components/navigation-menu';
import { cn } from '@kwh/ui/lib/utils';
import { useRouter } from 'next/navigation';
import path from 'path';

type TopNavProps = {
  contactCategories: CategoryListResponse;
};

export function TopNavbar({ contactCategories }: TopNavProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('navbar');

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Locale Switcher: only show on homepage */}
        {pathname === ROUTES.HOME && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={buttonVariants({
                variant: 'ghost',
                className:
                  'flex items-center gap-2 px-2 text-muted-foreground hover:text-foreground hover:bg-muted focus:bg-muted md:min-w-[100px] border-l-2',
              })}
            >
              <span className="sr-only">{t('changeLanguage')}</span>
              <Globe size={20} />
              <span className="hidden sm:block text-sm font-semibold tracking-wide uppercase ml-2">
                {locale}
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="right-0 min-w-[100px] w-[var(--radix-navigation-menu-trigger-width)]">
              <div className="bg-background w-full z-50 min-w-[100px]">
                {SUPPORTED_LOCALES.map((l) => (
                  <Button
                    key={l}
                    variant="ghost"
                    onClick={() => {
                      if (l === locale) return;
                      router.replace(
                        path.join('/', l, pathname.replace(`/${locale}`, '')),
                      );
                    }}
                    className={cn(
                      'block px-4 py-2 hover:bg-muted focus:bg-muted w-full text-left uppercase',
                      l === locale && 'font-semibold text-primary',
                    )}
                  >
                    {l.toUpperCase()}
                  </Button>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
        {/* Contact Menu Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={buttonVariants({
              variant: 'ghost',
              className:
                'tracking-wide font-semibold text-muted-foreground hover:text-foreground hover:bg-muted focus:bg-muted border-r-2 flex items-center border-l-2',
            })}
          >
            <Link
              href={ROUTES.CONTACT}
              className="flex items-center hover:bg-muted focus:bg-muted rounded-none"
            >
              <CircleAlert size={20} />
              <span className="hidden sm:inline-block ml-2">
                {t('contact')}
              </span>
            </Link>
          </NavigationMenuTrigger>

          {/* aligned to END */}
          <NavigationMenuContent className="right-0 min-w-[100px]">
            <div className="bg-background min-w-[100px]">
              {contactCategories.map((cat) => {
                const translation = cat.translations.find(
                  (t) => t.locale === locale,
                );

                return (
                  <Link
                    key={cat.id}
                    href={{
                      pathname: ROUTES.CONTACT_CATEGORY,
                      params: { categorySlug: translation?.slug ?? '' },
                    }}
                    className="block px-4 py-2 hover:bg-muted focus:bg-muted"
                  >
                    {translation?.label}
                  </Link>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Sign In Menu Item */}
        <NavigationMenuItem>
          <Link
            href={ROUTES.SIGNIN}
            className={buttonVariants({
              variant: 'ghost',
              className:
                'tracking-wide font-semibold text-muted-foreground hover:text-foreground hover:bg-muted focus:bg-muted border-r-2 flex items-center',
            })}
          >
            <User size={20} />
            <span className="sr-only">{t('signIn')}</span>
            <span className="hidden sm:inline-block">{t('signIn')}</span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
