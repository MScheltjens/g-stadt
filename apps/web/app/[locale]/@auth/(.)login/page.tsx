/**
 * Login Modal (Intercepting Route)
 *
 * This intercepts the /login route when navigating from within the app
 * and shows the login form in a modal instead of a full page.
 */

import { setRequestLocale } from '@invicity/i18n';

import { SignInForm } from '@/components/auth';
import { Modal } from '@/components/ui';
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
