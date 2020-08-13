import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTypeFilterComponent } from './schedule-type-filter.component';

describe('ScheduleTypeFilterComponent', () => {
  let component: ScheduleTypeFilterComponent;
  let fixture: ComponentFixture<ScheduleTypeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTypeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
