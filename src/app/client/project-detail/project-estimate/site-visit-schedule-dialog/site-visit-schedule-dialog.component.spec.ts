import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitScheduleDialogComponent } from './site-visit-schedule-dialog.component';

describe('SiteVisitScheduleDialogComponent', () => {
  let component: SiteVisitScheduleDialogComponent;
  let fixture: ComponentFixture<SiteVisitScheduleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVisitScheduleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
