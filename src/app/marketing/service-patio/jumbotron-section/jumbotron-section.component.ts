import { Component, OnInit } from '@angular/core';

import { ScrollPosition } from '../../../core/data/scroll-pos';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-jumbotron-section',
  templateUrl: './jumbotron-section.component.html',
  styleUrls: ['./jumbotron-section.component.scss']
})
export class JumbotronSectionComponent implements OnInit {

  ScrollPosition = ScrollPosition;
  ROUTES = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
