import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatioPackagesComponent } from './patio-packages.component';

describe('PatioPackagesComponent', () => {
  let component: PatioPackagesComponent;
  let fixture: ComponentFixture<PatioPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatioPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatioPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
