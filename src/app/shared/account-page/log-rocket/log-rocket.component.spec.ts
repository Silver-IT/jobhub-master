import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRocketComponent } from './log-rocket.component';

describe('LogRocketComponent', () => {
  let component: LogRocketComponent;
  let fixture: ComponentFixture<LogRocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
