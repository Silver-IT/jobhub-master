import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../core/models/nav';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit {

  ROUTES = ROUTES;

  menuItems: NavItem[] = [
    {label: 'About us', route: ROUTES.landingPages.about},
    {label: 'Why choose us', route: ROUTES.landingPages.whyChooseUs.root},
    {label: 'Idea Board', route: ROUTES.landingPages.ideaBoard},
    {label: 'Services', route: ROUTES.landingPages.services.root},
    {label: 'Patio Packages', route: ROUTES.landingPages.patioPackages},
    {label: 'Patio', route: ROUTES.marketingPages.servicePatio},
    {label: 'Contact us', route: ROUTES.landingPages.contact},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
