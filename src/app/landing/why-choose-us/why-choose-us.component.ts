import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../core/data/routes';

@Component({
  selector: 'job-hub-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

  factors = [
    {
      image: 'assets/images/icons/green-rect/quality.svg',
      title: 'We are Quality',
      text: '“It’s all in the Base” This is the quote that means the most in the Hardscape industry. No matter what paver choice, style, color or pattern a customer chooses, if the base is done wrong the project will fail and cause problems over time. J&D Landscaping takes the proper steps to ensure a base that will stand the test of time and hold up to New England weather.'
    },
    {
      image: 'assets/images/icons/green-rect/efficient.svg',
      title: 'We are Efficient',
      text: 'J&D Landscaping completes well over 100+ Hardscape projects per season which is an accomplishment that even larger companies have trouble doing without having to sacrifice quality, restrict choice of material or take weeks to complete. J&D Landscaping knows that customers want projects completed in a timely fashion so by working efficiently on each project they are able to ensure that can happen.'
    },
    {
      image: 'assets/images/icons/green-rect/affordable.svg',
      title: 'We are Affordable',
      text: 'J&D Landscaping is a small business with an efficient installation process and we pass the savings onto our customers. Due to the lower overhead of a smal l company, our efficiency and partner agreements with our suppliers that we have built over the years, we simply are able to provide better pricing compared to the larger companies who have much higher overhead cost.'
    },
  ];

  tabs = [
    {route: ROUTES.landingPages.whyChooseUs.projectManagement, label: 'Project Management'},
    {route: ROUTES.landingPages.whyChooseUs.installationProcess, label: 'Installation Process'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
