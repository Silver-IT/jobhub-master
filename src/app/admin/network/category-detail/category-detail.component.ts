import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { NetworkContractorCategory } from '../../../core/models/network-contractor';
import { NetworkContractorService } from '../../../core/services/network-contractor.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { ROUTES } from '../../../core/data/routes';
import { AlertService } from '../../../ui-kit/alert/alert.service';

@Component({
  selector: 'job-hub-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  category: NetworkContractorCategory;
  isLoading = false;
  editMode = true;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private networkContractorService: NetworkContractorService,
    private toastr: ToastrService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.data.category;
    this.editMode = Boolean(this.category);
    if (!this.editMode) {
      this.category = {} as any;
      this.category.name = '';
      this.category.published = true;
    }
    this.form = this.networkContractorService.buildCategoryForm(this.category);
  }

  async update() {
    try {
      this.isLoading = true;
      const payload = this.form.value;
      payload.id = this.category.id;
      if (this.editMode) {
        await this.networkContractorService.updateCategoryById(this.category.id, payload).toPromise();
        this.toastr.success(`Network contractor category updated successfully.`);
      } else {
        await this.networkContractorService.createCategory(payload).toPromise();
        this.toastr.success(`Network contractor category has been created successfully.`);
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.network.root]);
      }
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to save network contractor category. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  async removeCategory() {
    this.alert.confirmDelete().pipe(filter(value => value)).subscribe(async () => {
      try {
        this.isLoading = true;
        await this.networkContractorService.removeCategoryById(this.category.id).toPromise();
        this.toastr.success(`Network contractor category has been removed.`);
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.network.root]);
      } catch (e) {
        this.toastr.error(e, 'Sorry, failed to remove category. Please try again.');
      } finally {
        this.isLoading = false;
      }
    });
  }
}
