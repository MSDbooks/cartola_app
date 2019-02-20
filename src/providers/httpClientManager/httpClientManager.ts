import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";

import { Platform } from 'ionic-angular';

import { Network } from "@ionic-native/network/ngx";
import { LoggingService } from 'loggerservice';


@Injectable()
export class HttpClientManager {

    constructor(
        private httpClient: HttpClient,
        private loggerService: LoggingService,
        private network: Network,
        private platform: Platform) {
    }

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
            // const newLog = new LogEntry();
            // newLog.error = error;
            // this.loggerService.log(newLog);
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
            // const newLog = new LogEntry();
            // newLog.error = error;
            // this.loggerService.log(newLog);
        });

        return result;
    }

    private notContainsInternetConnection() {
        if (this.platform.is('core') || this.platform.is('mobilewb')) {
            return;
        }

        if (this.network.type === 'unknown'
            || this.network.type === 'none'
            || !this.network.type) {
            return true;
        }
        else {
            return false;
        }
    }
}
