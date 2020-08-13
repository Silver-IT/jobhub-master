import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotPickerComponent } from './time-slot-picker.component';

describe('TimeSlotPickerComponent', () => {
  let component: TimeSlotPickerComponent;
  let fixture: ComponentFixture<TimeSlotPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSlotPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSlotPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
