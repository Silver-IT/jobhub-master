import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRocketTableComponent } from './log-rocket-table.component';

describe('LogRocketTableComponent', () => {
  let component: LogRocketTableComponent;
  let fixture: ComponentFixture<LogRocketTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRocketTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRocketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
