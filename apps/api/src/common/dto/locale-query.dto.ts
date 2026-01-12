import { createZodDto } from 'nestjs-zod';
import { LocaleQuerySchema } from '@repo/types';

export class LocaleQueryDto extends createZodDto(LocaleQuerySchema) {}
