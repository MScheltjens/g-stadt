import { ServicesByCategoryResponseSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class ServicesByCategoryResponseDto extends createZodDto(
  ServicesByCategoryResponseSchema,
) {}
