import { ROLES } from '@kwh/constants';
import {
  AuthResponse,
  AuthResponseSchema,
  AuthUserSchema,
  RegisterInput,
  SignInInput,
} from '@kwh/contracts';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { PrismaService } from '@/db/prisma.service.js';
import { getEnv } from '@/lib/env.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    @InjectPinoLogger(AuthService.name) private readonly logger: PinoLogger,
  ) {}

  /* =========================
     REGISTER
     ========================= */

  async register(
    input: Omit<RegisterInput, 'confirmPassword'>,
  ): Promise<AuthResponse> {
    this.logger.info({ email: input.email }, 'Attempting user registration');
    const existing = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (existing) {
      this.logger.warn(
        { email: input.email },
        'Registration failed: user exists',
      );
      throw new ConflictException('User with this email already exists');
    }

    const passwordHash = await bcrypt.hash(input.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        passwordHash,
        role: ROLES.CITIZEN,
      },
    });

    this.logger.info({ userId: user.id }, 'User registered successfully');
    const tokens = await this.generateTokens(user);

    return AuthResponseSchema.parse({
      user: AuthUserSchema.parse({
        id: user.id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      }),
      tokens,
    });
  }

  /* =========================
     LOGIN
     ========================= */

  async login(input: SignInInput): Promise<AuthResponse> {
    this.logger.info({ email: input.email }, 'Login attempt');
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!user) {
      this.logger.warn({ email: input.email }, 'Login failed: user not found');
      throw new UnauthorizedException('Invalid credentials');
    }

    const valid = await bcrypt.compare(input.password, user.passwordHash);

    if (!valid) {
      this.logger.warn(
        { email: input.email },
        'Login failed: invalid password',
      );
      throw new UnauthorizedException('Invalid credentials');
    }

    this.logger.info({ userId: user.id }, 'Login successful');
    const tokens = await this.generateTokens(user);

    return AuthResponseSchema.parse({
      user: AuthUserSchema.parse({
        id: user.id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      }),
      tokens,
    });
  }

  /* =========================
     REFRESH TOKEN
     ========================= */

  async refreshToken(oldRefreshToken: string): Promise<AuthResponse> {
    this.logger.info('Refresh token attempt');
    try {
      const payload = this.jwtService.verify(oldRefreshToken, {
        secret: getEnv().JWT_REFRESH_SECRET,
      });

      const stored = await this.prisma.refreshToken.findFirst({
        where: {
          userId: payload.sub,
          expiresAt: { gt: new Date() },
        },
        include: { user: true },
      });

      if (!stored) {
        this.logger.warn(
          { userId: payload.sub },
          'Refresh token failed: not found or expired',
        );
        throw new UnauthorizedException();
      }

      const valid = await bcrypt.compare(oldRefreshToken, stored.tokenHash);

      if (!valid) {
        this.logger.warn(
          { userId: payload.sub },
          'Refresh token failed: invalid token',
        );
        throw new UnauthorizedException();
      }

      await this.prisma.refreshToken.delete({
        where: { id: stored.id },
      });

      const tokens = await this.generateTokens(stored.user);

      this.logger.info({ userId: stored.user.id }, 'Refresh token successful');
      return AuthResponseSchema.parse({
        user: AuthUserSchema.parse({
          id: stored.user.id,
          email: stored.user.email,
          role: stored.user.role,
          isVerified: stored.user.isVerified,
        }),
        tokens,
      });
    } catch {
      this.logger.warn('Refresh token failed: invalid token');
      throw new UnauthorizedException('Invalid token');
    }
  }

  /* =========================
     LOGOUT
     ========================= */

  async logout(userId: string): Promise<void> {
    this.logger.info({ userId }, 'Logout attempt');
    await this.prisma.refreshToken.deleteMany({
      where: { userId },
    });
    this.logger.info({ userId }, 'Logout successful');
  }

  /* =========================
     FORGOT PASSWORD
     ========================= */

  async forgotPassword(email: string): Promise<void> {
    this.logger.info({ email }, 'Forgot password attempt');
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // Do NOT leak whether the user exists
    if (!user) {
      this.logger.info({ email }, 'Forgot password: user not found');
      return;
    }

    const token = crypto.randomUUID();
    const tokenHash = await bcrypt.hash(token, 10);

    await this.prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      },
    });

    this.logger.info({ userId: user.id }, 'Forgot password token created');
    // TODO: send email
    // https://yourapp/reset-password?token=${token}
  }

  /* =========================
     RESET PASSWORD (TOKEN)
     ========================= */

  async resetPassword(token: string, newPassword: string): Promise<void> {
    this.logger.info('Reset password attempt');
    const tokens = await this.prisma.passwordResetToken.findMany({
      where: {
        expiresAt: { gt: new Date() },
      },
      include: { user: true },
    });

    const match = await Promise.all(
      tokens.map(async (t) => ({
        token: t,
        valid: await bcrypt.compare(token, t.tokenHash),
      })),
    ).then((r) => r.find((x) => x.valid));

    if (!match) {
      this.logger.warn('Reset password failed: invalid or expired token');
      throw new UnauthorizedException('Invalid or expired token');
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: match.token.userId },
        data: { passwordHash },
      }),
      this.prisma.passwordResetToken.delete({
        where: { id: match.token.id },
      }),
      this.prisma.refreshToken.deleteMany({
        where: { userId: match.token.userId },
      }),
    ]);
    this.logger.info(
      { userId: match.token.userId },
      'Password reset successfully',
    );
  }

  /* =========================
     CHANGE PASSWORD
     ========================= */

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ): Promise<void> {
    this.logger.info({ userId }, 'Change password attempt');
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      this.logger.warn({ userId }, 'Change password failed: user not found');
      throw new UnauthorizedException();
    }

    const valid = await bcrypt.compare(currentPassword, user.passwordHash);

    if (!valid) {
      this.logger.warn(
        { userId },
        'Change password failed: invalid current password',
      );
      throw new UnauthorizedException('Invalid password');
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: userId },
        data: { passwordHash },
      }),
      this.prisma.refreshToken.deleteMany({
        where: { userId },
      }),
    ]);
    this.logger.info({ userId }, 'Password changed successfully');
  }

  /* =========================
     TOKEN GENERATION
     ========================= */

  private async generateTokens(user: {
    id: string;
    email: string;
    role: string;
  }): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: getEnv().JWT_REFRESH_SECRET,
      expiresIn: '7d',
    });

    await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: await bcrypt.hash(refreshToken, 10),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return { accessToken, refreshToken };
  }
}
