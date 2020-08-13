import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonGroupComponent } from './toggle-button-group.component';

describe('ToggleButtonGroupComponent', () => {
  let component: ToggleButtonGroupComponent;
  let fixture: ComponentFixture<ToggleButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
