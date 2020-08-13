import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressAutoCompleteInputComponent } from './address-auto-complete-input.component';

describe('AddressAutoCompleteInputComponent', () => {
  let component: AddressAutoCompleteInputComponent;
  let fixture: ComponentFixture<AddressAutoCompleteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressAutoCompleteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressAutoCompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
