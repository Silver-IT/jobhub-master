import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../../core/services/event.service';
import { Event, EventType } from '../../core/models/event';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models/auth';
import { ROUTES } from '../../core/data/routes';

@Component({
  selector: 'job-hub-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {

  isLoading = false;
  events$ = this.eventService.events$;

  constructor(
    private eventService: EventService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  get rootPath(): string {
    return (this.authService.user.role === UserRole.Contractor || this.authService.user.role === UserRole.SuperAdmin) ? ROUTES.admin.root : ROUTES.app.root;
  }

  get projectPath(): string {
    return (this.authService.user.role === UserRole.Contractor || this.authService.user.role === UserRole.SuperAdmin) ? ROUTES.admin.projects : ROUTES.app.project;
  }

  ngOnInit(): void {
    this.loadAllEvents();
  }

  notificationSelect(event: Event) {
    // TODO: add specific exception for users
    switch (event.type) {
      case EventType.YouHaveNewEstimate: case EventType.EstimateHasBeenAccepted: case EventType.EstimateHasBeenDeclined: {
        const projectId = event.meta.project.id;
        this.router.navigate([this.rootPath, this.projectPath, projectId, ROUTES.app.estimate]);
        break;
      }
      case EventType.YouHaveNewProposal: case EventType.FinalProposalHasBeenAccepted: case EventType.FinalProposalHasBeenDeclined: {
        const projectId = event.meta.project.id;
        this.router.navigate([this.rootPath, this.projectPath, projectId, ROUTES.app.proposal]);
        break;
      }
      case EventType.UserRegisteredEvent: {
        const userId = event.meta.id;
        this.router.navigate([this.rootPath, ROUTES.admin.customers, userId]);
        break;
      }
      case EventType.CustomerReleasedMilestoneEvent: case EventType.ContractorRequestedToReleaseMilestone:
      case EventType.ContractorConfirmedCashPayment: case EventType.CustomerRequestedCashPaymentEvent: {
        const projectId = event.meta.project.id;
        this.router.navigate([this.rootPath, this.projectPath, projectId, ROUTES.app.payment]);
        break;
      }
      case EventType.ContractorRequestedReviewEvent: {
        const projectId = event.meta.id;
        this.router.navigate([this.rootPath, this.projectPath, projectId, ROUTES.app.payment]);
        break;
      }
      case EventType.CustomerSignedContractEvent: {
        const projectId = event.meta.id;
        this.router.navigate([this.rootPath, this.projectPath, projectId, ROUTES.app.contract]);
        break;
      }
      case EventType.CustomerAcceptedContractEvent: case EventType.PickOutPaversScheduleUpdatedEvent: {
        const projectId = event.meta.id;
        this.router.navigate([this.rootPath, this.projectPath, projectId, ROUTES.app.payment]);
        break;
      }
      case EventType.CustomerRescheduledSiteVisitEvent: case EventType.CustomerRequestedSiteVisitChangeEvent:
        case EventType.CustomerCanceledSiteVisitEvent: case EventType.SiteVisitScheduleUpdatedEvent: {
        const projectId = event.meta.id;
        this.router.navigate([this.rootPath, this.projectPath, projectId, ROUTES.app.estimate]);
        break;
      }
      default: {
        const projectId = event.meta.project ? event.meta.project.id : event.meta.id;
        this.router.navigate([this.rootPath, this.projectPath, projectId]);
      }
    }
  }

  async readEvent(id: string, event) {
    event.stopPropagation();
    event.preventDefault();
    await this.eventService.readEvent(id).toPromise();
    this.eventService.removeEvent(id);
  }

  async readAll() {
    try {
      await this.eventService.readAllEvents().toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  private async loadAllEvents() {
    try {
      this.isLoading = true;
      await this.eventService.getEvents().toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
