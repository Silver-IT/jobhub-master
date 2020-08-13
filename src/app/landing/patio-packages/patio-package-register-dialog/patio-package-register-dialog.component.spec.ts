import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatioPackageRegisterDialogComponent } from './patio-package-register-dialog.component';

describe('PatioPackageRegisterDialogComponent', () => {
  let component: PatioPackageRegisterDialogComponent;
  let fixture: ComponentFixture<PatioPackageRegisterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatioPackageRegisterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatioPackageRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
