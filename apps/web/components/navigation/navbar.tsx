'use client';

import { ROUTES } from '@invicity/constants';
import { Link, useLocale, useTranslations } from '@invicity/i18n';
import { buttonVariants } from '@invicity/ui/components/button';
import { CircleAlert, User } from '@invicity/ui/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@invicity/ui/components/navigation-menu';

import { HeaderProps } from '@/components/layout/header';

export function Navbar({ categories }: HeaderProps) {
  const locale = useLocale();
  const t = useTranslations('navbar');
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Contact Categories Dropdown */}
        {categories?.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={buttonVariants({
                variant: 'ghost',
                className:
                  'tracking-wide font-semibold text-muted-foreground hover:text-foreground rounded-none border-r border-l',
              })}
            >
              <CircleAlert size={20} />
              <span className="hidden sm:inline-block ml-2">
                {t('contact')}
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50">
                {categories.map((cat) => {
                  return (
                    <Link
                      key={cat.id}
                      // @ts-expect-error -- TypeScript will validate that only known `params`
                      // are used in combination with a given `pathname`. Since the two will
                      // always match for the current route, we can skip runtime checks.
                      href={
                        cat.translations.filter(
                          (translation) => translation.locale === locale,
                        )[0]?.slug
                          ? `/contact/${cat.translations.filter((translation) => translation.locale === locale)[0]?.slug}`
                          : `/contact`
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {
                        cat.translations.filter(
                          (translation) => translation.locale === locale,
                        )[0]?.label
                      }
                    </Link>
                  );
                })}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <Link
            href={ROUTES.SIGNIN}
            className={buttonVariants({
              variant: 'ghost',
              className:
                ' tracking-wide font-semibold text-muted-foreground hover:text-foreground rounded-none border-r',
            })}
          >
            <User size={20} />
            <span className="hidden sm:inline-block ml-2">{t('signIn')}</span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
