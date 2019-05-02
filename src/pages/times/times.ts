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
  public content: string;

  constructor(
    public navCtrl: NavController,
    public freeService: FreeService,
    )
     {
        this.times = new Array();
        this.content = 'BUSCAR';
     }


  onInput(ev) {

    if( ev._value && ev._value.length > 3) {

      this.freeService.getBuscarTime(ev._value).then((_times:TimeMiniInfo[])=>{
        this.times = _times;
        console.log(this.times);
      })
      .catch(err=> console.error('Falha ao buscar time ', err))

    }

  }

  addTime(time:TimeMiniInfo ) {

    time.isTimeAdd = !time.isTimeAdd;

  }

}
