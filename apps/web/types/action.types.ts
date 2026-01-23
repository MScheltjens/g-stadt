import { AuthResponse } from '@kwh/contracts';

export type ActionError = {
  error: string;
};

export type ActionSuccess = {
  success: boolean;
  user?: AuthResponse['user'];
};

export type LoginResult = ActionSuccess | ActionError;
export type RegisterResult = ActionSuccess | ActionError;
