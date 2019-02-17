import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
            .do((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                    if (!ev.ok) {
                        return Observable.throw(new HttpErrorResponse({ error: ev }));
                    }
                }
            });
    }
}
