import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Environment } from './environment.interface';
import { TRANSFER_STATE_KEY } from './transfer-state-key';

@Injectable()
export class EnvironmentTokenService implements Environment {
  apiEndpoint: string;

  constructor(private stateTransfer: TransferState) {
    this.apiEndpoint = this.stateTransfer.get(TRANSFER_STATE_KEY, 'FAIL.');
  }
}
