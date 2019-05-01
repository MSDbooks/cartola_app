import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Network } from '@ionic-native/network/ngx';

import { AuthenticationInterceptor } from './interceptor/authenticationInterceptor';
import { UserOnlineInterceptor } from './interceptor/userOnlineInterceptor';
import { HttpClientManager } from './httpClientManager';
import { ErrorInterceptor } from './interceptor/errorInterceptor';


@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  entryComponents:[
  ],
  exports: [
  ],
  providers: [
    HttpClientManager,
    Network,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserOnlineInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ]
})
export class HttpClientManagerModule {}
