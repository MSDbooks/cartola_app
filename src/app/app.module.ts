import { TimesPage } from './../pages/times/times';
import { JogosPage } from './../pages/jogos/jogos';
import { JogadoresPage } from './../pages/jogadores/jogadores';
import { EscalacaoPage } from './../pages/escalacao/escalacao';
import { AjustesPage } from './../pages/ajustes/ajustes';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../../app/service/authService';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FreeService } from '../../app/service/free.service';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credentials';

import { HttpClientManagerModule } from '../../app/modules/httpClientManager/httpClientManager.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AjustesPage,
    EscalacaoPage,
    JogadoresPage,
    JogosPage,
    TimesPage,

  ],
  imports: [
    HttpClientManagerModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AjustesPage,
    EscalacaoPage,
    JogadoresPage,
    JogosPage,
    TimesPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    FreeService,
    InAppBrowser
  ]
})
export class AppModule {}
