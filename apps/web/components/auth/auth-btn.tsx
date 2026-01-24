'use client';

import { ROUTES } from '@kwh/constants';
import { Link, useTranslations } from '@kwh/i18n';
import { Avatar, AvatarFallback } from '@kwh/ui/components/avatar';
import { buttonVariants } from '@kwh/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@kwh/ui/components/dropdown-menu';
import { User } from '@kwh/ui/components/icons';
import { cn } from '@kwh/ui/lib/utils';

import { logout } from '@/server/actions';

import { useAuth } from '../providers/auth-provider';

export function AuthButton() {
  const t = useTranslations('authBtn');
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user && !loading) {
    return (
      <Link
        href={ROUTES.SIGNIN}
        className={cn(buttonVariants({ variant: 'ghost' }), 'border-l-2')}
      >
        <User size={20} />
        <span className="hidden sm:inline-block text-sm text-muted-foreground font-semibold">
          {t('signIn')}
        </span>
      </Link>
    );
  }

  if (user)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="border-l-2">
          <Avatar className="cursor-pointer rounded-none w-9 h-9">
            {/* <AvatarImage src={currentUser.image ?? undefined} /> */}
            <AvatarFallback className="rounded-none w-9 h-9 flex items-center justify-center text-base">
              {user.email?.[0]?.toUpperCase() ?? 'U'}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem disabled>{user.email}</DropdownMenuItem>

          <DropdownMenuItem onClick={() => logout()}>
            {t('logout')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}
