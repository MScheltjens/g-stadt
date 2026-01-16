import { LocaleQuerySchema } from '@repo/contracts';
import { createZodDto } from 'nestjs-zod';

export class LocaleQueryDto extends createZodDto(LocaleQuerySchema) {}
