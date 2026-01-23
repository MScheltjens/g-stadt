import { AuthResponse, JwtPayloadSchema } from '@kwh/contracts';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { CurrentUser } from '@/common/decorators/current-user.decorator.js';
import { Public } from '@/common/decorators/public.decorator.js';

import { AuthService } from './auth.service.js';
import { ChangePasswordDto } from './dto/change-password.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { RefreshTokenDto } from './dto/refresh-token.dto.js';
import { RegisterDto } from './dto/register.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';
import { SignInDto } from './dto/sign-in.dto.js';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @InjectPinoLogger(AuthController.name) private readonly logger: PinoLogger,
  ) {}

  @Public()
  @Post('register')
  async register(@Body() dto: RegisterDto): Promise<AuthResponse> {
    this.logger.info({ email: dto.email }, 'Register endpoint called');
    return this.authService.register(dto);
  }

  /* =========================
     LOGIN
     ========================= */

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: SignInDto): Promise<AuthResponse> {
    this.logger.info({ email: dto.email }, 'Login endpoint called');
    return this.authService.login(dto);
  }

  /* =========================
     REFRESH
     ========================= */

  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Body() dto: RefreshTokenDto): Promise<AuthResponse> {
    this.logger.info('Refresh endpoint called');
    return this.authService.refreshToken(dto.refreshToken);
  }

  /* =========================
     FORGOT PASSWORD
     ========================= */

  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async forgotPassword(@Body() dto: ForgotPasswordDto): Promise<void> {
    this.logger.info({ email: dto.email }, 'Forgot password endpoint called');
    await this.authService.forgotPassword(dto.email);
  }

  /* =========================
     RESET PASSWORD
     ========================= */

  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async resetPassword(@Body() dto: ResetPasswordDto): Promise<void> {
    this.logger.info('Reset password endpoint called');
    await this.authService.resetPassword(dto.token, dto.newPassword);
  }

  /* =========================
     CHANGE PASSWORD
     ========================= */

  @Post('change-password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async changePassword(
    @CurrentUser() user: { id: string },
    @Body() dto: ChangePasswordDto,
  ): Promise<void> {
    this.logger.info({ userId: user.id }, 'Change password endpoint called');
    await this.authService.changePassword(
      user.id,
      dto.currentPassword,
      dto.newPassword,
    );
  }

  /* =========================
     PROFILE
     ========================= */

  @Get('profile')
  async getProfile(@CurrentUser() user: unknown) {
    this.logger.info('Profile endpoint called');
    return JwtPayloadSchema.parse(user);
  }
}
