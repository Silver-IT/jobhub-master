import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIconComponent } from './schedule-icon.component';

describe('ScheduleIconComponent', () => {
  let component: ScheduleIconComponent;
  let fixture: ComponentFixture<ScheduleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
