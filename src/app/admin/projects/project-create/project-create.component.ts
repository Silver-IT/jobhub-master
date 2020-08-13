import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { adminCreateProject } from '../../../core/data/project-create';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { LocalStorageService } from 'angular-2-local-storage';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { ScrollPosition } from '../../../core/data/scroll-pos';
import { environment } from '../../../../environments/environment';
import { ProjectGeneralComponent } from '../../../shared/customer-signup-wizard/project-general/project-general.component';
import { projectGeneralForm } from '../../../core/data/form-labels';
import { CommonService } from '../../../core/services/common.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { ProjectService } from '../../../core/services/project.service';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit, OnDestroy {

  @ViewChild(ProjectGeneralComponent) general: ProjectGeneralComponent;

  ScrollPosition = ScrollPosition;

  isLoading = false;
  total = adminCreateProject.length;
  step = 1;
  title = '';
  description = '';

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: LocalStorageService,
    private scrollToService: ScrollToService,
    private customerSignupWizardService: CustomerSignupWizardService,
    private commonService: CommonService,
    private projectService: ProjectService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(queryParams => {
      this.step = Number(queryParams.step) || 1;
      if (this.step > this.total || this.step < 1) { // redirect to root page when query param is invalid format
        this.router.navigate(['.'], { queryParams: null, relativeTo: this.route });
        return;
      }
      const data = adminCreateProject[this.step - 1];
      this.title = data.title;
      this.description = data.description;
    });
  }

  private gotoNext() {
    if (this.step < this.total) {
      this.step++;
      this.navigateToStep();
    }
  }

  private navigateToStep() {
    this.router.navigate(['.'], {queryParams: {step: this.step}, relativeTo: this.route}).then(() => {
      this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    });
  }

  customerSelect(customerId: string) {
    this.storage.set(environment.localStorage.customerSignupWizard, { customerId });
    this.gotoNext();
  }

  async complete() {
    if (this.general.form.invalid) {
      this.commonService.findInvalidField(this.general.form.get('projects').get('0') as FormGroup, projectGeneralForm, projectGeneralForm.prefix, ScrollPosition.AdminPanelContainer);
      return;
    }
    const project = this.general.form.value;
    const customerId = (this.storage.get(environment.localStorage.customerSignupWizard) as any).customerId;
    try {
      this.isLoading = true;
      const newProject = await this.projectService.createProjectForCustomer(customerId, project.projects[0]).toPromise();
      this.storage.remove(environment.localStorage.customerSignupWizard);
      this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, newProject.id]);
      this.toastr.success('Successfully created a new project for a customer.');
    } catch (e) {
      this.toastr.error(e, 'Failed to create a new project for a customer.');
    } finally {
      this.isLoading = false;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
