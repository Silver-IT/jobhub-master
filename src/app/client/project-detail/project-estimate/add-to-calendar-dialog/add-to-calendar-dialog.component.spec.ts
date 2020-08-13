import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCalendarDialogComponent } from './add-to-calendar-dialog.component';

describe('AddToCalendarDialogComponent', () => {
  let component: AddToCalendarDialogComponent;
  let fixture: ComponentFixture<AddToCalendarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCalendarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCalendarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
