import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeDialogComponent } from './legal-notice-dialog.component';

describe('LegalNoticeDialogComponent', () => {
  let component: LegalNoticeDialogComponent;
  let fixture: ComponentFixture<LegalNoticeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalNoticeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalNoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
