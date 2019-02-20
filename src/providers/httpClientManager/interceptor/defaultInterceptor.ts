import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!req.headers.has('Authorization')) {
            // const user = UsuarioService.getCurrentUser();
            // if (user) {
            //     const token = "Bearer " + user.access_token;
            //     req = req.clone({
            //         setHeaders: {
            //             'Authorization': token
            //         }});
            // }
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
