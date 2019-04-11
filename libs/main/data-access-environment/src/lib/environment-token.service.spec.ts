import { TestBed } from '@angular/core/testing';

import { EnvironmentTokenService } from './environment-token.service';

describe('EnvironmentTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentTokenService = TestBed.get(EnvironmentTokenService);
    expect(service).toBeTruthy();
  });
});
