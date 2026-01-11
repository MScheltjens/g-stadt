/**
 * Register Modal (Intercepting Route)
 *
 * This intercepts the /register route when navigating from within the app
 * and shows the registration form in a modal instead of a full page.
 */

import { Modal } from '@/components/common/modal';
import { RegisterForm } from '@/components/auth/register-form';
import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';

export default async function RegisterModal({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Modal>
      <RegisterForm />
    </Modal>
  );
}
