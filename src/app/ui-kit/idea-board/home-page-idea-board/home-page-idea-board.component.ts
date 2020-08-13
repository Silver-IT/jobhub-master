import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Idea } from '../../../core/models/idea-board';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { CustomerRegisterDialogService } from '../../../shared/customer-register-dialog/customer-register-dialog.service';

@Component({
  selector: 'job-hub-home-page-idea-board',
  templateUrl: './home-page-idea-board.component.html',
  styleUrls: ['./home-page-idea-board.component.scss']
})
export class HomePageIdeaBoardComponent implements OnInit {

  @Input() hasLearnMoreButton: boolean;
  @Input() isLoading;
  @Input() ideas: Idea[] = [];
  @Output() cardLiked: EventEmitter<Idea> = new EventEmitter<Idea>();

  constructor(
    private customerSignupWizardService: CustomerSignupWizardService,
    private customerRegisterDialogService: CustomerRegisterDialogService
  ) { }

  ngOnInit(): void {
  }

  cardSelected(idea: Idea) {
    this.cardLiked.emit(idea);
    if (idea.selected) {
      this.customerRegisterDialogService.openRegisterDialog();
    }
  }

}
