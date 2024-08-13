import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataInterceptor implements DataInterceptor {
  constructor() {}

  intercept(httpReq: HttpRequest<any>, handler: HttpHandler) {
    let cloneReq = httpReq.clone({
      setHeaders: {
        bDate: '20052004',
      },
    });
    console.log(cloneReq);
    return handler.handle(cloneReq);
  }
}
