import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SchedulerService } from '../../../ui-kit/scheduler/scheduler.service';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { MaterialRequestItem } from '../../../core/models/material';
import { MaterialService } from '../../../core/services/material.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { ScheduleType } from '../../../core/models/schedule';
import { ScheduleService } from '../../../core/services/schedule.service';

@Component({
  selector: 'job-hub-project-choose-material',
  templateUrl: './project-choose-material.component.html',
  styleUrls: ['./project-choose-material.component.scss']
})
export class ProjectChooseMaterialComponent implements OnInit, OnDestroy {

  project = this.projectDetailStateService.project;
  materials: MaterialRequestItem[] = this.route.snapshot.data.materials;
  form: FormGroup = this.initMaterialRequestsForm();
  isLoading = false;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  get materialRequests(): FormArray {
    return this.form.get('materialRequests') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private materialService: MaterialService,
    private toastr: ToastrService,
    private projectDetailStateService: ProjectDetailStateService,
    private schedulerService: SchedulerService,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.projectDetailStateService.project$.asObservable().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(project => this.project = project);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  addNote(item: any) {
    const notes = item.get('notes') as FormArray;
    const newNote = new FormControl('', Validators.required) as any;
    newNote.isEditing = true; // hacky - use form control object to store the edit status of each items
    notes.push(newNote);
  }

  schedule() {
    this.schedulerService.openFromDatePickerDialog(ScheduleType.PickOutPaver).subscribe((res: {from: string, to: string}) => {
      if (res) {
        this.schedulePickPavers(res.from, res.to);
      }
    });
  }

  async save() {
    try {
      this.isLoading = true;
      const payload = this.form.value.materialRequests;
      payload.forEach((item) => {
        if (!item.id) {
          delete item.id; // cleanup id: undefined cases
        }
      });
      this.materials = await this.materialService.saveMaterialRequests(this.project.id, this.form.value.materialRequests).toPromise();
      this.toastr.success('Successfully updated material requests.');
      // reconstruct form with material request item id
      this.form = this.initMaterialRequestsForm();
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to save material request information. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  private async schedulePickPavers(from: string, to: string) {
    try {
      this.isLoading = true;
      if (!this.project.pickOutPaverSchedule) {
        const res = await this.materialService.schedulePickPavers(this.project.id, from, to).toPromise();
        this.projectDetailStateService.setProject({...this.project, pickOutPaverSchedule: res});
        this.toastr.success('Pick out pavers call has been scheduled successfully');
      } else {
        const payload = this.project.pickOutPaverSchedule;
        payload.from = from;
        payload.to = to;
        const res = await this.scheduleService.updateScheduleById(this.project.pickOutPaverSchedule.id, payload).toPromise();
        this.projectDetailStateService.setProject({...this.project, pickOutPaverSchedule: res});
        this.toastr.success('Pick out pavers call has been updated successfully');
      }
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to schedule a pick of pavers call.');
    } finally {
      this.isLoading = false;
    }
  }

  private initMaterialRequestsForm() {
    return this.fb.group({
      materialRequests: this.fb.array(this.materials ? this.materials.map(x => this.initMaterialRequestItemForm(x)) : [])
    });
  }

  private initMaterialRequestItemForm(material?: MaterialRequestItem) {
    const data: MaterialRequestItem = material || {} as any;
    return this.fb.group({
      id: data.id,
      type: [data.type || null, Validators.required],
      notes: this.fb.array(data.notes ? data.notes : [])
    });
  }

}
