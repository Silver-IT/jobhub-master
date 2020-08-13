import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateScheduleComponent } from './estimate-schedule.component';

describe('EstimateScheduleComponent', () => {
  let component: EstimateScheduleComponent;
  let fixture: ComponentFixture<EstimateScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
