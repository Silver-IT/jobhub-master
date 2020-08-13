import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLeadComponent } from './project-lead.component';

describe('ProjectLeadComponent', () => {
  let component: ProjectLeadComponent;
  let fixture: ComponentFixture<ProjectLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
