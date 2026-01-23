import { SUPPORTED_LOCALES } from '@invicity/constants';
import { z } from 'zod';

export const LocaleSchema = z.enum(SUPPORTED_LOCALES);
