import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss']
})
export class LandingFooterComponent implements OnInit {

  ROUTES = ROUTES;

  footer = [
    {
      title: 'Customer',
      links: [
        {route: ROUTES.auth.login, label: 'Login'},
        {route: ROUTES.landingPages.ideaBoard, label: 'Idea Board'},
        {route: ROUTES.landingPages.requestEstimate, label: 'Request Estimate'},
      ]
    },
    {
      title: 'Company',
      links: [
        {route: ROUTES.landingPages.about, label: 'About us'},
        {route: ROUTES.landingPages.whyChooseUs.root, label: 'Why choose us'},
        {route: ROUTES.landingPages.services.root, label: 'Services'},
        /*{route: ROUTES.landingPages.hiring, label: 'We are Hiring '},*/
      ]
    },
    {
      title: 'Resources',
      links: [
        {route: ROUTES.landingPages.contact, label: 'Contact us'},
        /*{route: ROUTES.landingPages.blog, label: 'Blog'},*/
        {label: 'Call 860 324 6218', href: 'tel:18603246218'},
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
