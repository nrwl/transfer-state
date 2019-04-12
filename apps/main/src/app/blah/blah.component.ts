import { Component, OnInit, Inject } from '@angular/core';
import {
  Environment,
  ENVIRONMENT
} from '@transfer-state/main/data-access-environment';

@Component({
  selector: 'transfer-state-blah',
  templateUrl: './blah.component.html',
  styleUrls: ['./blah.component.css']
})
export class BlahComponent implements OnInit {
  constructor(@Inject(ENVIRONMENT) private env: Environment) {
    console.log('----->in blah', this.env);
  }

  ngOnInit() {}
}
