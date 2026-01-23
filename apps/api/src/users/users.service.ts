import { ROLES } from '@invicity/constants';
import { UserResponse, UserResponseSchema } from '@invicity/contracts';
import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';

import { PrismaService } from '@/db/prisma.service.js';

import { CreateUserDto } from './dto/create-user.dto.js';

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

  async create(data: CreateUserDto): Promise<UserResponse> {
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        role: data.role ?? ROLES.CITIZEN,
      },
    });

    return this.toUserResponse(user);
  }

  private toUserResponse(user: {
    // not using Prisma.User type to avoid importing Prisma Client,
    // creating another userSchema specifically for this purpose is obselete
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
