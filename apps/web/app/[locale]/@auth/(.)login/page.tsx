/**
 * Login Modal (Intercepting Route)
 *
 * This intercepts the /login route when navigating from within the app
 * and shows the login form in a modal instead of a full page.
 */

import { Modal } from '@/components/common/modal';
import { LoginForm } from '@/components/auth/login-form';
import { setRequestLocale } from '@repo/i18n/server';
import { Locale } from '@repo/i18n';

type LoginModalProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function LoginModal({ params }: LoginModalProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
}
