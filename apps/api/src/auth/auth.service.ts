import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  AuthResponse,
  AuthResponseSchema,
  AuthUserSchema,
  LoginInput,
  RegisterInput,
} from '@repo/contracts';
import { PrismaService } from '@/content/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  /* =========================
     REGISTER
     ========================= */

  async register(input: RegisterInput): Promise<AuthResponse> {
    const existing = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (existing) {
      throw new ConflictException('User with this email already exists');
    }

    const passwordHash = await bcrypt.hash(input.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        passwordHash,
        role: 'CITIZEN',
      },
    });

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

  async login(input: LoginInput): Promise<AuthResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const valid = await bcrypt.compare(input.password, user.passwordHash);

    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }

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
    try {
      const payload = this.jwtService.verify(oldRefreshToken, {
        secret: process.env.JWT_REFRESH_SECRET!,
      });

      const stored = await this.prisma.refreshToken.findFirst({
        where: {
          userId: payload.sub,
          expiresAt: { gt: new Date() },
        },
        include: { user: true },
      });

      if (!stored) {
        throw new UnauthorizedException();
      }

      const valid = await bcrypt.compare(oldRefreshToken, stored.tokenHash);

      if (!valid) {
        throw new UnauthorizedException();
      }

      await this.prisma.refreshToken.delete({
        where: { id: stored.id },
      });

      const tokens = await this.generateTokens(stored.user);

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
      throw new UnauthorizedException('Invalid token');
    }
  }

  /* =========================
     LOGOUT
     ========================= */

  async logout(userId: string): Promise<void> {
    await this.prisma.refreshToken.deleteMany({
      where: { userId },
    });
  }

  /* =========================
     FORGOT PASSWORD
     ========================= */

  async forgotPassword(email: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // Do NOT leak whether the user exists
    if (!user) {
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

    // TODO: send email
    // https://yourapp/reset-password?token=${token}
  }

  /* =========================
     RESET PASSWORD (TOKEN)
     ========================= */

  async resetPassword(token: string, newPassword: string): Promise<void> {
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
  }

  /* =========================
     CHANGE PASSWORD
     ========================= */

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const valid = await bcrypt.compare(currentPassword, user.passwordHash);

    if (!valid) {
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
      secret: process.env.JWT_REFRESH_SECRET!,
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
