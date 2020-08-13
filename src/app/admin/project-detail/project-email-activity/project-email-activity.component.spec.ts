import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEmailActivityComponent } from './project-email-activity.component';

describe('ProjectEmailsComponent', () => {
  let component: ProjectEmailActivityComponent;
  let fixture: ComponentFixture<ProjectEmailActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEmailActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEmailActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
