import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateGeneralComponent } from './estimate-general.component';

describe('EstimateGeneralComponent', () => {
  let component: EstimateGeneralComponent;
  let fixture: ComponentFixture<EstimateGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
