
import {  Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { TokenGlobo } from './../model/auth-modal';




@Injectable()
export class AuthService {


    constructor(private http: Http) { }

    getToken(email: string, login: string): Promise<TokenGlobo> {


        let header = new Headers();
        header.append('Content-Type', 'application/json');


        let options = new RequestOptions();
        options.headers = header;
        options.body = "{\"payload\":{\"email\":\"${email}\",\"password\":\"engti2013\",\"serviceId\":438},\"captcha\":\"\"}";
        const url = "https://login.globo.com/api/authentication"

        return this.http
            .post(url,{}, options)
            .toPromise()
            .then(response => response.json());
    }


  /*  ionViewDidLoad() {
        this.storage.ready().then(() => {
            this.storage.get('GLBID').then(GLBID => {
                if (GLBID) {
                    console.log("GLBID: ", GLBID);
                    this.GLBID = GLBID;
                } else {
                    this.startLoginGlobo();
                }
            })
        })
    } */



}
