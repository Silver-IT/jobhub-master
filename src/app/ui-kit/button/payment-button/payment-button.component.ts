import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'job-hub-payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.scss']
})
export class PaymentButtonComponent implements OnInit {

  @Input() icon;
  @Input() label;
  @Input() description;
  @Input() recommended = false;

  @Output() handleClick = new EventEmitter<any>();

  hovered = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
