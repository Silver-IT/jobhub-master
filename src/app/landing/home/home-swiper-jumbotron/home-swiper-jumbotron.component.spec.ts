import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSwiperJumbotronComponent } from './home-swiper-jumbotron.component';

describe('HomeSwiperJumbotronComponent', () => {
  let component: HomeSwiperJumbotronComponent;
  let fixture: ComponentFixture<HomeSwiperJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSwiperJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSwiperJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
