import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    email: z.string(),
    passwordHash: z.string(),
    role: RoleSchema,
    isVerified: z.boolean(),
    createdAt: z.date(),
    refreshTokens: z.array(z.unknown()),
    passwordResetTokens: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
