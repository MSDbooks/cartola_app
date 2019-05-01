import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class TesteService{

  constructor(
    private _http: HttpClient
  ){}

  public request(){


    const url = '';

    return this._http
            .get<any[]>(url)
            .then(response => response);

  }


}

