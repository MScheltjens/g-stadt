import { Injectable } from '@nestjs/common';
import { UserResponse, UserResponseSchema } from '@repo/contracts';
import { Role } from '@repo/constants';
import { PrismaService } from '@/content/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserResponse | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    return this.toUserResponse(user);
  }

  async findById(id: string): Promise<UserResponse | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) return null;

    return this.toUserResponse(user);
  }

  async create(data: {
    email: string;
    passwordHash: string;
    role?: Role;
  }): Promise<UserResponse> {
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        role: data.role ?? 'CITIZEN',
      },
    });

    return this.toUserResponse(user);
  }

  private toUserResponse(user: {
    id: string;
    email: string;
    role: Role;
    isVerified: boolean;
    createdAt: Date;
  }): UserResponse {
    return UserResponseSchema.parse({
      id: user.id,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
      createdAt: user.createdAt.toISOString(),
    });
  }
}
