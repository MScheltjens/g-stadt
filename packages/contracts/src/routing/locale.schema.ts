import { z } from 'zod';
import { LOCALES } from '@repo/constants';

export const LocaleSchema = z.enum([...Object.values(LOCALES)]);
