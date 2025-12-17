import type { CreateUserDto, UserResponse } from '@repo/types/user';

import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() dto: CreateUserDto): UserResponse {
    return {
      id: crypto.randomUUID(),
      email: dto.email,
      createdAt: new Date(),
    };
  }
}
