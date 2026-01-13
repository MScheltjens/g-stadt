import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
} from '@nestjs/common';

import { AuthService } from '@/auth/auth.service';
import { Public } from '@/common/decorators/public.decorator';
import { CurrentUser } from '@/common/decorators/current-user.decorator';

import {
  LoginInputSchema,
  RegisterInputSchema,
  AuthResponseSchema,
  JwtUserSchema,
} from '@repo/contracts';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() body: unknown) {
    const input = RegisterInputSchema.parse(body);

    const result = await this.authService.register(input);

    return AuthResponseSchema.parse(result);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: unknown) {
    const input = LoginInputSchema.parse(body);

    const result = await this.authService.login(input);

    return AuthResponseSchema.parse(result);
  }

  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Body() body: unknown) {
    // refresh schema can be added later
    const result = await this.authService.refreshToken(body);

    return AuthResponseSchema.parse(result);
  }

  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logout(@CurrentUser() user: { id: string }) {
    await this.authService.logout(user.id);
  }

  @Get('profile')
  async getProfile(@CurrentUser() user: unknown) {
    // user comes from JWT → validate it
    return JwtUserSchema.parse(user);
  }
}
