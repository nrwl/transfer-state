import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AppComponent } from './app.component';
import { MainDataAccessEnvironmentModule } from '@transfer-state/main/data-access-environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NxModule.forRoot(),
    BrowserTransferStateModule,
    MainDataAccessEnvironmentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
