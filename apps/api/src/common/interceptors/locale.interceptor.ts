import { DEFAULT_LOCALE, Locale } from '@kwh/constants';
import { LocaleSchema } from '@kwh/contracts';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class LocaleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context
      .switchToHttp()
      .getRequest<Request & { locale?: string }>();

    let rawLocale: string | undefined;

    // 1. Check NEXT_LOCALE cookie
    if (req.cookies && req.cookies.NEXT_LOCALE) {
      rawLocale = req.cookies.NEXT_LOCALE;
    }

    // 2. Fallback to x-locale header
    if (!rawLocale && req.headers['x-locale']) {
      rawLocale = req.headers['x-locale'] as string;
    }

    // 3. Fallback to default
    if (!rawLocale) {
      rawLocale = DEFAULT_LOCALE;
    }

    // Validate locale
    const parseResult = LocaleSchema.safeParse(rawLocale);
    req.locale = parseResult.success
      ? (parseResult.data as Locale)
      : (DEFAULT_LOCALE as Locale);

    return next.handle();
  }
}
