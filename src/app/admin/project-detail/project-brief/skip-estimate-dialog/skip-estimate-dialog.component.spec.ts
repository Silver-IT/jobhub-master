import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipEstimateDialogComponent } from './skip-estimate-dialog.component';

describe('SkipEstimateDialogComponent', () => {
  let component: SkipEstimateDialogComponent;
  let fixture: ComponentFixture<SkipEstimateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipEstimateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipEstimateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
