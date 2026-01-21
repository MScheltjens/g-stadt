import { AuthResponse } from '@invicity/contracts';

export interface ActionError {
  error: string;
}

export interface ActionSuccess {
  success: boolean;
  user?: AuthResponse['user'];
}

export type LoginResult = ActionSuccess | ActionError;
export type RegisterResult = ActionSuccess | ActionError;
