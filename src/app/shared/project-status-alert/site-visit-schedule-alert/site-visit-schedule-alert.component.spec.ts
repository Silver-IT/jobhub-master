import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitScheduleAlertComponent } from './site-visit-schedule-alert.component';

describe('SiteVisitScheduleAlertComponent', () => {
  let component: SiteVisitScheduleAlertComponent;
  let fixture: ComponentFixture<SiteVisitScheduleAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVisitScheduleAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitScheduleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
