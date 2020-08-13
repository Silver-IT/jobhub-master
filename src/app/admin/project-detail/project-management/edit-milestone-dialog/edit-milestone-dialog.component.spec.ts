import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMilestoneDialogComponent } from './edit-milestone-dialog.component';

describe('EditMilestoneDialogComponent', () => {
  let component: EditMilestoneDialogComponent;
  let fixture: ComponentFixture<EditMilestoneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMilestoneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMilestoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
