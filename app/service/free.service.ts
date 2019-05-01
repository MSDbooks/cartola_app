import { Injectable } from '@angular/core';
import { Http, Headers,  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClientManager } from '../modules/httpClientManager/httpClientManager';
import { Utils } from './../utils/Utils.func';





@Injectable()
export class FreeService {
    constructor(private httpClientManager: HttpClientManager) { }



    getMercado(): Promise<any>{

      const url = `${Utils.getBaseUrl()}/mercado`;

          return this.httpClientManager
            .get(url)
            .then(response => { return response } );

    }

    /** Status do mercado. */
    getStatusMercado(): Promise<any>{

      const url = `${Utils.getBaseUrl()}/mercado/status`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

    /** Próximas partidas do campeonato. */
    getpartidasCampeonato(): Promise<any>{

      const url = `${Utils.getBaseUrl()}/partidas`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

    /** Partidas da rodada. */
    getPartidasRodada(idRodada: string ): Promise<any>{

      const url = `${Utils.getBaseUrl()}/partidas/${idRodada}`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

    /** Lista de clubes. */
    getClubes(): Promise<any>{

      const url = `${Utils.getBaseUrl()}/clubes`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

    /** Pontuação da rodada em andamento. */
    getPontuados(): Promise<any>{

      const url = `${Utils.getBaseUrl()}/atletas/pontuados`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

    /** Time que mais pontuou na rodada anterior. */
    getDestaques(): Promise<any>{

      const url = `${Utils.getBaseUrl()}/pos-rodada/destaques`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

    /** Busca geral de times, vai retornar info do time e o slug. */
    getBuscarTime(param: string): Promise<any>{

      const url = `${Utils.getBaseUrl()}/times?q=${param}`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

    /** Busca informações de um time específico, usar o slug do time. */
    getInfoTime(slug: string): Promise<any>{

      const url = `${Utils.getBaseUrl()}/time/slug/${slug}`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

    /** Busca informações de um time específico por rodada, usar o slug do time e o número da rodada. */
    getInfoTimeRodada(slug: string, rodada: string): Promise<any>{

      const url = `${Utils.getBaseUrl()}/time/slug/${slug}/${rodada}`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }


    /** Busca informações de uma liga específica, usar o slug da liga. */
    getInfoLiga(slug: string): Promise<any>{

      const url = `${Utils.getBaseUrl()}/auth/liga/${slug}`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

    }

     /** Busca geral de ligas, para consultar uma liga específica. */
     getLigas(nomeLiga: string): Promise<any>{

      const url = `${Utils.getBaseUrl()}/ligas?q=${nomeLiga}`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

     }

     /** Retornar todas as ligas do usuário logado. */
     getLigasUsuario(): Promise<any>{

      const url = `${Utils.getBaseUrl()}/auth/ligas`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

     }

    /** Lista os esquemas táticos (4-3-3) etc... */
    getEsquemaTatico(): Promise<any>{

      const url = `${Utils.getBaseUrl()}/esquemas`;

        return this.httpClientManager
          .get(url)
          .then(response => { return response } );

     }


      /** Enviar um POST para esse endpoint. */
    postsalvarTime(body): Promise<any>{

      const url = `${Utils.getBaseUrl()}/esquemas`;

        return this.httpClientManager
          .post(url, JSON.stringify(body))
          .then(response => { return response } );

          // [
          //   "esquema": 3,
          //   "atleta": [
          //     37788,
          //     71116,
          //     39152,
          //     50427,
          //     87225,
          //     62009,
          //     81682,
          //     87863,
          //     78435,
          //     68930,
          //     90651,
          //     62136
          //   ]
          // ]

     }





}

