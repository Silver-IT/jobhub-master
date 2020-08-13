import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionScheduleUpdateDialogComponent } from './construction-schedule-update-dialog.component';

describe('ConstructionScheduleUpdateDialogComponent', () => {
  let component: ConstructionScheduleUpdateDialogComponent;
  let fixture: ComponentFixture<ConstructionScheduleUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionScheduleUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionScheduleUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
