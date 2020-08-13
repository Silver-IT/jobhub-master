import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ROUTES } from '../../../core/data/routes';
import { ScrollPosition } from '../../../core/data/scroll-pos';

@Component({
  selector: 'job-hub-home-swiper-jumbotron',
  templateUrl: './home-swiper-jumbotron.component.html',
  styleUrls: ['./home-swiper-jumbotron.component.scss']
})
export class HomeSwiperJumbotronComponent implements OnInit {

  ScrollPosition = ScrollPosition;
  ROUTES = ROUTES;
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbar: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      hideOnClick: false,
    },
  };

  images = [
    'carousel-1.jpg',
    'carousel-2.jpg',
    'carousel-3.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
