import { TestBed } from '@angular/core/testing';

import { AnnonGuard } from './annon.guard';

describe('AnnonGuard', () => {
  let guard: AnnonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnnonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
