import { MERCADO } from './../../../app/model/free-modal';
import { FreeService } from './../../../app/service/free.service';
import { AuthService } from './../../../app/service/authService';

import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { InAppBrowser, InAppBrowserOptions, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { RequestOptions, Http, Headers } from '@angular/http';

import { TokenGlobo } from '../../../app/model/auth-modal';


@Component({
  selector: 'page-escalacao',
  templateUrl: 'escalacao.html',
})
export class EscalacaoPage {

  mercado: MERCADO;
  escalacao = 'time';
  GLBID: string;
  browser: any;
  login: boolean;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
   public auth: AuthService,
    private iab: InAppBrowser,
    public freeService: FreeService,
    private http: Http,
    public toastCtrl: ToastController
  )
  {
    this.freeService.getStatusMercado().then((result)=>{
      console.log(result);
    });
    const userToken = JSON.parse(localStorage.getItem('token')) as TokenGlobo;

    if(userToken){
      this.login = true;
    }

    // this.freeService.getMercado().then(response =>
    //   {
    //     console.warn(response);
    //   })
    //   .catch(err =>
    //     {
    //       console.warn(err);
    //     })

   //this.auth.startLoginGlobo();

  }

  open() {

    let options: InAppBrowserOptions = {
      location: 'yes',//Or 'no'
      hidden: 'yes', //Or  'yes'
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',//Android only ,shows browser zoom controls
      hardwareback: 'yes',
      mediaPlaybackRequiresUserAction: 'no',
      shouldPauseOnSuspend: 'no', //Android only
      closebuttoncaption: 'Close', //iOS only
      disallowoverscroll: 'no', //iOS only
      toolbar: 'yes', //iOS only
      enableViewportScale: 'no', //iOS only
      allowInlineMediaPlayback: 'no',//iOS only
      presentationstyle: 'pagesheet',//iOS only
      fullscreen: 'yes',//Windows only
    };

    let target = "_self";
    let open = this.iab.create(encodeURI(
      'https://login.globo.com/login/438'),
       target,
       options
      );


    open.on("loadstart").subscribe(event => {
      console.log("loadstart -->", event);
    }, err => {
      console.log("InAppBrowser loadstart Event Error: " + err);
    });


    open.on("loadstop").subscribe(event => {
      console.log("loadstop -->", event);
    }, err => {
      console.log("InAppBrowser loadstop Event Error: " + err);
    });

    open.on("loaderror").subscribe(event => {
      console.log("loaderror -->", event);
    }, err => {
      console.log("InAppBrowser loaderror Event Error: " + err);
    });

  }

  openII(){
    this.auth.getToken('marcelo.santos@gep.com.br','engti2013')
    .then(response=>{

      console.warn('Token: ', response);
      if(response.id === 'Authenticated')
      {
        localStorage.setItem('token', JSON.stringify(response));
        this.login = !this.login;
      }


    })
    .catch(error=>{

      let objErro = JSON.parse(error._body) as TokenGlobo;

      if(objErro.id === 'BadCredentials'){

        this.showToast(objErro.userMessage, 5000, 'danger-alert');
      }

    })
  }


  getTimesLigaChurrasFaixa(){

  }

  startLoginGlobo() {
    this.browser = this.iab.create('https://login.globo.com/login/438', '_blank', { hidden: 'yes' });
    this.browser.on("loadstart").subscribe(event => this.handleOnLoadStart(event));
    this.browser.on("loadstop").subscribe(event => this.handleOnLoadStop(event));
    this.browser.on("exit").subscribe(event => this.handleOnExit(event));
}

private handleOnExit(event: InAppBrowserEvent) {
    this.getCartolaData();
}

private handleOnLoadStart(event: InAppBrowserEvent) {
    console.log("handleOnLoadStart");
}

private handleOnLoadStop(event: InAppBrowserEvent) {
    this.browser.show();

    setInterval(() => {
        this.browser.executeScript({ code: `document.cookie` })
            .then(args => {
                if (args[0]) {
                    var cookie = args[0];
                    var name = "GLBID=";
                    var decodedCookie = decodeURIComponent(cookie);
                    var ca = decodedCookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') {
                            c = c.substring(1);
                        }
                        if (c.indexOf(name) == 0) {
                            this.GLBID = c.substring(name.length, c.length);
                           localStorage.set('GLBID', this.GLBID);
                            this.browser.close();
                        }
                    }
                }
            });
    }, 1000);
}

getCartolaData() {
    var headers = new Headers();
    headers.append("X-GLB-Token", this.GLBID);

    let options = new RequestOptions({ headers: headers });

    this.http.get("https://api.cartolafc.globo.com/auth/time", options)
        .subscribe(data => {
            console.log("ok");
            console.log(data['_body']);
        }, error => {
            console.log("erro");
            console.log(error);// Error getting the data
        });
}

public showToast(mensagem: string, duracao: number = 3000, _cssClass: string = "default-alert"){

  const toast = this.toastCtrl.create({
    message: mensagem,
    duration: duracao,
    position: "bottom",
    cssClass: _cssClass
  });
  toast.present();

}


}
