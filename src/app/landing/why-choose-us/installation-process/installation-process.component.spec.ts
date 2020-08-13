import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationProcessComponent } from './installation-process.component';

describe('InstallationProcessComponent', () => {
  let component: InstallationProcessComponent;
  let fixture: ComponentFixture<InstallationProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
