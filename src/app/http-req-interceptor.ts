import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpResponse,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment'
import { tap } from 'rxjs/operators';
@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let modifiedReq = req.clone({});
        modifiedReq = modifiedReq.clone({
            setHeaders: {
                // 'Authorization': environment.pexelsApiKey
            }
        });
        return next.handle(modifiedReq).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
}
        }));
    }
}