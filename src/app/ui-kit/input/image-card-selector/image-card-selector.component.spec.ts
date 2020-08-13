import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardSelectorComponent } from './image-card-selector.component';

describe('ImageCardSelectorComponent', () => {
  let component: ImageCardSelectorComponent;
  let fixture: ComponentFixture<ImageCardSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCardSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
