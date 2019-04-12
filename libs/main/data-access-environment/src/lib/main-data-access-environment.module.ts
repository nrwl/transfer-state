import { TRANSFER_STATE_KEY } from './transfer-state-key';
import { ENVIRONMENT } from './environment.token';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
  TransferState
} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule
  ],
  providers: [
    {
      provide: ENVIRONMENT,
      useFactory: (transferState: TransferState) => {
        const env = transferState.get(TRANSFER_STATE_KEY, '');

        if (env === '') {
          throw new Error('Environment not provided');
        }

        return JSON.parse(env);
      },
      deps: [TransferState]
    }
  ]
})
export class MainDataAccessEnvironmentModule {}
