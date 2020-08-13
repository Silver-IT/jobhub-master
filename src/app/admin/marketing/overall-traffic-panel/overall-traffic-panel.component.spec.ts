import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallTrafficPanelComponent } from './overall-traffic-panel.component';

describe('OverallTrafficPanelComponent', () => {
  let component: OverallTrafficPanelComponent;
  let fixture: ComponentFixture<OverallTrafficPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallTrafficPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallTrafficPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
