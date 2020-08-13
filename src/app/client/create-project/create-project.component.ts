import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { ProjectGeneralComponent } from '../../shared/customer-signup-wizard/project-general/project-general.component';
import { IdeaSelectComponent } from '../../shared/customer-signup-wizard/idea-select/idea-select.component';
import { CustomerSignupWizardService } from '../../core/services/customer-signup-wizard.service';
import { clientCreateProject } from '../../core/data/project-create';
import { ToastrService } from '../../core/services/toastr.service';
import { ProjectService } from '../../core/services/project.service';
import { ROUTES } from '../../core/data/routes';
import { ScrollPosition } from '../../core/data/scroll-pos';
import { CommonService } from '../../core/services/common.service';
import { projectGeneralForm } from '../../core/data/form-labels';

@Component({
  selector: 'job-hub-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit, OnDestroy {

  @ViewChild(ProjectGeneralComponent) general: ProjectGeneralComponent;
  @ViewChild(IdeaSelectComponent) idea: IdeaSelectComponent;

  isLoading = false;
  total = clientCreateProject.length;
  step = 1;
  title = '';
  description = '';

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerSignupWizardService: CustomerSignupWizardService,
    private toastr: ToastrService,
    private projectService: ProjectService,
    private scrollToService: ScrollToService,
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(queryParams => {
      this.step = Number(queryParams.step) || 1;
      if (this.step > this.total || this.step < 1) { // redirect to root page when query param is invalid format
        this.router.navigate(['.'], {queryParams: null, relativeTo: this.route});
        return;
      }
      if (this.step === 2) {
        this.validateProjectsObject();
      }
      const data = clientCreateProject[this.step - 1];
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
        this.commonService.findInvalidField(this.general.form.get('projects').get('0') as FormGroup, projectGeneralForm, projectGeneralForm.prefix, ScrollPosition.CustomerPanelContainer);
        return;
      } else {
        this.customerSignupWizardService.saveToStorage(this.general.form.value);
        this.gotoNext();
        return;
      }
    }

    if (this.step === 2) {
      const ideas = this.idea.ideas.filter(x => x.selected).map(x => x.id);
      this.customerSignupWizardService.saveToStorage({ideas});
      this.createProject();
      return;
    }
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

  private validateProjectsObject() {
    const projects = this.customerSignupWizardService.getFromStorage('projects');
    if (!projects || !projects.length || !projects[0].name) {
      this.step = 1;
      this.navigateToStep();
      return;
    }
  }

  private async createProject() {
    try {
      this.isLoading = true;
      const payload = {
        projects: this.customerSignupWizardService.getFromStorage('projects'),
        ideas: this.customerSignupWizardService.getFromStorage('ideas') || []
      };
      if (payload && payload.projects) {
        payload.projects.forEach(project => {
          project.budget = Number(project.budget);
        });
      } else {
        this.step = 1;
        this.navigateToStep();
      }
      const res = await this.projectService.createProjects(payload).toPromise();
      this.customerSignupWizardService.clearStorage();
      if (res.length > 1) {
        this.toastr.success('Your projects has successfully created.');
        this.router.navigate([ROUTES.app.root, ROUTES.app.myProjects]);
      } else {
        this.toastr.success('Your project has successfully created.');
        this.router.navigate([ROUTES.app.root, ROUTES.app.project, res[0].id]);
      }
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to register new project. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
