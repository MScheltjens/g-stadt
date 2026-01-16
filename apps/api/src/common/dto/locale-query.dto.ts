import { LocaleQuerySchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class LocaleQueryDto extends createZodDto(LocaleQuerySchema) {}
