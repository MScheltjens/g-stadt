import { Request } from 'express';
import { Locale } from '@invicity/constants';

export interface CustomRequest extends Request {
  headers: Request['headers'] & { locale: Locale };
}
