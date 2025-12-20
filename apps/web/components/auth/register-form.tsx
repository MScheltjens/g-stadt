/**
 * Register Form Component
 *
 * Reusable registration form that can be used in both full page and modal contexts.
 */

'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from '@repo/i18n';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterWithConfirmSchema, RegisterWithConfirmDto } from '@repo/types';
import { register } from '@/server/actions/auth';
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

export const RegisterForm = () => {
  const router = useRouter();
  const t = useTranslations('auth');
  const [error, setError] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterWithConfirmDto>({
    resolver: zodResolver(RegisterWithConfirmSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(data: RegisterWithConfirmDto) {
    setError('');

    startTransition(async () => {
      const result = await register({
        email: data.email,
        password: data.password,
        role: 'CITIZEN',
      });

      if ('error' in result) {
        setError(result.error);
      } else {
        router.push('/dashboard');
        router.refresh();
      }
    });
  }

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t('register.title')}
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {t('register.subtitle')}{' '}
          <Link
            href="/login"
            className="font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
          >
            {t('register.loginLink')}
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
                <FormLabel>{t('register.email')}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t('register.emailPlaceholder')}
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
                <FormLabel>{t('register.password')}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t('register.passwordPlaceholder')}
                    autoComplete="new-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('register.confirmPassword')}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t('register.confirmPasswordPlaceholder')}
                    autoComplete="new-password"
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
            {isPending
              ? t('register.creatingAccount')
              : t('register.createAccount')}
          </Button>
        </form>
      </Form>
    </div>
  );
};
