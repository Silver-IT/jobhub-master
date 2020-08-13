import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateFormComponent } from './estimate-form.component';

describe('EstimateFormComponent', () => {
  let component: EstimateFormComponent;
  let fixture: ComponentFixture<EstimateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
