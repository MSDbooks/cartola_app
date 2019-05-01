import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { TokenGlobo } from "../../../../app/model/auth-modal";


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!req.headers.has('Authorization')) {

            const userToken_str = localStorage.getItem('token');
            if (userToken_str) {

                const token = JSON.parse(userToken_str) as TokenGlobo;

                req = req.clone({
                    setHeaders: {
                        'Authorization': token.glbId
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
