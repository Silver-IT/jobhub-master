import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'job-hub-home-swiper-testimonial',
  templateUrl: './home-swiper-testimonial.component.html',
  styleUrls: ['./home-swiper-testimonial.component.scss']
})
export class HomeSwiperTestimonialComponent implements OnInit {

  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    effect: 'coverflow',
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      hideOnClick: false,
    },
    threshold: 50,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
  };

  testimonial = [
    {
      text: 'J&D Landscaping is a wonderful company to work with. We had a patio installed and it looks fantastic.  Nick has great vision on what the project will look like. He is a true artist. The team does high quality work and it shows....not just in their final product but also the process and how they worked the equipment. They were very respectful of the property. They are highly recommended and just great people to work with.',
      name: 'Melanie Ho',
      address: ''
    },
    {
      text: 'The work they performed was excellent. The before and after on my patio is truly astonishing.',
      name: 'Tyler Wheelock',
      address: ''
    },
    {
      text: 'J&D Landscaping did a fabulous job on our patio! We couldn\'t be happier! They are very professional and workmanship is top notch. I highly recommend them!',
      name: 'Kenneth Cajigas',
      address: ''
    },
    {
      text: 'JD does excellent work. His work has tremendous style and they let you pick whatever materials you want. His crew is also extremely efficient which is nice nowadays. My patio and retaining wall came out great. His pricing is also fair, not out of control and expensive right in the middle somewhere.',
      name: 'Santiago Garcia',
      address: ''
    },
    {
      text: 'This has to be the best company I have ever worked with. Very professional, extremely fast, able to fit me in on a busy schedule, arrived early, constantly communicated and the paver patio I had done turned out perfect. Came with an excellent warranty. Price was lower than 6 different quotes I received! I could not ask for more. Extremely satisfied!',
      name: 'Joshua Lamb',
      address: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
