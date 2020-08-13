import { TestBed } from '@angular/core/testing';

import { ProposalGuard } from './proposal.guard';

describe('ProposalGuard', () => {
  let guard: ProposalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProposalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
