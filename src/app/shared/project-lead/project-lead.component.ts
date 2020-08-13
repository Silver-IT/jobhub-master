import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { enumToOptions } from '../../core/utils/enum.util';
import { Location, SourceFoundUs } from '../../core/models/base';
import { Lead, LeadStatus, LeadType } from '../../core/models/lead';
import { ToastrService } from '../../core/services/toastr.service';
import { LeadService } from '../../core/services/lead.service';
import { ROUTES } from '../../core/data/routes';
import { CustomerService } from '../../core/services/customer.service';
import { User } from '../../core/models/auth';

@Component({
  selector: 'job-hub-project-lead',
  templateUrl: './project-lead.component.html',
  styleUrls: ['./project-lead.component.scss']
})
export class ProjectLeadComponent implements OnInit {

  @Input() lead: Lead;

  form: FormGroup;
  sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);
  leadTypeOptions = enumToOptions<LeadType>(LeadType);
  isLoading = false;
  customer: User;

  LeadStatus = LeadStatus;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private leadService: LeadService,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: [this.lead.fullName || '', Validators.required],
      type: [this.lead.type || '', Validators.required],
      email: [this.lead.email || '', Validators.required],
      phone: [this.lead.phone || '', Validators.required],
      address: [this.lead.address || '', Validators.required],
      latitude: [this.lead.latitude || null, Validators.required],
      longitude: [this.lead.longitude || null, Validators.required],
      sourceFoundUs: [this.lead.sourceFoundUs, Validators.required],
      message: [this.lead.message, Validators.required],
    });
    this.searchUserByEmail();
  }

  addressChanged(location: Location) {
    this.form.get('latitude').setValue(location.latitude);
    this.form.get('longitude').setValue(location.longitude);
  }

  async updateLeadDetail() {
    try {
      this.isLoading = true;
      const payload = this.form.value;
      payload.id = this.lead.id;
      await this.leadService.updateLeadById(this.lead.id, payload).toPromise();
      this.toastr.success('Lead detail updated successfully.');
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to update lead detail. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  async createProject() {
    try {
      this.isLoading = true;
      const project = await this.leadService.createProjectFromLead(this.lead.id).toPromise();
      this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, project.id]);
    } catch (e) {
      this.toastr.error(e, 'Failed to create a project from lead.');
    } finally {
      this.isLoading = false;
    }
  }

  private async searchUserByEmail() {
    try {
      this.isLoading = true;
      this.customer = await this.customerService.searchCustomerByEmail(this.lead.email).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  navigateToProjectDetail(id: string) {
    this.router.navigate(['/', ROUTES.admin.root, ROUTES.admin.projects, id]);
  }
}
