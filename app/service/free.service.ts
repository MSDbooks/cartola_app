import { Injectable } from '@angular/core';
import { Http, Headers,  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClientManager } from '../modules/httpClientManager/httpClientManager';
import { Utils } from './../utils/Utils.func';





@Injectable()
export class FreeService {
    constructor(private httpClientManager: HttpClientManager) { }



    getTimesLigaChurrasFaixa():Promise<any>{

        let url = 'api.cartolafc.globo.com/liga/140543/times';
        return this.httpClientManager
        .get(url)
        .then(response => { return response } );
    }

    getMercado(): Promise<any>{

      let url = 'https://api.cartolafc.globo.com/atletas/mercado';

      let header = new Headers();
          header.append('Access-Control-Allow-Origin', '*');
          header.append('Content-Type', 'application/json');
          header.append('Cache-Control', 'no-cache');


          return this.httpClientManager
            .get(url )
            .then(response => { return response } );

    }

    getStatusMercado(): Promise<any>{

      let url = `${Utils.getBaseUrl()}/status`;
      url

      let header = new Headers();
          header.append('Access-Control-Allow-Origin', '*');
          header.append('Content-Type', 'application/json');
          header.append('Cache-Control', 'no-cache');


          return this.httpClientManager
            .get(url )
            .then(response => { return response } );

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

