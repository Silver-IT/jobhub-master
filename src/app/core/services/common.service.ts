import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { ScrollPosition } from '../data/scroll-pos';
import { ToastrService } from './toastr.service';
import { Schedule, ScheduleType } from '../models/schedule';
import { ROUTES } from '../data/routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private scrollToService: ScrollToService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  scheduleItemRedirect(schedule: Schedule) {
    switch (schedule.type) {
      case ScheduleType.ProjectStart:
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, schedule.data.project.id, ROUTES.admin.project.management]);
        break;
      case ScheduleType.SiteVisitSchedule:
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, schedule.data.project.id, ROUTES.admin.project.estimate]);
        break;
    }
  }

  scrollToTop() {
    this.scrollToService.scrollTo({ target: ScrollPosition.Root });
  }

  findInvalidField(form: FormGroup, labelGroup: any, prefix: string, container?: string, offset = -300): boolean {
    if (!form.invalid) {
      return true;
    } else {
      const asArray = Object.keys(form.controls).map(key => {
        return { key, form: form.controls[key] };
      });
      const invalidField = asArray.find(x => x.form.invalid);
      const fieldName = labelGroup[invalidField.key] || invalidField.key;
      // check if invalid field is form array
      const invalidFieldForm = invalidField.form as FormArray;
      if (!invalidFieldForm.controls) {
        this.scrollAndBounceInvalidField(fieldName, `${prefix}_${invalidField.key}`, container, offset);
      } else {
        const index = invalidFieldForm.controls.findIndex(x => x.invalid);
        const invalidFormArrayObject = invalidFieldForm.at(index) as FormGroup;
        // recurring logic starts here
        this.findInvalidField(invalidFormArrayObject, labelGroup, `${prefix}_${invalidField.key}_${index}`, container, offset);
      }
      return false;
    }
  }

  private scrollAndBounceInvalidField(fieldName: string, target: string, container: string, offset: number) {
    const scrollConfig: ScrollToConfigOptions = { target, offset };
    if (container) {
      scrollConfig.container = container;
    }
    this.scrollToService.scrollTo(scrollConfig);
    this.bounceInput(target);
    this.toastr.warning(`${fieldName} is required.`, 'Validation');
  }

  bounceInput(key) {
    const element = document.getElementById(key);
    if (!element) {
      // log for unexpected validation check error
      console.log(`validation option error, ${key} is missing`);
      return;
    }
    element.classList.add('invalid');
    setTimeout(() => {
      if (element) {
        // user can navigate to different page without waiting for 6 second
        element.classList.remove('invalid');
      }
    }, 6000);
  }
}
