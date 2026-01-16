import { ServiceListQuerySchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class ServiceListQueryDto extends createZodDto(ServiceListQuerySchema) {}
