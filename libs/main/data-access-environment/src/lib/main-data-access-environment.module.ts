import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { EnvironmentTokenService } from './environment-token.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule
  ],
  providers: [
    EnvironmentTokenService,
    { provide: 'environment', useClass: EnvironmentTokenService }
  ]
})
export class MainDataAccessEnvironmentModule {}
