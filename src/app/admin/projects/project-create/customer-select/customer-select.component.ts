import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'job-hub-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss']
})
export class CustomerSelectComponent implements OnInit {

  @Output() customerSelect = new EventEmitter<string>();

  keyword = '';
  customers = this.route.snapshot.data.customers;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
