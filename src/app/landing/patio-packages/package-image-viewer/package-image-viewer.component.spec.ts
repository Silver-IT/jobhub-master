import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageImageViewerComponent } from './package-image-viewer.component';

describe('PackageImageViewerComponent', () => {
  let component: PackageImageViewerComponent;
  let fixture: ComponentFixture<PackageImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
