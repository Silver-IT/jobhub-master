import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePatioComponent } from './service-patio.component';

describe('ServicePatioComponent', () => {
  let component: ServicePatioComponent;
  let fixture: ComponentFixture<ServicePatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
