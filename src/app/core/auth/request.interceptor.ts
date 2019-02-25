import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const dupReq = req.clone({
      headers: req.headers.set('key', 'DCtbqRXC8L')
    });
    return next.handle(dupReq);
  }
}
