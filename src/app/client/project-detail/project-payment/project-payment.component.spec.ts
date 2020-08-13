import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPaymentComponent } from './project-payment.component';

describe('ProjectPaymentComponent', () => {
  let component: ProjectPaymentComponent;
  let fixture: ComponentFixture<ProjectPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
