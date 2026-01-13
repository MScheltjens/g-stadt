import { createZodDto } from 'nestjs-zod';
import { SlugParamSchema } from '@repo/contracts';

export class SlugParamDto extends createZodDto(SlugParamSchema) {}
