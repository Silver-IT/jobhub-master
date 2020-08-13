import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProjectDetail, projectOptions } from '../../core/models/project';
import { contractForm } from '../../core/data/form-labels';
import { FinalProposal } from '../../core/models/final-proposal';
import { taxRate } from '../../core/data/consts';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'job-hub-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  @Input() readonly = false;
  @Input() project: ProjectDetail;
  @Input() finalProposal: FinalProposal;

  user$ = this.authService.user$;
  typedName: string;
  total: number;
  subTotal: number;
  tax: number;
  addressLine1: string;
  addressLine2: string;

  prefix = contractForm.prefix;


  projectOptions = projectOptions;

  form: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.subTotal = this.finalProposal.costEstimates.reduce((sum, costEstimate) => (sum + (costEstimate.accept ? costEstimate.cost : 0)), 0);
    this.tax = this.finalProposal.applyTax ? taxRate * (this.subTotal - this.finalProposal.discount) : 0;
    this.total = this.subTotal + this.tax - this.finalProposal.discount;
    const addressParts = this.project.address.split(', ');
    this.addressLine1 = addressParts[0];
    if (addressParts.length >= 3) {
      this.addressLine2 = `${addressParts[1]}, ${addressParts[2]}`;
    }
  }
}
