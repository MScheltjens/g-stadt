import { SUPPORTED_LOCALES } from '@kwh/constants';
import { z } from 'zod';

export const LocaleSchema = z.enum(SUPPORTED_LOCALES);
