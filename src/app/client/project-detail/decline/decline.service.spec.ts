import { TestBed } from '@angular/core/testing';

import { DeclineService } from './decline.service';

describe('DeclineService', () => {
  let service: DeclineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
