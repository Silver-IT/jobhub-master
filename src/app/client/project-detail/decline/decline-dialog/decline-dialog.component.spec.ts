import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineDialogComponent } from './decline-dialog.component';

describe('DeclineDialogComponent', () => {
  let component: DeclineDialogComponent;
  let fixture: ComponentFixture<DeclineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeclineDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
