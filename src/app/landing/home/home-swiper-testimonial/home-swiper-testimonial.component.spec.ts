import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSwiperTestimonialComponent } from './home-swiper-testimonial.component';

describe('HomeSwiperTestimonialComponent', () => {
  let component: HomeSwiperTestimonialComponent;
  let fixture: ComponentFixture<HomeSwiperTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSwiperTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSwiperTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
