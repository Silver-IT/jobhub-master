import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAccountComponent } from './complete-account.component';

describe('CompleteAccountComponent', () => {
  let component: CompleteAccountComponent;
  let fixture: ComponentFixture<CompleteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
