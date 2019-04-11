import { Component, Inject } from '@angular/core';
import {
  Environment,
  ENVIRONMENT
} from '@transfer-state/main/data-access-environment';

@Component({
  selector: 'transfer-state-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = '';
  constructor(@Inject(ENVIRONMENT) private env: Environment) {
    this.title = this.env.apiEndpoint;
  }
}
