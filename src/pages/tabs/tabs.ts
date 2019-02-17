
import { Component } from '@angular/core';

import { EscalacaoPage } from '../escalacao/escalacao';
import { AjustesPage } from '../ajustes/ajustes';
import { JogadoresPage } from '../jogadores/jogadores';
import { JogosPage } from '../jogos/jogos';
import { TimesPage } from '../times/times';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimesPage;
  tab2Root = JogadoresPage;
  tab3Root = JogosPage;
  tab4Root = EscalacaoPage;
  tab5Root = AjustesPage;




  constructor() {

  }
}
