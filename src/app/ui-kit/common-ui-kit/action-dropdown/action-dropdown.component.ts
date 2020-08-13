import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'job-hub-action-dropdown',
  templateUrl: './action-dropdown.component.html',
  styleUrls: ['./action-dropdown.component.scss']
})
export class ActionDropdownComponent implements OnInit {

  @Input() color = 'mine-shaft';
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() archive: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
