/**
 * Login Page
 *
 * Full page version of the login form.
 * When navigated to directly, shows the full page.
 * When intercepted from another route, shows as a modal.
 */

import { setRequestLocale } from '@repo/i18n/server';

import { SignInForm } from '@/components/auth/sign-in-form';
import type { PageProps } from '@/types/next-page';

export default async function SignInPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <SignInForm />
    </div>
  );
}
