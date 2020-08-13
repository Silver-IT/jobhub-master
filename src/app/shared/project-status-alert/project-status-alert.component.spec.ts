import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStatusAlertComponent } from './project-status-alert.component';

describe('ProjectStatusAlertComponent', () => {
  let component: ProjectStatusAlertComponent;
  let fixture: ComponentFixture<ProjectStatusAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStatusAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStatusAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
