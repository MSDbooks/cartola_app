
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EscalacaoPage } from '../escalacao/escalacao';
import { AjustesPage } from '../ajustes/ajustes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = EscalacaoPage;
  tab5Root = AjustesPage;
  



  constructor() {

  }
}
