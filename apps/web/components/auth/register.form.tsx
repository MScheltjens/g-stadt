'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ROUTES } from '@kwh/constants';
import { type RegisterInput, RegisterInputSchema } from '@kwh/contracts';
import { Link, useTranslations } from '@kwh/i18n';
import { Alert, AlertDescription } from '@kwh/ui/components/alert';
import { Button } from '@kwh/ui/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@kwh/ui/components/form';
import { Input } from '@kwh/ui/components/input';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { register } from '@/server/actions/auth.actions';

// Define the schema for the registration form
// This is not a contract schema but a form-specific schema
const RegisterInputFormSchema = RegisterInputSchema.extend({
  confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});
type RegisterInputForm = z.infer<typeof RegisterInputFormSchema>;

export function RegisterForm() {
  const t = useTranslations('auth');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterInputForm>({
    resolver: zodResolver(RegisterInputFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(data: RegisterInput) {
    setError('');

    startTransition(async () => {
      const result = await register({
        email: data.email,
        password: data.password,
      });

      if ('error' in result) {
        setError(result.error);
      } else {
        // redirect to dashboard on successful registration
        window.location.href = ROUTES.DASHBOARD;
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
            href={ROUTES.SIGNIN}
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
                  <Input type="email" autoComplete="email" {...field} />
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
}
