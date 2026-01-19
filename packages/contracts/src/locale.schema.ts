import { z } from 'zod';
import { LOCALES } from '@invicity/constants';

export const LocaleSchema = z.enum([LOCALES.en, LOCALES.de, LOCALES.fr]);
