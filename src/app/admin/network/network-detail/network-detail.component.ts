import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { NetworkContractor, NetworkContractorCategory } from '../../../core/models/network-contractor';
import { NetworkContractorService } from '../../../core/services/network-contractor.service';
import { Option } from '../../../core/models/option';
import { ROUTES } from '../../../core/data/routes';
import { ToastrService } from '../../../core/services/toastr.service';
import { AlertService } from '../../../ui-kit/alert/alert.service';

@Component({
  selector: 'job-hub-network-detail',
  templateUrl: './network-detail.component.html',
  styleUrls: ['./network-detail.component.scss']
})
export class NetworkDetailComponent implements OnInit, OnDestroy {

  isLoading = false;
  contractor: NetworkContractor;
  form: FormGroup;
  categoryOptions: Option<NetworkContractorCategory>[] = this.route.snapshot.data.categories.map(category => ({
    value: category.id,
    label: category.name
  }));
  editMode = false;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private networkContractorService: NetworkContractorService,
    private toastr: ToastrService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.contractor = this.route.snapshot.data.contractor;
    this.editMode = Boolean(this.contractor);
    if (!this.editMode) {
      this.contractor = {} as any;
    }
    this.form = this.networkContractorService.buildContractorForm(this.contractor);
    this.form.get('logoUrl').valueChanges.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(value => {
      this.contractor.logoUrl = value;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  async removeContractor() {
    this.alert.confirmDelete().pipe(filter(value => value)).subscribe(async () => {
      try {
        this.isLoading = true;
        await this.networkContractorService.removeContractorById(this.contractor.id).toPromise();
        this.toastr.success(`Network contractor has been removed.`);
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.network.root]);
      } catch (e) {
        this.toastr.error(e, 'Sorry, failed to remove contractor. Please try again.');
      } finally {
        this.isLoading = false;
      }
    });
  }

  async update() {
    try {
      this.isLoading = true;
      const payload = this.form.value;
      payload.id = this.contractor.id;
      payload.logoUrl = this.contractor.logoUrl;
      if (this.editMode) {
        await this.networkContractorService.updateContractorById(this.contractor.id, payload).toPromise();
        this.toastr.success(`Network contractor updated successfully.`);
      } else {
        await this.networkContractorService.createContractor(payload).toPromise();
        this.toastr.success(`Network contractor has been created successfully.`);
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.network.root]);
      }
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to save network contractor. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }
}
