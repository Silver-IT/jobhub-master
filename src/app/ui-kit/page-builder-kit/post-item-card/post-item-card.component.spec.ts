import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemCardComponent } from './post-item-card.component';

describe('PostItemCardComponent', () => {
  let component: PostItemCardComponent;
  let fixture: ComponentFixture<PostItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
