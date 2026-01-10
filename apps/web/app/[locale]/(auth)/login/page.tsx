/**
 * Login Page
 *
 * Full page version of the login form.
 * When navigated to directly, shows the full page.
 * When intercepted from another route, shows as a modal.
 */

import { LoginForm } from '@/components/auth/login-form';
import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

type LoginPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function LoginPage({ params }: LoginPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>
      <LoginForm />
    </div>
  );
}
