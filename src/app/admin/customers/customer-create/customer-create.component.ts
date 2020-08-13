import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { inviteCustomer } from '../../../core/data/project-create';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { ProjectGeneralComponent } from '../../../shared/customer-signup-wizard/project-general/project-general.component';
import { IdeaSelectComponent } from '../../../shared/customer-signup-wizard/idea-select/idea-select.component';
import { PersonalDetailComponent } from '../../../shared/customer-signup-wizard/personal-detail/personal-detail.component';
import { ROUTES } from '../../../core/data/routes';
import { CustomerService } from '../../../core/services/customer.service';
import { ScrollPosition } from '../../../core/data/scroll-pos';
import { CommonService } from '../../../core/services/common.service';
import { personalDetailForm, projectGeneralForm } from '../../../core/data/form-labels';

@Component({
  selector: 'job-hub-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit, OnDestroy {

  @ViewChild(ProjectGeneralComponent) general: ProjectGeneralComponent;
  @ViewChild(PersonalDetailComponent) person: PersonalDetailComponent;
  @ViewChild(IdeaSelectComponent) idea: IdeaSelectComponent;

  isLoading = false;
  total = inviteCustomer.length;
  step = 1;
  title = '';
  description = '';
  ScrollPosition = ScrollPosition;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerSignupWizardService: CustomerSignupWizardService,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private scrollToService: ScrollToService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(queryParams => {
      this.step = Number(queryParams.step) || 1;
      if (this.step > this.total || this.step < 1) { // redirect to root page when query param is invalid format
        this.router.navigate(['.'], { queryParams: null, relativeTo: this.route });
        return;
      }
      if (this.step === 2) {
        this.validateProjectsObject();
      } else if (this.step === 3) {
        // no need to validate if idea is selected or not
      }
      const data = inviteCustomer[this.step - 1];
      this.title = data.title;
      this.description = data.description;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  next() {
    if (this.step === 1) {
      if (this.general.form.invalid) {
        this.commonService.findInvalidField(this.general.form.get('projects').get('0') as FormGroup, projectGeneralForm, projectGeneralForm.prefix, ScrollPosition.AdminCustomerInviteContainer);
        return;
      } else {
        this.customerSignupWizardService.saveToStorage(this.general.form.value);
        this.gotoNext();
        return;
      }
    }

    if (this.step === 2) {
      const ideas = this.idea.ideas.filter(x => x.selected).map(x => x.id);
      this.customerSignupWizardService.saveToStorage({ ideas });
      this.gotoNext();
      return;
    }

    if (this.step === 3) {
      if (this.person.form.invalid) {
        this.commonService.findInvalidField(this.person.form.get('user') as FormGroup, personalDetailForm, personalDetailForm.prefix, ScrollPosition.AdminCustomerInviteContainer);
        return;
      } else {
        this.customerSignupWizardService.saveToStorage(this.person.form.value);
        this.inviteCustomer();
      }
    }
  }

  skip() {
    if (this.step === 2) {
      this.gotoNext();
    }
  }

  skipProject() {
    this.customerSignupWizardService.saveToStorage({ projects: [] });
    this.step = 3;
    this.navigateToStep();
  }

  onScroll(event) {
    const pos = event.target.scrollTop;
    const max = event.target.scrollHeight - event.target.offsetHeight;
    if (this.idea) {
      if (pos === max && !this.idea.isLoading && this.idea.ideaBoard && !this.idea.ideaBoard.hasPending) {
        this.idea.loadImage$.next();
      }
    }
  }

  private async inviteCustomer() {
    try {
      this.isLoading = true;
      const payload = {
        projects: this.customerSignupWizardService.getFromStorage('projects'),
        user: {
          ...this.customerSignupWizardService.getFromStorage('user'),
          ideas: this.customerSignupWizardService.getFromStorage('ideas') || []
        },
      };
      if (payload && payload.projects) {
        payload.projects.forEach(project => {
          project.budget = Number(project.budget);
        });
      } else {
        this.step = 1;
        this.navigateToStep();
      }
      const result = await this.customerService.inviteCustomer(payload).toPromise();
      this.toastr.success('Your invitation has successfully sent.');
      this.customerSignupWizardService.clearStorage();
      if (result.projects.length !== 0) {
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, result.projects[0].id]);
      } else {
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.customers]);
      }
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to invite new customer. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  private gotoNext() {
    if (this.step < this.total) {
      this.step++;
      this.navigateToStep();
    }
  }

  private navigateToStep() {
    this.router.navigate(['.'], { queryParams: { step: this.step }, relativeTo: this.route }).then(() => {
      this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    });
  }

  private validateProjectsObject() {
    const projects = this.customerSignupWizardService.getFromStorage('projects');
    if (!projects || !projects.length || !projects[0].name) {
      this.step = 1;
      this.navigateToStep();
      return;
    }
  }

}
