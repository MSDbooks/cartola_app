import { Network } from '@ionic-native/network/ngx';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Platform } from 'ionic-angular';

export class HttpClientManager {


  constructor(
    private network: Network,
    private httpClient: HttpClient,
    private platform: Platform
  ){}

  public get<T>(
    url: string,
    options?: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams;
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Promise<T> {

    if (this.notContainsInternetConnection()) {
        return Promise.reject(new HttpErrorResponse({ error: 'Sem internet' }));
    }

    const result = this.httpClient.get<T>(url, options).toPromise();
    result.catch((error) => {

    });

    return result;
}

public post<T>(
    url: string,
    body: any,
    options?: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams;
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Promise<T> {

    if (this.notContainsInternetConnection()) {
        return Promise.reject(new HttpErrorResponse({ error: 'Sem internet' }));
    }


    const result = this.httpClient.post<T>(url, body, options).toPromise();

    result.catch((error) => {

    });

    return result;
}

private notContainsInternetConnection():boolean {


    if(!this.platform.is("cordova")){
      return false;
    }

    if (this.platform.is('core') || this.platform.is('mobilewb')) {
        return false;
    }

    if (!this.network.type || this.network.type === 'unknown'
        || this.network.type === 'none'
        ) {
        return true;
    }
    else {
        return false;
    }

}


}
