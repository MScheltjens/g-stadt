/**
 * Login Form Component
 *
 * Reusable login form that can be used in both full page and modal contexts.
 */

'use client';

import { useState, useTransition } from 'react';
import { useTranslations } from '@repo/i18n/next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type LoginInput, LoginInputSchema } from '@repo/contracts';
import { login } from '@/lib/actions/auth';
import { Link } from '@repo/i18n/navigation';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Alert, AlertDescription } from '@repo/ui/components/alert';
import { ROUTES } from '../../../../packages/constants/dist/types/routing';

export function LoginForm() {
  const t = useTranslations('auth');
  const [error, setError] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginInputSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: LoginInput) {
    setError('');

    startTransition(async () => {
      const result = await login(data);

      if ('error' in result) {
        setError(result.error);
      } else {
        // Force a hard navigation to ensure middleware picks up new cookies
        window.location.href = '/dashboard';
      }
    });
  }

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t('login.title')}
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {t('login.subtitle')}{' '}
          <Link
            href={ROUTES.REGISTER}
            className="font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
          >
            {t('login.registerLink')}
          </Link>
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('login.email')}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t('login.emailPlaceholder')}
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('login.password')}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t('login.passwordPlaceholder')}
                    autoComplete="current-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={isPending}
            size="lg"
            className="w-full"
          >
            {isPending ? t('login.signingIn') : t('login.signIn')}
          </Button>
        </form>
      </Form>
    </div>
  );
}
