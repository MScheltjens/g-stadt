import type { User, CreateUserDto } from '@repo/types/user';

import { Body, Controller, Post } from '@nestjs/common';

import { db } from '@repo/database';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() dto: CreateUserDto): User {
    return {
      id: crypto.randomUUID(),
      email: dto.email,
    };
  }
}
