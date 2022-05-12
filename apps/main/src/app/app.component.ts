import { Component, Inject } from '@angular/core';
import {
  EnvironmentTokenService,
  ENVIRONMENT,
  Environment
} from '@transfer-state/main/data-access-environment';

@Component({
  selector: 'transfer-state-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(@Inject(ENVIRONMENT) private env: Environment) {
    console.log('----->', this.env);
    this.title = this.env.apiEndpoint;
  }
}
