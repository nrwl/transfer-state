import { async, TestBed } from '@angular/core/testing';
import { SharedUiHeaderModule } from './shared-ui-header.module';

describe('SharedUiHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiHeaderModule).toBeDefined();
  });
});
