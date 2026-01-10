/**
 * Register Page
 *
 * Full page version of the registration form.
 * When navigated to directly, shows the full page.
 * When intercepted from another route, shows as a modal.
 */

import { RegisterForm } from '@/components/auth/register-form';
import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

type RegisterPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Register</h1>
      <RegisterForm />
    </div>
  );
}
