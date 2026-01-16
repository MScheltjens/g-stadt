import { RefreshTokenInputSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class RefreshTokenDto extends createZodDto(RefreshTokenInputSchema) {}
