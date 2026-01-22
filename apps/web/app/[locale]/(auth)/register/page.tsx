/**
 * Register Page
 *
 * Full page version of the registration form.
 * When navigated to directly, shows the full page.
 * When intercepted from another route, shows as a modal.
 */

import { RegisterForm } from '@/components/auth/register/register.form';

export default async function RegisterPage() {
  return <RegisterForm />;
}
