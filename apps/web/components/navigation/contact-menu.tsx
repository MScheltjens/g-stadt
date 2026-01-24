'use client';

import { ROUTES } from '@kwh/constants';
import { CategoryListResponse } from '@kwh/contracts';
import { Link, useLocale, useTranslations } from '@kwh/i18n';
import { Button } from '@kwh/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@kwh/ui/components/dropdown-menu';
import { CircleAlert } from '@kwh/ui/components/icons';

export function ContactMenu({
  contactCategories,
}: {
  contactCategories: CategoryListResponse;
}) {
  const locale = useLocale();
  const t = useTranslations('contactMenu');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="border-l-2">
          <CircleAlert size={20} />
          <span className="hidden sm:inline-block text-sm text-muted-foreground font-semibold">
            {t('label')}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[180px]">
        {contactCategories.map((cat) => {
          const translation = cat.translations.find((t) => t.locale === locale);

          return (
            <DropdownMenuItem key={cat.id} asChild>
              <Link
                href={{
                  pathname: ROUTES.CONTACT_CATEGORY,
                  params: { categorySlug: translation?.slug ?? '' },
                }}
                className="w-full"
              >
                {translation?.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
