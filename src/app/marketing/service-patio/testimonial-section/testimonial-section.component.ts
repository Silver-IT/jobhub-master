import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'job-hub-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent implements OnInit {

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
      text: 'From the initial consultation to the finished product, Joe and his team went above and beyond in terms of professionalism, timeliness and quality.  Use J & D Landscaping for your next project - you won\'t be disappointed!',
      name: 'Jennifer Bombard',
      image: 'jennifer.png'
    },
    {
      text: 'The owners Nick and Joe are very personable and great to deal with. Nick came to look at the sidewalk I wanted them to do for me. I received a quote via email that evening, agreed to it and sent it back. Next day I got a call from Nick to let me know I was scheduled. I am so pleased with the finished product. They did the job in less than a day and it looks awesome. I can’t say enough about how impressed I am with the quality of work and the looks of my new sidewalk. I highly recommend J&D Landscaping for any of your needs.',
      name: 'Thomas DeCarli',
      image: 'thomas.png'
    },
    {
      text: 'Working with Nick is very easy, he is knowledgeable and has a great eye for design. He is a true master of his craft. He was honest and affordable for the quality of work he provides, which is superior than the contractors we’ve used previously. Not only would I use them again I would recommend J & D Landscaping to anyone I know.',
      name: 'Holli Metcalf',
      image: 'holli.png'
    },
    {
      text: 'I can’t say enough good things about Nick and his team. They just finished a patio and fire pit project in our backyard and it’s incredible. Exactly what we wanted and looks even better than we pictured! From start to finish, Nick was hard working, knowledgeable, and helpful in decision making. His team worked seamlessly to complete our project in a timely fashion, with excellent quality, and within our budget. I would highly recommend this company!',
      name: 'Lindsay Schumann',
      image: 'lindsay.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
