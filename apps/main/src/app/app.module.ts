import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { MainDataAccessEnvironmentModule } from '@transfer-state/main/data-access-environment';
import { AppComponent } from './app.component';
import { BlahComponent } from './blah/blah.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, BlahComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NxModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'blah', component: BlahComponent }
    ]),
    BrowserTransferStateModule,
    MainDataAccessEnvironmentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
