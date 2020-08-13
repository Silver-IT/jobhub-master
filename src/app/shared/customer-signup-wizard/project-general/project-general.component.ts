import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  DrainageType,
  MachineAccessType,
  ProjectAccessoryType,
  ProjectLocationType,
  ProjectShapeType,
  ProjectTimelineType,
  PropertyGradeType,
  RegisterProject,
  SoilType
} from '../../../core/models/project';
import { enumToOptions } from '../../../core/utils/enum.util';
import { Option } from '../../../core/models/option';
import { accessoryTypes } from '../../../core/data/accessory-types';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { Location } from '../../../core/models/base';
import { MapService } from '../../../ui-kit/map/map.service';
import { projectGeneralForm } from '../../../core/data/form-labels';

@Component({
  selector: 'job-hub-project-general',
  templateUrl: './project-general.component.html',
  styleUrls: ['./project-general.component.scss']
})
export class ProjectGeneralComponent implements OnInit {

  @Input() addressAutoComplete: boolean;

  form: FormGroup = this.fb.group({
    projects: this.fb.array([])
  });
  prefix = projectGeneralForm.prefix;

  get projects(): FormArray {
    return this.form.get('projects') as FormArray;
  }

  expanded = 0; // expanded index

  projectAccessoryTypes: Option<ProjectAccessoryType>[] = enumToOptions<ProjectAccessoryType>(ProjectAccessoryType);
  projectLocationTypes: Option<ProjectLocationType>[] = enumToOptions<ProjectLocationType>(ProjectLocationType);
  projectShapeTypes: Option<ProjectShapeType>[] = enumToOptions<ProjectShapeType>(ProjectShapeType);
  machineAccessTypes: Option<MachineAccessType>[] = enumToOptions<MachineAccessType>(MachineAccessType);
  propertyGradeTypes: Option<PropertyGradeType>[] = enumToOptions<PropertyGradeType>(PropertyGradeType);
  soilTypes: Option<SoilType>[] = enumToOptions<SoilType>(SoilType);
  drainageTypes: Option<DrainageType>[] = enumToOptions<DrainageType>(DrainageType);
  projectTimelineTypes: Option<ProjectTimelineType>[] = enumToOptions<ProjectTimelineType>(ProjectTimelineType);
  accessoryTypes = accessoryTypes;

  constructor(
    private fb: FormBuilder,
    private customerSignupWizardService: CustomerSignupWizardService,
    private mapService: MapService
  ) {
  }

  ngOnInit(): void {
    const projects = this.customerSignupWizardService.getFromStorage('projects');
    if (projects) {
      projects.forEach(project => {
        this.addNewProject(project);
      });
    } else {
      this.addNewProject();
    }
    if (this.addressAutoComplete) {
      this.getCurrentLocation();
    }
  }

  addNewProject(project?: RegisterProject) {
    this.projects.push(this.initGeneralForm(project));
    this.expanded = this.projects.length - 1;
  }

  addressChanged(location: Location, form: any) {
    form.get('latitude').setValue(location.latitude);
    form.get('longitude').setValue(location.longitude);
  }

  private getCurrentLocation() {
    this.mapService.getCurrentLocation().then(res => {
      this.projects.at(0).get('address').setValue(res.address);
      this.projects.at(0).get('latitude').setValue(res.latitude);
      this.projects.at(0).get('longitude').setValue(res.longitude);
    });
  }

  private initGeneralForm(project?: RegisterProject) {
    const data: RegisterProject = project || {} as any;
    return this.fb.group({
      name: [data.name || '', Validators.required],
      address: [data.address || '', Validators.required],
      latitude: data.latitude,
      longitude: data.longitude,
      projectType: [data.projectType || '', Validators.required],
      locationType: [data.locationType || '', Validators.required],
      projectSize: [data.projectSize || '', Validators.required],
      shapeType: [data.shapeType || '', Validators.required],
      accessories: [data.accessories || []],
      machineAccess: [data.machineAccess || '', Validators.required],
      propertyGrade: [data.propertyGrade || '', Validators.required],
      soilType: [data.soilType || '', Validators.required],
      drainageType: [data.drainageType || '', Validators.required],
      timelineType: [data.timelineType || '', Validators.required],
      budget: data.budget || '',
      attachments: [data.attachments || []],
      comment: data.comment || ''
    });
  }
}
