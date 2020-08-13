import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBlockButtonComponent } from './time-block-button.component';

describe('TimeBlockButtonComponent', () => {
  let component: TimeBlockButtonComponent;
  let fixture: ComponentFixture<TimeBlockButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeBlockButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBlockButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
