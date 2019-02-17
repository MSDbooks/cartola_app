import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { TokenGlobo } from "./../../../model/auth-modal";


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!req.headers.has('Authorization')) {

            const userToken = JSON.parse(localStorage.getItem('token')) as TokenGlobo ;
            if (userToken) {
                const token = "Bearer " + userToken.glbId;
                req = req.clone({
                    setHeaders: {
                        'X-GLB-Token': token
                    }});
            }
        }

        req = req.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache'
            }
          });

        return next.handle(req);
    }
}
