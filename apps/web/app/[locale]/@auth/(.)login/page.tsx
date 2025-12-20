/**
 * Login Modal (Intercepting Route)
 *
 * This intercepts the /login route when navigating from within the app
 * and shows the login form in a modal instead of a full page.
 */

import { Modal } from '@/components/modal';
import { LoginForm } from '@/components/auth/login-form';

export default function LoginModal() {
  return (
    <Modal>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <LoginForm />
      </div>
    </Modal>
  );
}
