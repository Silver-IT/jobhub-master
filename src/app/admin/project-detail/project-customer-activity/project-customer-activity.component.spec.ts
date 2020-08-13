import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCustomerActivityComponent } from './project-customer-activity.component';

describe('ProjectCustomerActivityComponent', () => {
  let component: ProjectCustomerActivityComponent;
  let fixture: ComponentFixture<ProjectCustomerActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCustomerActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCustomerActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
