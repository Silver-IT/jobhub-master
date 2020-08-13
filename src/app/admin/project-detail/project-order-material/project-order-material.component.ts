import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';

import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { ProjectDetail } from '../../../core/models/project';
import { FinalProposal } from '../../../core/models/final-proposal';
import {
  MaterialAmountType,
  MaterialOrderGroup,
  MaterialOrderGroupType,
  MaterialOrderItem
} from '../../../core/models/material';
import { TagCategory } from '../../../core/models/tag';
import { enumToOptions } from '../../../core/utils/enum.util';
import { CommonService } from '../../../core/services/common.service';
import { ScrollPosition } from '../../../core/data/scroll-pos';
import { materialForm } from '../../../core/data/form-labels';
import { MaterialService } from '../../../core/services/material.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { timeFromTimeSlot } from '../../../core/utils/time.util';

@Component({
  selector: 'job-hub-project-order-material',
  templateUrl: './project-order-material.component.html',
  styleUrls: ['./project-order-material.component.scss']
})
export class ProjectOrderMaterialComponent implements OnInit {

  isLoading = false;
  isEditing = false;
  MaterialOrderGroupType = MaterialOrderGroupType;
  TagCategory = TagCategory;
  prefix = materialForm.prefix;
  materials: MaterialOrderGroup[] = this.route.snapshot.data.materials;
  project: ProjectDetail = this.projectDetailStateService.project;
  finalProposal: FinalProposal = this.projectDetailStateService.finalProposal;
  materialAmountTypeOptions = enumToOptions<MaterialAmountType>(MaterialAmountType);
  form: FormGroup = this.initMaterialOrderGroupsForm();

  get materialOrderGroups(): FormArray {
    return this.form.get('materialOrderGroups') as FormArray;
  }

  constructor(
    private projectDetailStateService: ProjectDetailStateService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private commonService: CommonService,
    private materialService: MaterialService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addMaterial(group: any) {
    const items = group.get('items') as FormArray;
    const newItem = this.initMaterialOrderItemForm(null) as any;
    newItem.isEditing = true; // hacky - use form control object to store the edit status of each items
    items.push(newItem);
  }

  toggleEditMode() {
    if (this.isEditing && this.form.invalid) {
      this.commonService.findInvalidField(this.form, materialForm, materialForm.prefix, ScrollPosition.AdminPanelContainer);
      return;
    }
    if (this.isEditing) {
      this.materialOrderGroups.controls.forEach(x => {
        const items = x.get('items') as FormArray;
        items.controls.forEach((item: any) => {
          item.isEditing = false;
        });
      });
    }
    this.isEditing = !this.isEditing;
  }

  async submitOrder() {
    const payload = this.form.value.materialOrderGroups;
    if (!payload.find(group => group.items.length)) {
      this.toastr.warning('Please add at least one request.');
      return;
    }
    try {
      this.isLoading = true;
      payload.forEach((group) => {
        if (!group.id) {
          delete group.id; // cleanup id: undefined cases
        }
        group.items.forEach(item => {
          if (!item.id) {
            delete item.id; // cleanu id: undefined cases
          }
          item.requestDate = timeFromTimeSlot(new Date(item.date), item.time);
        });
      });
      this.materials = await this.materialService.saveMaterialOrders(this.project.id, payload).toPromise();
      this.form = this.initMaterialOrderGroupsForm();
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to save material order. Please try again');
    } finally {
      this.isLoading = false;
    }
  }

  private initMaterialOrderGroupsForm() {
    return this.fb.group({
      materialOrderGroups: this.fb.array(
        this.materials ? this.materials.map(x => this.initMaterialOrderGroupForm(x)) : []
      )
    });
  }

  private initMaterialOrderGroupForm(materialOrderGroup: MaterialOrderGroup) {
    const data: MaterialOrderGroup = materialOrderGroup || {} as any;
    return this.fb.group({
      id: data.id,
      items: this.fb.array(data.items ? data.items.map(x => this.initMaterialOrderItemForm(x)) : []),
      layoutType: data.layoutType || null,
      groupType: [data.groupType || null, Validators.required]
    });
  }

  private initMaterialOrderItemForm(item: MaterialOrderItem) {
    const data: MaterialOrderItem = item || {} as any;
    return this.fb.group({
      id: data.id,
      amount: [data.amount || '', Validators.required],
      amountType: [data.amountType || null, Validators.required],
      color: [data.color || null, Validators.required],
      name: data.name || null,
      brand: data.brand || null,
      style: data.style || null,
      requestDate: data.requestDate || null,
      comment: data.comment || null,
      date: [data.requestDate || '', Validators.required],
      time: [data.requestDate ? format(new Date(data.requestDate), 'HH:mm') : '', Validators.required],
    });
  }

}
