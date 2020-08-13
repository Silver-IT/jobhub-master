import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from '../../core/data/routes';
import { ScrollPosition } from '../../core/data/scroll-pos';

@Component({
  selector: 'job-hub-service-patio',
  templateUrl: './service-patio.component.html',
  styleUrls: ['./service-patio.component.scss']
})
export class ServicePatioComponent implements OnInit {

  factors = [
    {
      image: 'assets/images/icons/green-rect/quality.svg',
      title: 'We are Quality',
      text: '“It’s all in the Base” This is the quote that means the most in the Hardscape industry.'
    },
    {
      image: 'assets/images/icons/green-rect/efficient.svg',
      title: 'We are Efficient',
      text: 'J&D Landscaping completes well over 100+ Hardscape projects per season.'
    },
    {
      image: 'assets/images/icons/green-rect/affordable.svg',
      title: 'We are Affordable',
      text: 'J&D Landscaping is a small business with an efficient installation process and we pass the savings onto our customers.'
    },
  ];

  numbers = [
    { count: '17', label: 'years in business' },
    { count: '1000+', label: 'project delivered' },
    { count: '2 days', label: 'average project turnarounds' },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  requestEstimate() {
    this.router.navigate([ROUTES.landingPages.requestEstimate]);
  }

}
