import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchInputComponent } from './admin-search-input.component';

describe('AdminSearchInputComponent', () => {
  let component: AdminSearchInputComponent;
  let fixture: ComponentFixture<AdminSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
