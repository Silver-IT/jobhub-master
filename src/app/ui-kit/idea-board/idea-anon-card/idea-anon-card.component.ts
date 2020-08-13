import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Idea } from '../../../core/models/idea-board';
import { ROUTES } from '../../../core/data/routes';
import { ProjectAccessoryType } from '../../../core/models/project';

@Component({
  selector: 'job-hub-idea-anon-card',
  templateUrl: './idea-anon-card.component.html',
  styleUrls: ['./idea-anon-card.component.scss']
})
export class IdeaAnonCardComponent implements OnInit {

  @Input() height: number;
  @Input() idea: Idea;
  @Input() hasLearnMoreButton: boolean;
  @Output() liked: EventEmitter<Idea> = new EventEmitter<Idea>();

  ROUTES = ROUTES;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleLike(value) {
    this.idea.selected = value;
    this.liked.emit(this.idea);
  }

  navigateToServicesPage() {
    const route = [ROUTES.landingPages.services.root];
    switch (this.idea.projectType) {
      case ProjectAccessoryType.Patio:
        route.push(ROUTES.landingPages.services.patios);
        break;
      case ProjectAccessoryType.Walkway:
        route.push(ROUTES.landingPages.services.walkways);
        break;
      case ProjectAccessoryType.RetainingWall:
        route.push(ROUTES.landingPages.services.walkways);
        break;
      case ProjectAccessoryType.DrivewayParking:
        route.push(ROUTES.landingPages.services.driveways);
        break;
      case ProjectAccessoryType.PoolPatio:
        route.push(ROUTES.landingPages.services.poolPatios);
        break;
      case ProjectAccessoryType.Steps:
        route.push(ROUTES.landingPages.services.stepsAndStaircases);
        break;
    }
    this.router.navigateByUrl('/' + route.join('/')).then(() => {
      window.scrollTo(0, 0);
    });
  }

}
