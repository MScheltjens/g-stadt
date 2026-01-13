import { createZodDto } from 'nestjs-zod';
import { LocaleQuerySchema } from '@repo/contracts';

export class LocaleQueryDto extends createZodDto(LocaleQuerySchema) {}
