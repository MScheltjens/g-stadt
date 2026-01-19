import { LocaleSchema } from '@invicity/contracts';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LocaleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const rawLocale =
      req.headers['x-locale'] || req.headers['accept-language'] || 'en';
    const parseResult = LocaleSchema.safeParse(rawLocale);
    req.locale = parseResult.success ? parseResult.data : 'en';
    return next.handle();
  }
}
