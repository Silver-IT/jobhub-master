import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

  ROUTES = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
