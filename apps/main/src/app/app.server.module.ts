import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { TransferState } from '@angular/platform-browser';
import { TRANSFER_STATE_KEY } from '@transfer-state/main/data-access-environment';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {
  constructor(private transferState: TransferState) {
    this.transferState.set(
      TRANSFER_STATE_KEY,
      JSON.stringify({
        apiEndpoint: process.env.API_ENDPOINT,
        num: +process.env.NUM
      })
    );
  }
}
