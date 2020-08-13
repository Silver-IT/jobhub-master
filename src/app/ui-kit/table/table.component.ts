import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

import { TableColumn } from '../../core/models/table';
import { PageSizeDefault } from '../../core/models/paginator';

@Component({
  selector: 'job-hub-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() skip = 0;
  @Input() pageSize = PageSizeDefault;
  @Input() length = 0;
  @Input() columns: TableColumn[] = [];
  @Input() rows: any[] = [];
  @Input() loading: boolean;
  @Input() emptyDescription = `No items to display.`;
  @Input() queryParams$: Observable<any>;
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.queryParams$) {
      this.queryParams$.subscribe(queryParams => {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams
        });
      });
    }
  }

}
