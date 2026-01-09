/**
 * Register Modal (Intercepting Route)
 *
 * This intercepts the /register route when navigating from within the app
 * and shows the registration form in a modal instead of a full page.
 */

import { Modal } from '@/components/common/modal';
import { RegisterForm } from '@/components/auth/register-form';
import { setRequestLocale } from '@repo/i18n/server';
import { Locale } from '@repo/i18n/index';

type RegisterModalProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function RegisterModal({ params }: RegisterModalProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <Modal>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <RegisterForm />
      </div>
    </Modal>
  );
}
