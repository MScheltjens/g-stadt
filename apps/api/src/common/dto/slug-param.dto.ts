import { SlugParamSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class SlugParamDto extends createZodDto(SlugParamSchema) {}
