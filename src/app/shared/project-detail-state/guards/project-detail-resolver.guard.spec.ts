import { TestBed } from '@angular/core/testing';

import { ProjectDetailResolverGuard } from './project-detail-resolver.guard';

describe('ProjectDetailResolverGuard', () => {
  let guard: ProjectDetailResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProjectDetailResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
