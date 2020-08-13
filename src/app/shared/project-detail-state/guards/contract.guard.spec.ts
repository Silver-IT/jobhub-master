import { TestBed } from '@angular/core/testing';

import { ContractGuard } from './contract.guard';

describe('ContractGuard', () => {
  let guard: ContractGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContractGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
