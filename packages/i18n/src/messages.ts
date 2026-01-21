import { Locale } from '@invicity/constants';

import deMessages from './messages/de.json';
import enMessages from './messages/en.json';
import frMessages from './messages/fr.json';

export const MESSAGES: Record<Locale, object> = {
  en: enMessages,
  de: deMessages,
  fr: frMessages,
} as const;
