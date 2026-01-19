import { LOCALES } from '@invicity/constants';
import { z } from 'zod';

export const LocaleSchema = z.enum([LOCALES.en, LOCALES.de, LOCALES.fr]);
