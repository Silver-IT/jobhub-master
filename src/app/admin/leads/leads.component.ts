import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArchivedFilterType, SortByDateType } from '../../core/models/base';
import { ROUTES } from '../../core/data/routes';
import { enumToOptions } from '../../core/utils/enum.util';

@Component({
  selector: 'job-hub-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  leadForm: FormGroup = this.fb.group({
    sortByDate: this.route.snapshot.queryParams ? (this.route.snapshot.queryParams.sortByDate || SortByDateType.MostRecent) : SortByDateType.MostRecent,
    archivedType: this.route.snapshot.queryParams ? (this.route.snapshot.queryParams.archivedType || ArchivedFilterType.Active) : ArchivedFilterType.Active,
  });

  ROUTES = ROUTES;
  dateSortOptions = enumToOptions<SortByDateType>(SortByDateType);
  archivedTypeOptions = enumToOptions<ArchivedFilterType>(ArchivedFilterType);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  navigateToLeadDetail(id: string) {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.leads, id]);
  }
}
