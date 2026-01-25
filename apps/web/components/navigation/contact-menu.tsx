'use client';

import { ROUTES } from '@kwh/constants';
import { CategoryListResponse } from '@kwh/contracts';
import { Link, useTranslations } from '@kwh/i18n';
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
  const t = useTranslations('contactMenu');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="border-l-2">
          <CircleAlert size={20} />
          <span className="hidden text-sm font-semibold sm:inline-block text-muted-foreground">
            {t('label')}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-45">
        {contactCategories.map((cat) => {
          return (
            <DropdownMenuItem key={cat.id} asChild>
              <Link
                href={{
                  pathname: ROUTES.CONTACT_CATEGORY,
                  params: { categorySlug: cat.slug },
                }}
                className="w-full"
              >
                {cat.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
