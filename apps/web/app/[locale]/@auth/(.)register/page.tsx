/**
 * Register Modal (Intercepting Route)
 *
 * This intercepts the /register route when navigating from within the app
 * and shows the registration form in a modal instead of a full page.
 */

import { Modal } from '@/components/modal';
import { RegisterForm } from '@/components/auth/register-form';

export default function RegisterModal() {
  return (
    <Modal>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <RegisterForm />
      </div>
    </Modal>
  );
}
