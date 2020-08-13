import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFinalProposalComponent } from './project-final-proposal.component';

describe('ProjectFinalProposalComponent', () => {
  let component: ProjectFinalProposalComponent;
  let fixture: ComponentFixture<ProjectFinalProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFinalProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFinalProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
