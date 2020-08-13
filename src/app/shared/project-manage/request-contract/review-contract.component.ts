import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Project } from '../../../core/models/project';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-review-contract',
  templateUrl: './review-contract.component.html',
  styleUrls: ['./review-contract.component.scss']
})
export class ReviewContractComponent implements OnInit {

  @Input() project: Project;
  @Output() contractRequested: EventEmitter<any> = new EventEmitter<any>();

  ROUTES = ROUTES;

  isSaving = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
