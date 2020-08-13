import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageContentComponent } from './package-content.component';

describe('PackageContentComponent', () => {
  let component: PackageContentComponent;
  let fixture: ComponentFixture<PackageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
