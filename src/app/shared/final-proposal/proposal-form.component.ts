import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../core/services/auth.service';
import { landscapingProcess, Project, projectOptions } from '../../core/models/project';
import { SeparatorType } from '../../core/models/base';
import {
  AccessoryLayout,
  CostEstimate,
  FinalProposal,
  FinalProposalStatus,
  ProcedureStep,
  ProjectProcedure
} from '../../core/models/final-proposal';
import { taxRate } from '../../core/data/consts';
import { projectGeneralForm } from '../../core/data/form-labels';
import { pastProjects, referenceProjects } from '../../core/data/portfolio';
import { concatAccessoryTypeNames } from '../../core/utils/project.util';

@Component({
  selector: 'job-hub-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss']
})
export class ProposalFormComponent implements OnInit, OnDestroy {

  @Input() proposal: FinalProposal;
  @Input() project: Project;
  @Input() small: boolean;
  @Input() readonly = false;
  @Input() customer = null;
  @Output() createFinalProposal = new EventEmitter<any>();
  @Output() proposalChange = new EventEmitter<FormGroup>();

  SeparatorType = SeparatorType;

  user$ = this.authService.user$;
  isEditingDiscount = false;
  subTotal = 0;
  tax = 0;
  total = 0;
  form: FormGroup;
  projectOptions = projectOptions;
  prefix = projectGeneralForm.prefix;
  pastProjects = pastProjects;
  referenceProjects = referenceProjects;
  layoutTypeNames = [];
  addressLine1: string;
  addressLine2: string;
  landscapingProcess = landscapingProcess;
  private unsubscribeAll$ = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  get layouts(): FormArray {
    return this.form.get('layouts') as FormArray;
  }

  get costEstimates(): FormArray {
    return this.form.get('costEstimates') as FormArray;
  }

  get procedures(): FormArray {
    return this.form.get('procedures') as FormArray;
  }

  private static compareTypes(op1, op2): boolean {
    const list1 = op1.map(o => o.type);
    const list2 = op2.map(o => o.type);
    return JSON.stringify(list1) === JSON.stringify(list2);
  }

  ngOnInit(): void {
    const addressParts = this.project.address.split(', ');
    this.addressLine1 = addressParts[0];
    if (addressParts.length >= 3) {
      this.addressLine2 = `${addressParts[1]}, ${addressParts[2]}`;
    }
    this.form = this.buildProposalForm(this.proposal);
    this.proposalChange.emit(this.form);
    this.refreshPrice(this.proposal);
    if (this.proposal.status === FinalProposalStatus.Accepted || this.proposal.status === FinalProposalStatus.Declined) {
      this.lockToggles();
    }
    this.layoutTypeNames = this.proposal.layouts.map(layout => layout.type);
    this.landscapingProcess[0].layoutTypeNames = concatAccessoryTypeNames(this.layoutTypeNames, SeparatorType.Slash);
    this.form.valueChanges.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(value => {
        this.proposalChange.emit(this.form);
        this.layoutTypeNames = value.layouts.map(layout => layout.type);
        this.landscapingProcess[0].layoutTypeNames = concatAccessoryTypeNames(this.layoutTypeNames, SeparatorType.Slash);
        this.refreshPrice(value);
      });
    this.form.controls.layouts.valueChanges.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(value => {
        if (this.costEstimates.length !== value.length) { return; }
        value.forEach((v, index) => {
          this.costEstimates.controls[index].patchValue({
            ...this.costEstimates.controls[index].value,
            type: v.type,
            comment: v.comment
          }, { emitEvent: false });
        });
      });

    this.form.controls.costEstimates.valueChanges.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(value => {
        if (value.length !== this.layouts.length) { return; }
        if (ProposalFormComponent.compareTypes(this.layouts.value, value)) { return; }
        value.forEach((v, index) => {
          this.layouts.controls[index].patchValue({
            ...this.layouts.controls[index].value,
            type: v.type
          }, { emitEvent: false });
        });
      });
  }

  refreshPrice(proposal: FinalProposal) {
    let subTotal = 0;
    proposal.costEstimates.forEach(item => {
      if (item.accept || !proposal.id) {
        subTotal += Number(item.cost);
      }
    });
    this.subTotal = subTotal;
    this.tax = proposal.applyTax ? (subTotal - proposal.discount) * taxRate : 0;
    this.total = this.subTotal + this.tax - proposal.discount;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  addLayout() {
    const newLayout = this.buildLayoutForm();
    newLayout.controls.isEditing.setValue(true);
    this.layouts.push(newLayout);

    const newEstimate = this.buildEstimateForm();
    newEstimate.controls.isEditing.setValue(true);
    newEstimate.controls.accept.setValue(true);
    this.costEstimates.push(newEstimate);
  }

  addProcedure() {
    const newProcedure = this.buildProcedureForm();
    newProcedure.controls.isEditing.setValue(true);
    this.procedures.push(newProcedure);
  }

  addProcedureStep(procedure) {
    const newStep = this.buildProcedureStepForm();
    newStep.controls.isEditing.setValue(true);
    procedure.get('steps').push(newStep);
  }

  saveEstimates() {
    this.costEstimates.controls.forEach(x => x.get('isEditing').setValue(false));
  }

  lockToggles() {
    this.costEstimates.controls.forEach(item => {
      item.get('accept').disable();
    });
  }

  buildProposalForm(proposal: FinalProposal) {
    const data = proposal;
    return this.fb.group({
      id: [data.id || ''],
      existingSiteAssessment: [data.existingSiteAssessment, Validators.required],
      paversSize: [data.paversSize, Validators.required],
      paversColor: [data.paversColor, Validators.required],
      paversQuality: [data.paversQuality, Validators.required],
      layouts: this.fb.array(data.layouts.map(x => this.buildLayoutForm(x))),
      existingMaterialRemoval: [data.existingMaterialRemoval, Validators.required],
      procedures: this.fb.array(data.procedures.map(x => this.buildProcedureForm(x))),
      startDate: [data.startDate || null, Validators.required],
      endDate: [data.endDate || null, Validators.required],
      workPlan: [data.workPlan, Validators.required],
      attachments: [data.attachments || []],
      costEstimates: this.fb.array(data.costEstimates.map(x => this.buildEstimateForm(x))),
      discount: data.discount || '',
      applyTax: data.applyTax,
      status: data.status || ''
    });
  }

  private buildEstimateForm(estimate?: CostEstimate) {
    const data = estimate || {} as any;
    return this.fb.group({
      id: data.id || '',
      type: [data.type || '', Validators.required],
      comment: [data.comment || '', Validators.required],
      cost: [data.cost || '', [Validators.min(1), Validators.required]],
      accept: data.accept,
      isEditing: !this.readonly
    });
  }

  private buildProcedureStepForm(procedureStep?: ProcedureStep) {
    const data = procedureStep || {} as any;
    return this.fb.group({
      id: data.id || '',
      title: [data.title, Validators.required],
      comment: [data.comment, Validators.required],
      isEditing: false
    });
  }

  private buildProcedureForm(procedure?: ProjectProcedure) {
    const data = procedure || {} as any;
    return this.fb.group({
      id: data.id || '',
      type: [data.type, Validators.required],
      steps: data.steps ? this.fb.array(data.steps.map(x => this.buildProcedureStepForm(x))) : this.fb.array([]),
      isEditing: false
    });

  }

  private buildLayoutForm(layoutItem?: AccessoryLayout) {
    const data = layoutItem || {} as any;
    return this.fb.group({
      id: data.id || '',
      type: [data.type || '', Validators.required],
      comment: [data.comment || '', Validators.required],
      attachments: [data.attachments || []],
      isEditing: data.comment === ''
    });
  }
}
