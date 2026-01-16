import { SlugParamSchema } from '@repo/contracts';
import { createZodDto } from 'nestjs-zod';

export class SlugParamDto extends createZodDto(SlugParamSchema) {}
