/**
 * Register Page
 *
 * Full page version of the registration form.
 * When navigated to directly, shows the full page.
 * When intercepted from another route, shows as a modal.
 */

import { RegisterForm } from '@/components/auth/register-form';
import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';

export default async function RegisterPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <RegisterForm />
    </div>
  );
}
