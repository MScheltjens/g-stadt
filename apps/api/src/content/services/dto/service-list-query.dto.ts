import { createZodDto } from 'nestjs-zod';
import { ServiceListQuerySchema } from '@repo/contracts';

export class ServiceListQueryDto extends createZodDto(ServiceListQuerySchema) {}
