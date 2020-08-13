import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'job-hub-summary-row',
  templateUrl: './summary-row.component.html',
  styleUrls: ['./summary-row.component.scss']
})
export class SummaryRowComponent implements OnInit {

  @Input() label;
  @Input() value;
  @Input() readonly = false;
  @Input() isSummary = false;
  @Input() isDiscount = false;

  @Output() valueChange = new EventEmitter<number>();

  showDiscountEdit = false;

  constructor() { }

  ngOnInit(): void {
  }

}
