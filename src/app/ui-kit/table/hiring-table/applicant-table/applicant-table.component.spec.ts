import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantTableComponent } from './applicant-table.component';

describe('ApplicantTableComponent', () => {
  let component: ApplicantTableComponent;
  let fixture: ComponentFixture<ApplicantTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
