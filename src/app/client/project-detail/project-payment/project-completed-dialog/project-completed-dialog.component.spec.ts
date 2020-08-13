import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCompletedDialogComponent } from './project-completed-dialog.component';

describe('ProjectCompletedDialogComponent', () => {
  let component: ProjectCompletedDialogComponent;
  let fixture: ComponentFixture<ProjectCompletedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCompletedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCompletedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
