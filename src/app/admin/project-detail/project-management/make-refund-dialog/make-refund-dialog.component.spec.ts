import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeRefundDialogComponent } from './make-refund-dialog.component';

describe('MakeRefundDialogComponent', () => {
  let component: MakeRefundDialogComponent;
  let fixture: ComponentFixture<MakeRefundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeRefundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeRefundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
