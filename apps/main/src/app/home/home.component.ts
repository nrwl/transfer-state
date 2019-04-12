import { Component, OnInit, Inject } from '@angular/core';
import {
  Environment,
  ENVIRONMENT
} from '@transfer-state/main/data-access-environment';

@Component({
  selector: 'transfer-state-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(ENVIRONMENT) private env: Environment) {
    console.log('----->in home', this.env);
  }

  ngOnInit() {}
}
