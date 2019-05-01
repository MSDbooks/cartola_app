import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FreeService } from '../../../app/service/free.service';
import { TimeMiniInfo } from '../../models/TimeMiniInfo';

@Component({
  selector: 'page-times',
  templateUrl: 'times.html'
})
export class TimesPage {

  public times: TimeMiniInfo[];

  constructor(
    public navCtrl: NavController,
    public freeService: FreeService,
    )
     {
        this.times = new Array();
     }


  onInput(ev) {

    if( ev._value) {

      this.freeService.getBuscarTime(ev._value).then((_times:TimeMiniInfo[])=>{
        this.times = _times;
        console.log(this.times);
      })
      .catch(err=> console.error('Falha ao buscar time ', err))

    }

  }

}
