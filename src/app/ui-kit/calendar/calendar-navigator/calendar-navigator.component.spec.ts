import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarNavigatorComponent } from './calendar-navigator.component';

describe('CalendarNavigatorComponent', () => {
  let component: CalendarNavigatorComponent;
  let fixture: ComponentFixture<CalendarNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
