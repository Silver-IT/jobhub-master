import { TestBed } from '@angular/core/testing';

import { EstimateGuard } from './estimate.guard';

describe('EstimateGuard', () => {
  let guard: EstimateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstimateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
