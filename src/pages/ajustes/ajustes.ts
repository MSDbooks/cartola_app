import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  foto: String = "";
  Text: String = "Olha";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  )
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }




  presentAlert(text: string, ) {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: text,
      buttons: ['Ok']
    });
    alert.present();
  }

}
