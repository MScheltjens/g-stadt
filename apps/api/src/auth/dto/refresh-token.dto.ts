import { createZodDto } from 'nestjs-zod';
import { RefreshTokenInputSchema } from '@repo/contracts';

export class RefreshTokenDto extends createZodDto(RefreshTokenInputSchema) {}
