import { Injectable } from '@angular/core';
import { Http, Headers,  } from '@angular/http';
import 'rxjs/add/operator/toPromise';





@Injectable()
export class FreeService {
    constructor(private http: Http) { }



    getTimesLigaChurrasFaixa():Promise<any>{

        let url = 'api.cartolafc.globo.com/liga/140543/times';
        return this.http
        .get(url, { headers: this.getHeader()})
        .toPromise()
        .then(response => response.json());
    }

    getMercado(): Promise<any>{

      let url = 'https://api.cartolafc.globo.com/atletas/mercado';

      let header = new Headers();
          header.append('Access-Control-Allow-Origin', '*');
          header.append('Content-Type', 'application/json');
          header.append('Cache-Control', 'no-cache');


      return this.http
            .get(url, {headers: header} )
            .toPromise()
            .then(response =>  response.json());

    }



    private getHeader(): Headers
    {

        let header = new Headers();
        header.append('Content-Type', 'application/json');
        header.append('Access-Control-Allow-Origin', '*');
        header.append('Cache-Control', 'no-cache');

        return header;

    }
}

