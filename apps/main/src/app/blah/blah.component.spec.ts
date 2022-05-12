import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlahComponent } from './blah.component';

describe('BlahComponent', () => {
  let component: BlahComponent;
  let fixture: ComponentFixture<BlahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
