import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientManager } from './httpClientManager';
import { DefaultInterceptor } from './interceptor/defaultInterceptor';
import { Network } from '@ionic-native/network/ngx';

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
      useClass: DefaultInterceptor,
      multi: true
    },

  ]
})
export class HttpClientManagerModule {}
