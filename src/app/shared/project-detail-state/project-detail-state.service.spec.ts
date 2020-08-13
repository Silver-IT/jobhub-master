import { TestBed } from '@angular/core/testing';

import { ProjectDetailStateService } from './project-detail-state.service';

describe('ProjectDetailStateService', () => {
  let service: ProjectDetailStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDetailStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
