import { createZodDto } from 'nestjs-zod';
import { SlugParamSchema } from '@repo/types';

export class SlugParamDto extends createZodDto(SlugParamSchema) {}
