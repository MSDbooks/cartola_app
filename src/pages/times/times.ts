import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FreeService } from '../../../app/service/free.service';

@Component({
  selector: 'page-times',
  templateUrl: 'times.html'
})
export class TimesPage {

  constructor(
    public navCtrl: NavController,
    public freeService: FreeService,
    ) {

  }


  onInput(ev) {

    if( ev._value) {

      this.freeService.getBuscarTime(ev._value).then(time=>{
        console.log(time);
      })

    }

  }

}
