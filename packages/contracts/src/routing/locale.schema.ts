import { LOCALES } from '@repo/constants';
import { z } from 'zod';

export const LocaleSchema = z.enum([...Object.values(LOCALES)]);
