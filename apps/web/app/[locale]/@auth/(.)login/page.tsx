/**
 * Login Modal (Intercepting Route)
 *
 * This intercepts the /login route when navigating from within the app
 * and shows the login form in a modal instead of a full page.
 */

import { setRequestLocale } from '@repo/i18n/server';

import { SignInForm } from '@/components/auth/sign-in-form';
import { Modal } from '@/components/common/modal';
import type { PageProps } from '@/types/next-page';

export default async function LoginModal({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <Modal>
      <SignInForm />
    </Modal>
  );
}
